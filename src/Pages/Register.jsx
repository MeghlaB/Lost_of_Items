
import Lottie from "lottie-react";

import registeranimation from '../../public/register.json'
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";


export default function Register() {

    const { creatUser, UpdateProfile, setUser, setLoading } = useContext(AuthContext)
    const navigate = useNavigate('/')

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photUrl = form.photUrl.value
        const password = form.password.value
        console.log(name, email, photUrl, password)
        // password validation
        if (password.length < 6) {
            return setError('Password must be at least 6 character')
        }
        if (!/[A-Z]/.test(password)) {
            return setError("Password must contain at least one uppercase letter.");
        }
        if (!/[a-z]/.test(password)) {
            return setError("Password must contain at least one lowercase letter.");
        }
        // Meghlab12
        // regsiter with user

        creatUser(email, password)
            .then((result) => {
                const newUser = { name, email }
                setUser(result.user)
                e.target.reset()
                Swal.fire({
                    title: 'Success!',
                    text: 'Registration successful!',
                    icon: 'success',
                    confirmButtonText: 'Done'
                })
                UpdateProfile({
                    displayName: name,
                    photoURL: photUrl
                })
                    .then(() => {
                        setLoading(false)
                        navigate('/')

                    })
                    .catch((err) => {
                        setLoading(false)
                        setUser(err.message)
                    })
            })
            .catch((err) => {
                console.log(err.message)
                Swal.fire({
                    title: 'Error!',
                    text: `Registration failed! Error:${err.code}`,
                    icon: 'error',
                    confirmButtonText: 'Done'
                })
            })



    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-72 lg:w-3/5">
                    <Lottie animationData={registeranimation}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold mx-auto mt-2">Register now!</h1>
                    <form onSubmit={handleRegister} className="card-body">

                        {/* Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter your name..." className="input input-bordered" required />
                        </div>
                        {/* PhotURl */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoUrl</span>
                            </label>
                            <input type="url" name="photUrl" placeholder="please your profile Picture..." className="input input-bordered" required />
                        </div>
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
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p>Already have an account?<span>
                            <NavLink

                                to={'/login'} className='text-blue-700 underline'>SignIn</NavLink></span></p>

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

