import { Link } from "react-router-dom";

export const LoginBtn = () => {
  return (
    <div>
      <Link to="/login">
        <button className="bg-transparent border-2 border-[#3b82f6] text-white px-8 py-4 rounded-full hover:bg-[rgba(59,130,246,0.1)] transition-colors shadow-[0_5px_15px_rgba(37,99,235,0.2)] inline-block text-center">
          Login
        </button>
      </Link>
    </div>
  );
};

export const SignupBtn = () => {
  return (
    <div>
      <Link to="/signup">
        <button className="bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white px-8 py-4 rounded-full hover:translate-y-[-3px] hover:shadow-[0_8px_20px_rgba(37,99,235,0.5)] transition-all shadow-[0_5px_15px_rgba(37,99,235,0.4)] relative overflow-hidden z-1 inline-block text-center">
          Signup
        </button>
      </Link>
    </div>
  );
};
