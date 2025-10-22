
"use client";
import React, { useState } from "react";

const Hero = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");

  const toggleMenu = (menu:any) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="w-full flex flex-col gap-10 items-center justify-center py-16">
      <h1 className="font-bold text-5xl text-center">Go anywhere with Uber</h1>

      <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col items-center justify-between gap-2 flex-wrap">
        <div className="relative px-5 py-2 bg-gray-200 rounded-lg text-black w-[20vw]">
          <button
            onClick={() => toggleMenu("menu1")}
            className="focus:outline-none">
            Ride Type ▼
          </button>
          {openMenu === "menu1" && (
            <div className="absolute bg-white shadow-lg rounded-md mt-2 w-44 text-sm">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Economy</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Premium</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Shared</a>
            </div>
          )}
        </div>

        {/* Dropdown 2 */}
        <div className="relative px-5 py-2 bg-gray-200 rounded-lg text-black w-[20vw]">
          <button
            onClick={() => toggleMenu("menu2")}
            className="focus:outline-none">
            Pickup ▼
          </button>
          {openMenu === "menu2" && (
            <div className="absolute bg-white shadow-lg rounded-md mt-2 w-44 text-sm">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Current Location</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Saved Places</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Custom Address</a>
            </div>
          )}
        </div>

        {/* Dropdown 3 — Destination with Calendar */}
        <div className="relative px-5 py-2 w-[12vw] bg-gray-200 rounded-lg text-black">
          <button
            onClick={() => toggleMenu("menu3")}
            className="focus:outline-none">
            Destination ▼
          </button>
          {openMenu === "menu3" && (
            <div className="absolute bg-white shadow-lg rounded-md mt-2 w-56 text-sm p-3 flex flex-col gap-2">
              <label className="text-gray-700 text-sm">Select Destination</label>
              <input
                type="text"
                placeholder="Enter address..."
                className="border rounded-md px-3 py-1 text-black outline-none focus:ring-2 focus:ring-gray-200"/>
              <label className="text-gray-700 text-sm mt-2">Pick Travel Date</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="border rounded-md px-3 py-1 text-black outline-none focus:ring-2 focus:ring-gray-200"/>
              <button className="mt-2 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">
                Confirm
              </button>
            </div>
          )}
        </div>

        {/* Dropdown 4 */}
        <div className="relative w-[12vw] px-5 py-2 bg-gray-200 rounded-lg text-black">
          <button
            onClick={() => toggleMenu("menu4")}
            className="focus:outline-none">
            Schedule ▼
          </button>
          {openMenu === "menu4" && (
            <div className="absolute bg-white shadow-lg rounded-md mt-2 w-44 text-sm">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Now</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">In 30 Minutes</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Custom Time</a>
            </div>
          )}
        </div>
        <button className="px-5 py-3 text-white font-vbold bg-black rounded-lg">
          Set Prices
          </button>
      </div>

      {/* Login Section */}
      <div className="flex items-center justify-center gap-5 mt-8 border rounded-lg p-8 border-gray-300">
        <p className="text-lg">Login to see your recent activity</p>
        <button className="px-5 py-2 bg-black text-white rounded-lg">
          Login
        </button>
      </div>
    </div>
  );
};

export default Hero;






















