"use client";
import { useState } from "react";
import Image from "next/image";

const Bmicalculator = () => {
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    const heightInInches = parseInt(feet || 0) * 12 + parseInt(inches || 0);
    if (heightInInches > 0 && weight > 0) {
      const heightInMeters = heightInInches * 0.0254;
      const weightInKg = weight * 0.453592;
      const bmiValue = weightInKg / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));
    } else {
      setBmi("Invalid input");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-2xl text-center mt-5 md:mt-20 h-[476px]">
      {/* Icon */}
      <div className="flex justify-center mb-4">
        <Image
          src="/assets/images/bmi-cion.png"
          width={40}
          height={40}
          alt="BMI Icon"
        />
      </div>
      <h1 className="text-2xl font-bold">BMI Calculator</h1>
      <p className="text-sm opacity-[0.7]">
        check If you qualify for our program
      </p>

      {/* Height Input */}
      <label className="block text-xs font-medium mb-2 text-left">Height</label>
      <div className="flex gap-4 mb-4">
        <div className="relative w-1/2">
          <input
            type="text"
            value={feet}
            onChange={(e) => setFeet(e.target.value)}
            className="w-full p-2 border rounded-2xl py-[25px] pr-10 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"/>
          <span className="absolute right-3 top-1/2 -translate-y-1/2  text-sm">
            ft
          </span>
        </div>
        <div className="relative w-1/2">
          <input
            type="text"
            value={inches}
            onChange={(e) => setInches(e.target.value)}
            className="w-full p-2 border rounded-2xl py-[25px] pr-10 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2  text-sm">
            in
          </span>
        </div>
      </div>

      {/* Weight Input */}
      <label className="block text-xs font-medium mb-2 text-left">Weight</label>
      <div className="relative w-full mb-10">
        <input
          type="text"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full p-2 py-[25px] border rounded-2xl pr-12 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2  text-sm">
          lb
        </span>
      </div>

      {/* Button */}
      <button
        onClick={calculateBMI}
        className="w-full text-sm text-white py-3 px-7 rounded-[50px] font-bold transition bg-gradient-to-b from-[#167363] to-[#1C8C78] shadow-[0_4px_40px_0_rgba(0,0,0,0.12)] cursor-pointer"
      >
        Calculate BMI
      </button>

      {/* Result */}
      {bmi && (
        <div className="mt-4 text-lg font-semibold">
          Your BMI: <span className="text-primary">{bmi}</span>
        </div>
      )}
    </div>
  );
};

export default Bmicalculator;
