"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

const faqs = [
  {
    question: "What is Madison Meds?",
    answer:
      "Madison Meds is a modern telehealth platform combining advanced AI technology with board-certified medical providers to deliver personalized weight loss and anti-aging treatments—directly to your door. Our mission is simple: to make feeling better easier, faster, and more effective.",
  },
  {
    question: "How Does It Work?",
    answer:
      "You consult online with providers, get personalized plans, and receive treatments at your doorstep.",
  },
  {
    question: "Who Are the Providers?",
    answer: "All providers are licensed and board-certified professionals.",
  },
  {
    question: "Do I Need Insurance?",
    answer: "No insurance is required. Madison Meds provides affordable, direct care.",
  },
  {
    question: "Where is Madison Meds Available?",
    answer: "Currently available in select states, expanding soon nationwide.",
  },
];

const FAQ = () => {
  // ✅ first item open by default
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl space-y-4 font-[Arial] text-[14px]">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`p-4 rounded-[15px] transition-all duration-300 ${
            openIndex === index
              ? "bg-[#1C8C78] text-white"
              : "bg-white text-black border border-gray-200"
          }`}
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between items-center text-left"
          >
            <span className="font-semibold">{faq.question}</span>
            <span>
              {openIndex === index ? (
                // Minus icon: white bg + green icon
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white border-[3px] border-[#1C8C78] transition-transform duration-300 transform scale-105">
                  <Icon
                    icon="ic:outline-minus"
                    width="20"
                    height="20"
                    className="text-[#1C8C78]"
                  />
                </div>
              ) : (
                // Plus icon: gradient bg + white icon
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1C8C78] border-[3px] border-[#1C8C78] transition-transform duration-300 transform hover:scale-105">
                  <Icon
                    icon="ic:outline-plus"
                    width="20"
                    height="20"
                    className="text-white"
                  />
                </div>
              )}
            </span>
          </button>

          {/* ✅ Smooth open/close animation */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openIndex === index ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
            }`}
          >
            <p className="leading-relaxed">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
