import React from "react";
import { LoginBtn, SignupBtn } from "./common-btn";

const ClinTech = () => {
  return (
    <div className="w-[90%] max-w-[1200px] mt-24 text-center mx-auto flex flex-col justify-center items-center gap-4">
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
        <LoginBtn />
        <SignupBtn />
      </div>
    </div>
  );
};

export default ClinTech;
