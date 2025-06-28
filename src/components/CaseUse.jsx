import React from "react";

const CaseUse = () => {
  return (
    <div>
      <section
        id="case-use"
        className="py-12 md:py-24 px-10 min-h-96 bg-slate-900/90"
      >
        <h2 className="text-4xl font-bold mb-8 text-blue-500 text-center tracking-tight">
          Case Use
        </h2>
        <div className="max-w-[1000px] mx-auto">
          <p className="mb-4">
            See how healthcare providers across specialties are transforming
            their practice with Clin Technologies:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1200px] w-full mx-auto mt-8">
            <div className="bg-[rgba(30,58,138,0.3)] rounded-xl p-8 border border-[rgba(96,165,250,0.2)] shadow-xl transition-all duration-500 relative overflow-hidden hover:translate-y-[-10px] hover:shadow-2xl">
              <h2 className="text-2xl font-semibold text-blue-400 mt-0 mb-4">
                Primary Care
              </h2>
              <p>
                Dr SJ M.D reduced her documentation time by 52%, allowing her to
                see 3 more patients daily while finishing her charts before
                leaving the office.
              </p>
              <p className="italic text-white mb-2 mt-6 pl-4 border-l-2 border-[rgba(96,165,250,0.3)]">
                "This AI tool streamlines a tedious process, reduces 'click
                fatigue,' and helps me reclaim some sanity."
              </p>
              <p className="italic text-right text-gray-400 mt-2.5 text-sm font-medium">
                — Dr. SJ, MD
              </p>
            </div>
            <div className="bg-[rgba(30,58,138,0.3)] rounded-xl p-8 border border-[rgba(96,165,250,0.2)] shadow-xl transition-all duration-500 relative overflow-hidden hover:translate-y-[-10px] hover:shadow-2xl">
              <h2 className="text-2xl font-semibold text-blue-400 mt-0 mb-4">
                Emergency Medicine
              </h2>
              <p>
                Our ED department implemented Clin Tech, resulting in more
                thorough documentation and a 70% decrease in chart completion
                time during high-volume periods. Our nurses love it.
              </p>
              <p className="italic text-right text-gray-400 mt-2.5 text-sm font-medium">
                — Emergency Department (ED) Nurse Manager
              </p>
            </div>
            <div className="bg-[rgba(30,58,138,0.3)] rounded-xl p-8 border border-[rgba(96,165,250,0.2)] shadow-xl transition-all duration-500 relative overflow-hidden hover:translate-y-[-10px] hover:shadow-2xl">
              <h2 className="text-2xl font-semibold text-blue-400 mt-0 mb-4">
                Behavioral Health
              </h2>
              <p className="italic text-white mb-2 mt-6 pl-4 border-l-2 border-[rgba(96,165,250,0.3)]">
                "Chartwright has been transformative for our clinic. Our
                therapists were drowning in documentation; We've slashed average
                charting time to under 3 minutes per patient, freeing up hours
                for direct care. More importantly, we've seen a significant
                reduction in documentation errors and compliance flags. It's not
                just faster; it's smarter documentation."
              </p>
              <p className="italic text-right text-gray-400 mt-2.5 text-sm font-medium">
                — Clinical Director, Behavioral Health Practice
              </p>
            </div>
            <div className="bg-[rgba(30,58,138,0.3)] rounded-xl p-8 border border-[rgba(96,165,250,0.2)] shadow-xl transition-all duration-500 relative overflow-hidden hover:translate-y-[-10px] hover:shadow-2xl">
              <h2 className="text-2xl font-semibold text-blue-400 mt-0 mb-4">
                Case Management
              </h2>
              <p className="italic text-white mb-2 mt-6 pl-4 border-l-2 border-[rgba(96,165,250,0.3)]">
                "Honestly, with the number of patients I manage, documentation
                felt like a constant, losing battle. But this AI feels like
                getting an assistant. It takes my detailed notes and instantly
                creates the clear, customized charts I need. I'm getting hours
                back each week – hours I can now spend directly with patients,
                tackling barriers, not just typing."
              </p>
              <p className="italic text-right text-gray-400 mt-2.5 text-sm font-medium">
                — Social Worker/Case Manager
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseUse;
