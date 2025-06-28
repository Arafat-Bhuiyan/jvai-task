import React from "react";

const InAction = () => {
  return (
    <div>
      <section
        id="inAction"
        className="py-12 md:py-16 px-10 min-h-[400px] bg-[#1e293b]"
      >
        <h2 className="text-[2.074rem] font-bold mb-8 text-[#60a5fa] text-center tracking-tight">
          See Our Solutions in Action
        </h2>
        <div className="max-w-[1000px] leading-loose mx-auto">
          <div className="max-w-[1000px] relative shadow-[0_4px_15px_rgba(0,0,0,0.2)] text-[#f8fafc] leading-[1.6] my-5 mx-auto rounded-[10px] overflow-hidden bg-[#1e293b]">
            <div className="flex bg-[#0f172a] relative z-[30] border-b border-[rgba(148, 163, 184, .2)]">
              <div className="cursor-pointer text-center bg-[#0f172a] text-[#94a3b8] font-semibold px-5 py-[15px] transition duration-300 flex-[1_1_0%] border-r border-[rgba(148, 163, 184, .2)]">
                TranscriptX
              </div>
              <div className="cursor-pointer text-center bg-[#0f172a] text-[#94a3b8] font-semibold px-5 py-[15px] transition duration-300 flex-[1_1_0%] border-r border-[rgba(148, 163, 184, .2)]">
                Chartwright
              </div>
              <div className="cursor-pointer text-center bg-[#0f172a] text-[#94a3b8] font-semibold px-5 py-[15px] transition duration-300 flex-[1_1_0%] border-r border-[rgba(148, 163, 184, .2)]">
                Redactify
              </div>
              <div className="cursor-pointer text-center bg-[#0f172a] text-[#94a3b8] font-semibold px-5 py-[15px] transition duration-300 flex-[1_1_0%] border-r border-[rgba(148, 163, 184, .2)]">
                Validify
              </div>
            </div>
            <div className="bg-[#3b82f6] text-[#f8fafc] text-center cursor-pointer font-medium relative z-[30] py-[12px] px-5 transition-colors duration-300">
              Click to expand comparison
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InAction;
