import React from "react";
import { FaUser } from "react-icons/fa"; 

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">

      <div className="flex items-center justify-center rounded-full bg-gray-200 text-blue-500 text-7xl h-24 w-24 mb-4 lg:mb-1">
        <FaUser />
      </div>


      <div className="flex items-center justify-center">
        <div className="w-80 h-80 sm:w-96 sm:h-96 md:w-96 md:h-96 lg:w-25rem lg:h-25rem xl:w-30rem xl:h-30rem  rounded-md shadow-2xl bg-slate-300">
          
        </div>
      </div>
    </div>
  );
};

export default Login;
