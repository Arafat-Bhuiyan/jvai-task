import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    try {
      setLoading(true);
      const res = await fetch(
        "https://alibackend.duckdns.org/authentication_app/signin/",
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
        toast.error(data.message || "Login failed");
        return;
      }

      localStorage.setItem("token", data.token); // or data.access if token key is named differently
      toast.success("Login successful!");
      navigate("/");
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
            <h2 className="text-3xl font-bold text-gray-900">
              Hello, Welcome!
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Please Enter Your Details Below To Continue
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
                  className="block w-full px-3 py-2 border bg-white border-gray-300 rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                  Your Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-3 py-2 border bg-white border-gray-300 rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full flex justify-center py-2 px-4 rounded-md text-sm font-medium text-white transition ${
                  loading
                    ? "bg-blue-300 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {loading ? "Logging in..." : "Login"}
              </button>

              <div className="text-center mt-2">
                <p className="text-sm text-gray-600">Create account?</p>
                <a
                  href="/signup"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Sign up
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
