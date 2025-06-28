import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // Email Validation
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email address";
    }

    // Password Validation
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    // Confirm Password
    if (confirmPassword !== password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    // API Call
    try {
      setLoading(true);
      const res = await fetch(
        "https://alibackend.duckdns.org/authentication_app/signup/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Signup failed");
        return;
      }

      toast.success("Signup successful! Check your email for OTP.");
      navigate("/login"); // Or redirect to OTP page if needed
    } catch (error) {
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 overflow-hidden">
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 dark:text-black text-black">
        <div className="max-w-md w-full space-y-8">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold text-gray-900">Create account</h2>
            <p className="mt-2 text-sm text-gray-600 text-center">
              Enter your email and a strong password. You’ll receive an OTP for
              verification.
            </p>
            <form onSubmit={handleSubmit} className="mt-8 w-[80%] space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full px-3 py-2 border bg-white text-gray-700 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  New Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter New Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-3 py-2 border bg-white text-gray-700 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password}</p>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="confirmPassword"
                  className="text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm New Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="block w-full px-3 py-2 border bg-white text-gray-700 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {errors.confirmPassword && (
                  <p className="text-sm text-red-500">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white transition ${
                  loading
                    ? "bg-blue-300 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {loading ? "Signing up..." : "Sign Up"}
              </button>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?
                </p>
                <a
                  href="/login"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Login
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
