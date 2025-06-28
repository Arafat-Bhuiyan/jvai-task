const Technology = () => {
  return (
    <div className="w-[90%] max-w-[1200px] mt-8 text-center mx-auto flex flex-col justify-center items-center gap-4">
      <h1 className="text-blue-500 font-extrabold text-4xl mb-4">
        Our Technology
      </h1>
      <div className="max-w-[1000px] mx-auto">
        <p className="mb-4 text-justify">
          At Clin Technologies, we've built our platform on groundbreaking AI
          technology specifically designed for healthcare. Our solutions use the
          latest advancements in natural language processing and machine
          learning to create a system that truly understands the complexities of
          medical documentation.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1200px] w-full mx-auto mt-[50px]">
        <div className="bg-[rgba(30,58,138,0.3)] rounded-xl p-9 border border-[rgba(96,165,250,0.2)] shadow-xl transition-all duration-500 relative overflow-hidden hover:translate-y-[-10px] hover:shadow-2xl">
          <div className="flex justify-center items-center w-[70px] h-[70px] bg-[rgba(59,130,246,0.1)] rounded-full mb-5 transition-all duration-300 hover:scale-110 hover:bg-[rgba(59,130,246,0.2)]">
            <div className="text-[30px] text-blue-500">🧠</div>
          </div>
          <h3 className="text-3xl font-semibold text-blue-500 mt-0 mb-5 border-b border-[rgba(96,165,250,0.3)] pb-4">
            Sophisticated Natural Language Processing
          </h3>
          <p>
            At the core of our platform is an advanced foundation model. This
            enables our system to grasp the nuances of clinical conversations —
            understanding context, recognizing intent, and accurately
            interpreting medical terminology. This deep comprehension allows the
            AI to generate clear, concise, and contextually relevant medical
            notes automatically.
          </p>
        </div>
        <div className="bg-[rgba(30,58,138,0.3)] rounded-xl p-9 border border-[rgba(96,165,250,0.2)] shadow-xl transition-all duration-500 relative overflow-hidden hover:translate-y-[-10px] hover:shadow-2xl">
          <div className="flex justify-center items-center w-[70px] h-[70px] bg-[rgba(59,130,246,0.1)] rounded-full mb-5 transition-all duration-300 hover:scale-110 hover:bg-[rgba(59,130,246,0.2)]">
            <div className="text-[30px] text-blue-500">🔄</div>
          </div>
          <h3 className="text-3xl font-semibold text-blue-500 mt-0 mb-5 border-b border-[rgba(96,165,250,0.3)] pb-4">
            Learning Mode & Personalization
          </h3>
          <p>
            Our AI doesn't rely on generic templates. We initiate the process by
            learning directly from your specific cases and workflows. The system
            intelligently refines its understanding and output based on your
            ongoing feedback. With each processed case, its accuracy and
            alignment with your unique clinical documentation needs become
            increasingly precise, ensuring a truly personalized solution.
          </p>
        </div>
        <div className="bg-[rgba(30,58,138,0.3)] rounded-xl p-9 border border-[rgba(96,165,250,0.2)] shadow-xl transition-all duration-500 relative overflow-hidden hover:translate-y-[-10px] hover:shadow-2xl">
          <div className="flex gap-[15px] flex-wrap">
            <div className="inline-flex items-center bg-[rgba(16,185,129,0.1)] py-2 px-4 rounded-3xl mb-5 border border-[rgba(16,185,129,0.3)] transition-all duration-300 hover:bg-[rgba(16,185,129,0.2)]">
              <span className="text-emerald-400 mr-[10px] text-lg">🔒</span>
              <span className="text-white font-semibold text-sm tracking-[0.05em]">
                HIPAA COMPLIANT
              </span>
            </div>
            <div className="inline-flex items-center bg-[rgba(16,185,129,0.1)] py-2 px-4 rounded-3xl mb-5 border border-[rgba(16,185,129,0.3)] transition-all duration-300 hover:bg-[rgba(16,185,129,0.2)]">
              <span className="text-violet-400 mr-[10px] text-lg">📝</span>
              <span className="text-white font-semibold text-sm tracking-[0.05em]">
                BUSINESS ASSOCIATE AGREEMENT
              </span>
            </div>
          </div>
          <h3 className="text-3xl font-semibold text-blue-500 mt-0 mb-5 border-b border-[rgba(96,165,250,0.3)] pb-4">
            Robust Data Privacy & Security
          </h3>
          <p>
            Protecting sensitive health information is paramount. Our AI
            solutions are architected with a security-first approach,
            incorporating principles like 'zero trust'. We utilize robust
            security measures, including comprehensive encryption (both at rest
            and in transit) and strict, role-based access controls, to ensure
            data integrity and confidentiality, limiting access exclusively to
            authorized personnel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Technology;
