import React from "react";
import Link from "next/link";

const Signin = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="absolute top-4 right-4">
        <Link href="#">
          <u>Already have an account? Sign in</u>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-start w-20rem h-35rem bg-slate-300 sm:w-35rem sm:h-35rem xs:w-30rem xs:h-30rem md:w-45rem md:h-35rem lg:w-60rem lg:h-35rem xl:w-65rem xl:h-30rem rounded-md shadow-2xl">
        <h1 className="font-exo text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-4">
          Create your Account
        </h1>

        <div className="grid grid-rows-2 gap-6 px-4 my-8 w-full">
          {/* Form 1: Name and Last Name */}
          <form className="flex flex-col gap-3">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="flex flex-col w-full md:w-1/2">
                <label
                  htmlFor="firstName"
                  className="mb-1 font-exo xs:text-lg sm:text-lg md:text-lg lg:text-lg xl:text-2xl"
                >
                  First Name
                </label>
                <input
                  placeholder="Piyush"
                  type="text"
                  id="firstName"
                  className="border w-full  shadow-md placeholder-text-slate-500 border-gray-400 rounded-md px-2 py-1"
                />
              </div>
              <div className="md:w-6"></div>
              <div className="flex flex-col w-full md:w-1/2">
                <label
                  htmlFor="lastName"
                  className="mb-1 font-exo xs:text-lg sm:text-lg md:text-lg lg:text-lg xl:text-2xl"
                >
                  Last Name
                </label>
                <input
                  placeholder="Kashyap"
                  type="text"
                  id="lastName"
                  className="border w-full shadow-md placeholder-text-slate-500 border-gray-400 rounded-md px-2 py-1"
                />
              </div>
            </div>
          </form>

          {/* Form 2: Email and Password */}
          <form className="flex flex-col gap-3">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="flex flex-col w-full md:w-1/2">
                <label
                  htmlFor="email"
                  className="mb-1 font-exo xs:text-lg sm:text-lg md:text-lg lg:text-lg xl:text-2xl"
                >
                  E-Mail
                </label>
                <input
                  placeholder="example@example.com"
                  type="email"
                  id="email"
                  className="border w-full shadow-md placeholder-text-slate-500 border-gray-400 rounded-md px-2 py-1"
                />
              </div>
              <div className="md:w-6"></div>
              <div className="flex flex-col w-full md:w-1/2">
                <label
                  htmlFor="password"
                  className="mb-1 font-exo xs:text-lg sm:text-lg md:text-lg lg:text-lg xl:text-2xl"
                >
                  Password
                </label>
                <input
                  placeholder="Your Password"
                  type="password"
                  id="password"
                  className="border w-full shadow-md placeholder-text-slate-500 border-gray-400 rounded-md px-2 py-1"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="flex items-center justify-center space-x-9">
          <button 
           className="w-20 h-8 font-ubuntu bg-gray-400  rounded-md shadow-md  transform transition duration-300 hover:bg-green-500 hover:scale-110">
            Confirm
          </button>
          <button className="w-20 h-8 font-ubuntu bg-gray-400 rounded-md shadow-md transform transition duration-300 hover:bg-red-600 hover:scale-110">
            Cancel
          </button>
        </div>
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <span className="absolute px-3 font-medium sm:text-base  md:text-base lg:text-base xl:text-base text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
            or
          </span>
          {/* reuse the line */}
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
  );
};

export default Signin;
