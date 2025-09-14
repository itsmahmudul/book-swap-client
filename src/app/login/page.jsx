"use client"

import Link from "next/link"
import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux"
import { setUser } from "@/app/store/authSlice"
import { auth } from "../../../firebase.init"

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState(null)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()
    const dispatch = useDispatch()

    const handleLogin = async (e) => {
        e.preventDefault()
        setError(null)
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            const user = userCredential.user
            dispatch(setUser({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
            }))
            router.push("/")
        } catch (err) {
            setError(err.message)
        }
    }

    const handleGoogleLogin = async () => {
        setError(null)
        try {
            const provider = new GoogleAuthProvider()
            const result = await signInWithPopup(auth, provider)
            const user = result.user
            dispatch(setUser({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
            }))
            router.push("/")
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 mx-2 md:mx-0">
            <div className="w-full max-w-sm bg-white rounded-md shadow-lg p-8 text-black border border-gray-300">
                <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
                {error && <p className="text-red-500 text-xs mb-2">{error}</p>}
                <form className="space-y-4" onSubmit={handleLogin}>
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                            placeholder="Enter your email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md pr-10 focus:outline-none focus:ring-1 focus:ring-black"
                                placeholder="Enter your password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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
                        <a href="#" className="text-black hover:underline">Forgot password?</a>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 rounded-md cursor-pointer shadow-[0_2px_0_#222] active:translate-y-1 active:shadow-[0_2px_0_#222] transition duration-150"
                    >
                        Sign In
                    </button>
                </form>
                <div className="divider">OR</div>
                <div>
                    <button
                        onClick={handleGoogleLogin}
                        className="btn bg-white text-black border-[#e5e5e5] w-full rounded-md"
                    >
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <g>
                                <path d="m0 0H512V512H0" fill="#fff"></path>
                                <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                                <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                                <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                                <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                            </g>
                        </svg>
                        Login with Google
                    </button>
                    <p className="text-center text-sm mt-4">
                        Don’t have an account?{" "}
                        <Link href='/register' className="text-black font-bold hover:underline">Register</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
