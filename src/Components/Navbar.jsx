import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import { AuthContext } from '../AuthProvider/AuthProvider'
import { ThemeContext } from '../AuthProvider/ThemeProvider'
import { MdSunny } from 'react-icons/md'
import { FiMoon } from 'react-icons/fi'



export default function Navbar() {
    const { togglebtn, theme } = useContext(ThemeContext)
    

    return (
        <div className="navbar bg-base-300 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"> <img
                    className='w-10 h-10 rounded-full hidden lg:block '
                    src={logo} alt="" />
                    Lost&Found </a>
            </div>
            <div className="navbar-center hidden  lg:flex">
                <ul className="menu menu-horizontal px-1 text-[18px] font-bold  gap-4">
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink>Lost & Found Items Page</NavLink>
                    <NavLink></NavLink>
                    <NavLink></NavLink>

                </ul>
            </div>
            <div className="navbar-end gap-3">
                {/* toggole switch  */}
                <div>
                    <button
                        onClick={togglebtn}
                        className={`px-4 py-2 text-sm font-bold transition duration-300 rounded-md shadow ${theme === "light" ? "text-black hover:bg-gray-200" : " font-bold hover:bg-gray-800 hover:text-white"
                            }`}
                    >
                        {theme === "light" ? <MdSunny /> : <FiMoon />}
                    </button>
                </div>
                <Link to={'/login'}>Login</Link>
            </div>
        </div>
    )
}
