import React from "react";

const Navbar = () => {
  return (
    <nav className="text-red  bg-blue-700 w-full h-full flex justify-between text-white p-5">
      <div className="flex items-center justify-between gap-5 cursor-pointer">
        <img src="/Logo-Money-Wallet.png" alt="E-Wallet" className="w-10" />
        <h1 className="text-xl">E-Wallet</h1>
      </div>
      <div className="hidden lg:flex justify-between gap-5">
        <div
          href=""
          className="p-3 border font-semibold rounded-lg cursor-pointer border-white hover:bg-white hover:text-blue-700 "
        >
          Sign In
        </div>
        <div
          href=""
          className="p-3 border font-semibold rounded-lg cursor-pointer bg-white text-blue-700 hover:bg-blue-700 hover:border hover:border-white hover:text-white"
        >
          Sign Up
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
