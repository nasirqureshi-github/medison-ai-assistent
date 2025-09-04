"use client";
import { useState } from "react";

const AuthModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("login");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={onClose}>
      {/* Modal Box */}
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md"   onClick={(e) => e.stopPropagation()} >
        {/* Header */}
        <div className="flex justify-between items-center  px-4 py-3">
          <h2 className="text-xl font-semibold">
            {activeTab === "login" ? "Login" : "Sign Up"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-3xl cursor-pointer"
          >
            ×
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab("login")}
            className={`flex-1 py-2 text-center font-bold cursor-pointer ${
              activeTab === "login"
                ? "border-b-2 border-[#167363] text-primary"
                : "text-primary"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setActiveTab("signup")}
            className={`flex-1 py-2 text-center font-bold cursor-pointer ${
              activeTab === "signup"
                ? "border-b-2 border-[#167363] text-primary"
                : "text-primary"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {activeTab === "login" ? (
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#167363] outline-none"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Password</label>
                <input
                  type="password"
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#167363] outline-none"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-[#167363] text-white rounded-lg hover:bg-[#126457] transition cursor-pointer"
              >
                Login
              </button>
            </form>
          ) : (
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#167363] outline-none"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#167363] outline-none"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Password</label>
                <input
                  type="password"
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#167363] outline-none"
                  placeholder="Create a password"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-[#167363] text-white rounded-lg hover:bg-[#126457] transition"
              >
                Sign Up
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
