import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
  const {getEmail,getPassword,logInUser,signInGoogle} = useFirebase()
  const [user] = useAuthState(auth);
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if(user){
    
    navigate(from, { replace: true });
  }

  return (
    <div className="flex justify-center mt-24 md:mt-28 lg:mt-52">
      <form onSubmit={logInUser} className="w-[90%] md:w-[450px] lg:w-[600px] border-2 px-4 py-10 rounded">
        <div className="mb-6">
          <div onClick={signInGoogle}   className="shadow-sm   text-center bg-gray-50 border border-gray-300 text-gray-900  rounded-full   block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white  dark:shadow-sm-light" >
            <span className="flex items-center text-sm md:text-lg font-semibold"> <FcGoogle size={30}/><p className="flex justify-center w-full">Continue with Google</p></span>
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
          <input onChange={getEmail} type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required=""/>
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
          <input onChange={getPassword} type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required=""/>
        </div>

        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
          <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required=""/>
        </div>

        <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me </label>

        </div>
        <button type="submit" className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login
        </button>
        <Link to='/register' className="lg:ml-5 ml-2 font-medium text-sm pt-5 lg:pt-0 text-gray-900 block lg:inline dark:text-gray-300">Create an account?<span className="text-blue-600 hover:underline dark:text-blue-500 "> Register</span>
        </Link>
      </form>
    </div>
  );
};

export default Login;