import React from "react";
import Header from "@/components/sectionheader/Header";

const LoginSection = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center px-6 md:px-12 py-16">
      {/* Left Section */}
      <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left w-full md:w-1/2 gap-4 md:gap-6">
        <Header title="Log in to see your account details" />
        <p className="text-gray-600 text-sm md:text-base max-w-md">
          View past trips, tailored suggestions, support resources, and more.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="w-full sm:w-auto px-6 py-3 bg-black text-white text-sm rounded-lg hover:bg-gray-800 transition">
            Log in to your account
          </button>
          <button className="w-full sm:w-auto text-sm text-gray-600 border-b-2 border-transparent hover:border-gray-400 transition">
            Create an Account
          </button>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img
          className="w-[300px] sm:w-[400px] md:w-[500px] rounded-lg object-cover"
          src="images/1701260785974.png"
          alt="Login illustration"/>
      </div>
    </section>
  );
};

export default LoginSection;














