import React from "react";
import { FaUser } from "react-icons/fa";
import Link from "next/link";

const Login = () => {
  return (
    <div className="flex xs:mx-7 xs:my-7 sm:mx-10 sm:my-10 flex-col text-md font-exo">
      <div className="flex justify-end xs:mx-4 xs:my4 sm:mx-2 sm:my-2 ">
        <Link href="/Signup">
          <u>Don't Have an Account? Create New </u>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center rounded-full bg-gray-600 text-gray-400 text-7xl h-24 w-24 mb-4 ">
          <FaUser />
        </div>

        {/* user */}
      </div>
      <div className="flex items-center justify-center flex-col">
        <div className="w-fit h-fit sm:w-fit sm:h-fit xs:w-fit xs:h-fit  md:w-fit md:h-fit lg:w-fit lg:h-fit xl:w-30rem xl:h-30rem  rounded-md shadow-2xl bg-slate-300 mb-4">
          <h1 className="flex my-3 text-3xl items-center font-ubuntu justify-center">
            Login
          </h1>
          <form className="flex flex-col px-6 py-10 gap-y-6 items-center justify-center">
            <div className="flex w-full sm:w-auto sm:h-auto xl:w-auto xl:h-auto md:w-auto md:h-auto ">
              <label
                className="sm:text-base   md:text-base lg:text-lg xl:text-xl font-climate w-24"
                htmlFor="username"
              >
                Username
              </label>
              <input placeholder="Enter username Or Email"
                className="h-10 w-40 bg-slate-100 sm:w-fit md:w-fit lg:w-fit xl:w-fit  flex-grow px-4 py-4 shadow-md rounded-md"
                type="text"
              />
            </div>

            <div className="flex w-full sm:w-auto sm:h-auto xl:w-auto xl:h-auto md:w-auto md:h-auto mt-4">
              <label
                className=" sm:text-base  md:text-base lg:text-lg xl:text-xl font-climate w-24"
                htmlFor="password"
              >
                Password
              </label>
              <input
              placeholder="Enter your password"
                className="h-10 bg-slate-100  w-40 sm:w-fit md:w-fit lg:w-fit xl:w-fit  flex-grow px-4 py-4  shadow-md rounded-md"
                type="text"
              />
            </div>
          </form>
          <div className="flex my-4 font-ubuntu items-center justify-center  sm:text-base  md:text-base lg:text-lg xl:text-lg">
            <a href="#">Forgotten password?</a>
          </div>
          <div className="flex  font-ubuntu items-center justify-center  sm:text-base  md:text-base lg:text-lg xl:text-lg">
            <a href="#">Create an account</a>
          </div>
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <span className="absolute px-3 font-medium sm:text-base  md:text-base lg:text-base xl:text-base text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
              or
            </span>
          </div>

          <div className="flex flex-row items-center justify-center gap-5">
          
            <img
              src="/google.svg"
              alt="google"
              style={{ width: "45px", height: "45px", cursor: "pointer" }}
            />
            <img
              src="/apple.svg"
              alt="apple"
              style={{ width: "45px", height: "43px", cursor: "pointer" }}
            />
          </div>
        </div>
      </div>

      <footer className="flex items-center justify-center">
        <div className="my-6 font-montserrat-alt">© 2024 @ Piyush</div>
      </footer>
    </div>
  );
};

export default Login;
