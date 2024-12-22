import React from 'react'
import loginAnimation from '../../public/login.json'
import Lottie from 'lottie-react';
import { NavLink } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";

export default function LoginPage() {
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const password = form.password.value
        console.log(name, email, photUrl, password)
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-72 lg:w-2/5">
                    <Lottie animationData={loginAnimation}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold mx-auto mt-2">Register now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        {/* email Address */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        {/* password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>Don't Have An Account ?<span>
                            <NavLink
                         to={'/register'} className='text-blue-700 underline'>SignUp</NavLink></span></p>
                         
                <div className="mt-3 space-y-3 sm:space-y-5">
                    <hr className="border-zinc-700" />
                    <button className="mx-auto mb-4 mt-8 items-center rounded-md border px-5 py-2 shadow-lg duration-200 hover:bg-zinc-400/10 dark:border-zinc-700 flex dark:hover:bg-zinc-700 dark:hover:text-white">
                        <FaGoogle className='mr-4 text-xl'></FaGoogle>
                        Continue with Google
                    </button>
                </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
