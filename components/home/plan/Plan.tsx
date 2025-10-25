import React from "react";
import Header from "@/components/sectionheader/Header";
import { CiCalendarDate, CiTimer } from "react-icons/ci";
import { FaBoxArchive } from "react-icons/fa6";

const Plan = () => {
  return (
    <section className="w-full py-10 px-6">
      <Header title="Plan for later"/>
      <div className="flex flex-col lg:flex-row gap-5 mt-8">
        {/* Left Section */}
        <div className="w-full lg:w-2/3 bg-blue-100 p-8 rounded-xl flex flex-col justify-between">
          <div className="flex flex-col gap-4 w-full md:w-2/3">
            <Header title="Get your ride right with Uber Reserve"/>
            <p className="text-sm text-gray-600 font-medium">
              Choose date and time
            </p>
            {/* Date & Time Selectors */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="flex items-center gap-2 w-full sm:w-1/2 bg-white rounded-lg px-5 py-3 text-gray-600 shadow-sm">
                <CiCalendarDate className="text-lg"/>
                <p>Date</p>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-1/2 bg-white rounded-lg px-5 py-3 text-gray-600 shadow-sm">
                <CiTimer className="text-lg"/>
                <p>Time</p>
              </div>
            </div>

            <button className="bg-black rounded-lg text-white text-sm font-semibold py-3 w-full mt-4 hover:bg-gray-800 transition">
              Next
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/3 border border-gray-200 bg-white rounded-xl p-8 flex flex-col gap-4">
          <h1 className="font-bold text-lg">Benefits</h1>

          <div className="flex items-start gap-3">
            <CiCalendarDate className="text-xl text-gray-700" />
            <p className="text-sm text-gray-700">
              Choose your exact pickup time up to 90 days in advance.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <CiTimer className="text-xl text-gray-700" />
            <p className="text-sm text-gray-700">
              Extra wait time included to meet your ride.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <FaBoxArchive className="text-xl text-gray-700" />
            <p className="text-sm text-gray-700">
              Cancel at no charge up to 60 minutes in advance.
            </p>
          </div>

          <p className="text-gray-500 text-sm underline cursor-pointer hover:text-gray-700 transition">
            See terms
          </p>
        </div>
      </div>
    </section>
  );
};

export default Plan;
