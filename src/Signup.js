import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <form action="">
        <div className=" min-h-screen h-full flex flex-col my-1 ">
          <div className="container  max-w-sm mx-auto flex-1 flex flex-col items-center mt-4 px-2">
            <div className=" px-6 py-2  rounded shadow-md  text-black w-full">
              <h1 className="md:mb-8 mb-4 md:text-3xl text-2xl text-center font-bold">
                Sign up
              </h1>

              <input
                type="text"
                required
                className="block border border-gray-400 w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
              />
              <input
                type="number"
                required
                className="block border border-gray-400 w-full p-3 rounded mb-4"
                name="num"
                placeholder="Number"
              />

              <input
                type="password"
                className="block border border-gray-400 w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
              />
              <div className="flex justify-start items-center space-x-2 w-full p-1 rounded mb-2">
                <input type="checkbox" name="checkbox" />
                <p>Remember Me ?</p>
              </div>

              <button
                type="submit"
                className="w-full text-center font-semibold py-3 rounded bg-red-300  hover:bg-red-400  my-1"
              >
                Login
              </button>

              
        
            </div>
            <div className="text-grey-dark w-full flex  justify-end  md:mt-3 mt-1 ">
              <Link to={'/About'}>
                
                <span className=" cursor-pointer no-underline mx-1 font-semibold text-orange-900 hover:text-orange-600 ">
                  Login? {' '}
                </span>
              </Link>
            </div>
           
          </div>
        </div>
      </form>
    </>
  );
};

export default Signup;
