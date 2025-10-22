import React from 'react';
import Header from '@/components/sectionheader/Header';

const LoginSection = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col gap-2 items-center w-1/2 justify-center p-20">
        <Header title="Log in to see your account details"/>
        <p className="text-md">View past trips, tailored suggestions, support resources, and more.</p>
        <div className="flex items-center gap-5 mt-5">
            <button className="px-5 py-3 cursor-pointer bg-black rounded-lg text-white">Log in to your account</button>
            <button className="border-0 cursor-pointer border-b-2 text-gray-500 px-5 py-2">Create an Account</button>
        </div>
      </div>
      <div className="flex items-center justify-center w-1/2 p-20">
      <img className="w-[500px] rounded-lg" src="images/1701260785974.png" alt="" />
      </div>
    </div>
  );
}

export default LoginSection;
