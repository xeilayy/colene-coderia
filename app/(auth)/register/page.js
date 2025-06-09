'use client';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FiGithub, FiEye, FiEyeOff } from 'react-icons/fi';

export default function RegisterPage() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    return (
        <div className="min-h-screen w-full bg-[#020409] text-white flex items-center justify-center p-4 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-[800px] h-[800px] bg-purple-900/40 rounded-full filter blur-3xl animate-pulse"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/4">
                 <div className="w-[600px] h-[600px] bg-blue-900/30 rounded-full filter blur-3xl animate-pulse-slow"></div>
            </div>

            <div className="w-full max-w-md bg-black/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl shadow-purple-900/10 p-8 z-10">
                <div className="text-center mb-8">
                    <a href="#" className="inline-flex items-center gap-2 text-2xl font-bold tracking-wider text-gray-200">
                       <span className="text-purple-400">&lt;/&gt;</span> Coderia
                    </a>
                    <h1 className="text-3xl font-bold text-white mt-6">Create Account</h1>
                    <p className="text-gray-400 mt-2">Start your AI-powered coding experience</p>
                </div>

                <form className="space-y-5">
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            placeholder="Your full name"
                            className="w-full bg-[#0D1117] border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="example@email.com"
                            className="w-full bg-[#0D1117] border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow"
                            required
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                id="password"
                                name="password"
                                placeholder="Create a strong password"
                                className="w-full bg-[#0D1117] border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setPasswordVisible(!passwordVisible)}
                                className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-500 hover:text-gray-300"
                                aria-label="Toggle password visibility"
                            >
                                {passwordVisible ? <FiEyeOff size={20} className="text-gray-500 hover:text-gray-300" /> : <FiEye size={20} className="text-gray-500 hover:text-gray-300" />}
                            </button>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-300 mb-2">
                            Confirm Password
                        </label>
                        <div className="relative">
                            <input
                                type={confirmPasswordVisible ? 'text' : 'password'}
                                id="confirm-password"
                                name="confirm-password"
                                placeholder="Confirm your password"
                                className="w-full bg-[#0D1117] border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                                className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-500 hover:text-gray-300"
                                aria-label="Toggle confirm password visibility"
                            >
                                {confirmPasswordVisible ? <FiEyeOff size={20} className="text-gray-500 hover:text-gray-300" /> : <FiEye size={20} className="text-gray-500 hover:text-gray-300" />}
                            </button>
                        </div>
                    </div>
                    
                    <div className="space-y-4 pt-2">
                        <div className="flex items-start">
                            <input id="terms" name="terms" type="checkbox" className="h-4 w-4 mt-1 flex-shrink-0 bg-gray-700 border-gray-600 text-purple-600 focus:ring-purple-500 rounded" required/>
                            <label htmlFor="terms" className="ml-3 block text-sm text-gray-400">
                                I agree to the <a href="#" className="font-medium text-purple-400 hover:text-purple-300">terms of service and privacy policy</a>
                            </label>
                        </div>
                         <div className="flex items-start">
                            <input id="offers" name="offers" type="checkbox" className="h-4 w-4 mt-1 flex-shrink-0 bg-gray-700 border-gray-600 text-purple-600 focus:ring-purple-500 rounded" />
                            <label htmlFor="offers" className="ml-3 block text-sm text-gray-400">
                                I want to receive product updates and special offers
                            </label>
                        </div>
                    </div>

                    <div className="pt-2">
                        <button type="submit" className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-purple-500 transition-all">
                            Create Account
                            <span className="text-xl" role="img" aria-label="sparkles">✨</span>
                        </button>
                    </div>
                </form>

                <div className="my-6 flex items-center">
                    <div className="flex-grow border-t border-gray-700"></div>
                    <span className="flex-shrink mx-4 text-gray-500 text-sm">or</span>
                    <div className="flex-grow border-t border-gray-700"></div>
                </div>


                <div className="space-y-4">
                    <button type="button" className="w-full inline-flex justify-center items-center py-3 px-4 border border-gray-600 rounded-lg shadow-sm bg-gray-800/50 text-sm font-medium text-gray-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-gray-500 transition-all">
                        <FcGoogle className="w-5 h-5 mr-2" />
                        Sign up with Google
                    </button>
                    <button type="button" className="w-full inline-flex justify-center items-center py-3 px-4 border border-gray-600 rounded-lg shadow-sm bg-gray-800/50 text-sm font-medium text-gray-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-gray-500 transition-all">
                        <FiGithub className="w-5 h-5 mr-2" />
                        Sign up with GitHub
                    </button>
                </div>
                <div className="text-center mt-8">
                    <p className="text-sm text-gray-400">
                        Already have an account?{' '}
                        <a href="#" className="font-medium text-purple-400 hover:text-purple-300">
                            Sign in
                        </a>
                    </p>
                </div>
            </div>
            
            <style jsx global>{`
                @keyframes pulse {
                    0%, 100% { opacity: 0.5; transform: scale(0.95); }
                    50% { opacity: 1; transform: scale(1.05); }
                }
                .animate-pulse-slow {
                    animation: pulse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
            `}</style>
        </div>
    );
}