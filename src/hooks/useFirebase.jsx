import { useState } from "react";
import toast from "react-hot-toast";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
 
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import { GridLoader } from "react-spinners";



const useFirebase = () => {
  let navigate = useNavigate();
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const [token, setToken] = useState("");

  const [user] = useAuthState(auth);
  const [createUserWithEmailAndPassword, newUser, newUserLoading] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [signInWithEmailAndPassword, loginUser, loginLoding, signInError] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading] =
    useSignInWithGoogle(auth);

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
    repeatPasswordError: "",
  });
  // get all itmes securly
  const jwtToken = () => {
    if (user) {
      fetch("https://polar-plateau-07967.herokuapp.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: user.email }),
      })
        .then((res) => res.json())
        .then((data) => {
          const accessToken = data.token;

          localStorage.setItem("AccessToken", accessToken);
          setToken(accessToken);
        });
    }
  };
  jwtToken();
  if (loginUser) {
    toast.success("Login successfully", { id: 1 });
  }
  
  if (googleUser) {
    toast.success("Login successfully", { id: 1 });
  }

  if (newUserLoading) {
    return (
      <div className="flex justify-center pt-[35vh] ">
        {" "}
        <GridLoader size={10} />
      </div>
    );
  }
  if (loginLoding) {
    return (
      <div className="flex justify-center pt-[35vh] ">
        {" "}
        <GridLoader size={10} />
      </div>
    );
  }
  if (googleLoading) {
    return (
      <div className="flex justify-center pt-[35vh] ">
        {" "}
        <GridLoader size={10} />
      </div>
    );
  }
  if (signInError) {
    toast.error("We cannot find an account with that email address", {
      id: 1,
    });
  }

  //create a new user with email & password
  const createNewUser = (event) => {
    event.preventDefault();
    if (userInfo.password === userInfo.repeatPassword && userInfo.password && userInfo.repeatPassword && userInfo.email) {
   createUserWithEmailAndPassword(userInfo.email, userInfo.password);
   
     navigate('/login')
  toast.success("Register successfully", { id: 1 });




    }
  };

  const logInUser = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(userInfo.email, userInfo.password);
    if (token) {
      navigate("/home");
    }
  };
  const signInGoogle = () => {
    signInWithGoogle();
    if (token) {
      navigate("/home");
    }
  };

  //get all input filed value
  const getEmail = (event) => {
    const email = event.target.value;

    const regex =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const validEmail = regex.test(email.toLowerCase());

    if (validEmail) {
      setUserInfo({ ...userInfo, email: email });
      setErrors({ ...errors, emailError: "" });
    } else {
      setErrors({ ...errors, emailError: " invalid email" });
      setUserInfo({ ...userInfo, email: "" });
    }
  };

  const getPassword = (event) => {
    const password = event.target.value;

    /* Minimum eight characters, at least one letter, one number and one special character: */
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const validPassword = regex.test(password);

    if (validPassword) {
      setUserInfo({ ...userInfo, password: password });
      setErrors({ ...errors, passwordError: "" });
    } else {
      setErrors({ ...errors, passwordError: " invalid password" });
      setUserInfo({ ...userInfo, password: "" });
    }
  };

  const getRepeatPassword = (event) => {
    const rePassword = event.target.value;
    if (rePassword === userInfo.password) {
      setUserInfo({ ...userInfo, repeatPassword: rePassword });
      setErrors({ ...errors, repeatPasswordError: "" });
    } else {
      setUserInfo({ ...userInfo, repeatPassword: "" });
      setErrors({ ...errors, repeatPasswordError: "password didn't match" });
    }
  };

  const resetPassword = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    console.log(email);
    if (email) {
      await sendPasswordResetEmail(email);
      if (sending) {
        toast("sending email...", {
          style: {
            borderRadius: "10px",
          },
        });
      } else {
        toast.error("please enter your email");
      }
    }
  };

  return {
    resetPassword,
    getEmail,
    getPassword,
    getRepeatPassword,
    createNewUser,
    logInUser,
    signInGoogle,
    errors,
  };
};

export default useFirebase;
