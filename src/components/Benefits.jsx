import React from "react";
import { LoginBtn, SignupBtn } from "./common-btn";

const Benefits = () => {
  return (
    <div>
      <section
        id="benefits"
        className="bg-[#1e293b] py-12 mt-20 md:py-24 px-10 min-h-[400px]"
      >
        <h2 className="text-[2.074rem] font-bold mb-8 text-[#60a5fa] text-center tracking-tight">
          Benefits
        </h2>
        <div className="max-w-[1000px] mx-auto">
          <p className="mb-4">
            Healthcare providers using Clin Technologies solutions report:
          </p>
          <ul className="mb-8 pl-8 list-disc">
            <li className="mb-2">Reduction in documentation time by 40-60%</li>
            <li className="mb-2">
              Improved work-life balance with less after-hours charting
            </li>
            <li className="mb-2">
              Enhanced patient interaction due to less focus on note-taking
            </li>
            <li className="mb-2">
              More comprehensive and consistent clinical documentation
            </li>
            <li className="mb-2">
              Reduced risk of documentation errors and omissions
            </li>
          </ul>
          <div className="flex justify-center gap-5 mt-[30px] md:flex-row flex-col">
            <LoginBtn />
            <SignupBtn />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Benefits;
