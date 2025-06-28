import React from "react";

const ClinTech = () => {
  return (
    <div className="w-[90%] max-w-[1200px] text-center mx-auto flex flex-col justify-center items-center gap-4">
      <h1 className="text-blue-500 font-extrabold text-4xl">
        Clin Technologies
      </h1>
      <p className="text-gray-400 font-normal text-2xl w-[85%]">
        Revolutionizing clinical documentation through{" "}
        <span className="font-semibold text-yellow-400">HIPAA COMPLIANT</span>{" "}
        advanced artificial intelligence, giving healthcare providers more time
        for what truly matters — patient care. try it for{" "}
        <span className="font-semibold text-yellow-400">FREE</span> today
      </p>
      <p className="text-gray-100 font-normal text-xl w-[50%]">
        Our sophisticated AI platform intelligently processes clinical
        conversations, creating accurate documentation that integrates with your
        existing EMR system.
      </p>
      <div className="flex gap-4">
        <button className="bg-transparent border-2 border-[#3b82f6] text-white px-8 py-4 rounded-full hover:bg-[rgba(59,130,246,0.1)] transition-colors shadow-[0_5px_15px_rgba(37,99,235,0.2)] inline-block text-center">
          Login
        </button>
        <button className="bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white px-8 py-4 rounded-full hover:translate-y-[-3px] hover:shadow-[0_8px_20px_rgba(37,99,235,0.5)] transition-all shadow-[0_5px_15px_rgba(37,99,235,0.4)] relative overflow-hidden z-1inline-block text-center">
          Signup
        </button>
      </div>
    </div>
  );
};

export default ClinTech;
