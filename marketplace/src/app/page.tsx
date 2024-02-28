import React from 'react';
import Login from './login'; 
import Signup from './signup'; // Changed from 'signup' to 'Signup'

const Page = () => { 
  return (
    <div className="">
       <Login />  
     <Signup/> 
    </div>
  );
};

export default Page;
