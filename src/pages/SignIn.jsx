import React, { useState } from "react";
import { Eye, EyeOff, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
    console.log("Sign in with:", email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--yt-background)]">
      <div className="bg-[var(--yt-card-background)] p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-center items-center mb-6">
          <Youtube className="w-8 h-8 text-[var(--yt-red)]" />
          <span className="text-xl font-bold ml-2 text-[var(--yt-text)]">
            YouTube
          </span>
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center text-[var(--yt-text)]">
          Sign in
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[var(--yt-text)] mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-[var(--yt-border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--yt-focus)] bg-[var(--yt-input-background)] text-[var(--yt-text)]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6 relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[var(--yt-text)] mb-1"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full px-3 py-2 border border-[var(--yt-border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--yt-focus)] bg-[var(--yt-input-background)] text-[var(--yt-text)] pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-[var(--yt-text)]"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
          <Button
            type="submit"
            className="w-full  py-2 px-4 rounded-md  transition duration-300"
          >
            Sign In
          </Button>
        </form>
        <div className="mt-4 text-center">
          <a href="#" className="text-primary hover:underline">
            Forgot password?
          </a>
        </div>
        <div className="mt-6 text-center">
          <p className="text-[var(--yt-text)]">
            Don't have an account?{" "}
            <Link to="/sign-up" className="text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
