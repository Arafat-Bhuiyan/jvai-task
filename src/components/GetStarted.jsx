import React from "react";
import { LoginBtn, SignupBtn } from "./common-btn";

const GetStarted = () => {
  return (
    <div>
      <section
        id="benefits"
        className="bg-[#1e293b] py-12 mt-20 md:py-24 px-10 min-h-96"
      >
        <h2 className="text-4xl font-bold mb-8 text-blue-500 text-center tracking-tight">
          Get Started
        </h2>
        <div className="max-w-[1000px] mx-auto">
          <p className="text-center mb-4">
            Ready to transform your clinical documentation process? Contact our
            team to learn how Clin Technologies can be tailored to your specific
            healthcare setting.{" "}
          </p>
          <div className="max-w-[600px] mx-auto bg-slate-900/90 p-8 rounded-xl shadow-lg border border-blue-800">
            <div className="mt-8 text-center">
              <p className="text-gray-400">
                Or reach us directly via email at <a href="" class="text-blue-400 hover:underline">support@clintechso.com</a>
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-5 mt-[30px] md:flex-row flex-col">
            <LoginBtn />
            <SignupBtn />
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;
