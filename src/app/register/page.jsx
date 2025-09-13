"use client"
import { useRef, useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import Link from "next/link"
import { useForm } from "react-hook-form"
import useAuth from "../context/useAuth"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false)
    const { handleSubmit, register, formState: { errors } } = useForm();
    const { createUser, loading, updateUserProfile } = useAuth();
    const userRef = useRef();
    const router = useRouter();

    const onSubmit = async (data) => {
        const userCredential = await createUser(data.email, data.password);
        await updateUserProfile({
            name: `${data.firstName} ${data.lastName}`
        });
        userRef.current = userCredential.user;
        console.log("User registered:", userRef.current);
        router.push("/");
        console.log("User created:", userCredential.user);

    }


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-transparent  shadow-lg p-8 text-black border border-gray-300 rounded-md">
                <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4">
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <label className="block text-sm font-medium mb-1">First Name</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none border-gray-300 focus:ring-1 focus:ring-black"
                                placeholder="First Name"
                                {...register('firstName', { required: true })}
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium mb-1">Last Name</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none border-gray-300 focus:ring-1 focus:ring-black"
                                placeholder="Last Name"
                                {...register('lastName', { required: true })}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none border-gray-300 focus:ring-1 focus:ring-black"
                            placeholder="Enter your email"
                            {...register('email', { required: true })}
                        />
                    </div>
                    {errors.password && (
                        <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
                    )}
                    <div>
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="w-full px-4 py-2 border rounded-md pr-10 focus:outline-none border-gray-300 focus:ring-1 focus:ring-black"
                                placeholder="Enter your password"
                                {...register("password", {
                                    required: "Password is required",
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                                        message:
                                            "Password must be at least 8 characters and include uppercase, lowercase, and a number",
                                    },
                                })}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                        {errors.password && (
                            <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
                        )}
                    </div>

                    <p className="text-xs text-gray-600">
                        By creating an account, you agree to our{" "}
                        <a href="#" className="text-black font-semibold hover:underline">User Agreement</a> and{" "}
                        <a href="#" className="text-black font-semibold hover:underline">Privacy Policy</a>.
                    </p>
                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 rounded-md  transition transform active:translate-y-1 active:shadow-[0_2px_0_#222] shadow-[0_2px_0_#222] duration-150 cursor-pointer"
                    >
                        Create Account
                    </button>
                </form>
                <div className="divider">OR</div>

                <div>
                    <button className="btn bg-white text-black border-[#e5e5e5] w-full rounded-md ">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                    <p className="text-center text-sm mt-4">
                        Don’t have an account?{" "}
                        <Link href='/login'
                            className="text-black font-bold hover:underline">
                            Sign In
                        </Link>
                    </p>

                </div>

            </div>

        </div >
    )
}


