import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="w-full py-5 bg-black">
        <div className="w-[90%] flex items-center justify-between mx-auto">
            <div className="flex items-center justify-center gap-10">
                <span className="text-white text-3xl">Uber</span>
                    <Link className="text-white text-sm" href="#home">Ride</Link>
                    <Link className="text-white text-sm" href="#about">Earn</Link>
                    <Link className="text-white text-sm" href="blog">Business</Link>
                    <Link className="text-white text-sm" href="contacts">Uber Eats</Link>
                    <Link className="text-white text-sm" href="Testimonials">About</Link>
            </div>
            <div className="flex items-center justify-center gap-5">
                <p className="text-white text-sm">EN</p>
                <h1 className="text-white text-sm">Help</h1>
                <button className="text-white cursor-pointer px-3 py-2 bg-black text-sm">Log in</button>
                <button className="px-3 py-2 text-sm cursor-pointer rounded-full bg-white text-black">Sign Up</button>
            </div>
        </div>
    </div>
  );
}

export default Navbar;
