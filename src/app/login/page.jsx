"use client"
import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white rounded-md shadow-lg p-8 text-black border  border-gray-300">
        <h2 className="text-2xl font-bold text-center mb-6 ">Sign In</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-2 border border-gray-300  rounded-md pr-10 focus:outline-none focus:ring-1 focus:ring-black"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <a href="#" className="text-black  hover:underline">
              Forgot password?
            </a>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="terms" className="mr-2 " required />
            <label htmlFor="terms" className="text-sm">
              I agree to the <a href="#" className="text-black font-semibold hover:underline">Terms & Conditions</a>
            </label>
          </div>
          <button
            type="submit"
             className="w-full bg-black text-white py-2 rounded-md cursor-pointer shadow-[0_2px_0_#222] active:translate-y-1 active:shadow-[0_2px_0_#222] transition duration-150"

          >
            Sign In
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <a href=''
           className="text-blue-600 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  )
}
