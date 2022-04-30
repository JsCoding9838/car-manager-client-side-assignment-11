import { useState } from "react";

const useFirebase = () => {
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
// console.log(userInfo.password)
  //create a new user with email & password
  const createNewUser = (event) => {
    event.preventDefault();
  };

  //get all input filed value
  const getEmail = (event) => {
    const email = event.target.value;

    const regex =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const validEmail = regex.test(email.toLowerCase());
    // console.log(validEmail);
    if (validEmail) {
      setUserInfo({ ...userInfo, email: validEmail });
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
      setErrors({ ...errors, passwordError: " invalid email" });
      setUserInfo({ ...userInfo, password: "" });
    }
  };

  const getRepeatPassword = (event) => {
    const rePassword = event.target.value;

    if(userInfo.password === rePassword){
        setUserInfo({...userInfo, repeatPassword:rePassword})
        setErrors({...errors,   repeatPasswordError:''})
  

    }else{
        setUserInfo({...userInfo, repeatPassword:''})
        setErrors({...errors,   repeatPasswordError:"password didn't match"})

    }

  };
console.log("first", userInfo.password, errors.passwordError)
console.log("second", userInfo.repeatPassword, errors.repeatPasswordError)
  return {
    getEmail,
    getPassword,
    getRepeatPassword,

    createNewUser,
    errors
  };
};

export default useFirebase;
