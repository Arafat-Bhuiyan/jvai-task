import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-900/90 py-8 px-10">
      <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex gap-8 flex-wrap mb-4 md:mb-0">
          <a href="" className="text-gray-400 no-underline text-sm font-medium">
            Terms of Use
          </a>
          <a href="" className="text-gray-400 no-underline text-sm font-medium">
            Privacy Policy
          </a>
        </div>
        <div className="text-gray-500 text-sm">
          <p>© 2025 Clin Technologies. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
