import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import { AuthContext } from '../AuthProvider/AuthProvider'
import { ThemeContext } from '../AuthProvider/ThemeProvider'
import { MdSunny } from 'react-icons/md'
import { FiMoon } from 'react-icons/fi'



export default function Navbar() {
    const { togglebtn, theme } = useContext(ThemeContext)
    const { user, logout } = useContext(AuthContext)

    const [isMenuOpen , setMenuOpen] = useState(false)
    
    const toggleMenu= ()=>{
        setMenuOpen(!isMenuOpen)
    }

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
                {user ? (
                    // Logged-in User Menu
                    <div className="relative">
                        <img
                            src={user.photoURL}
                            alt="Profile"
                            className="w-8 h-8 rounded-full cursor-pointer"
                            onClick={toggleMenu} 
                        />
                        {isMenuOpen && (
                            <div className="absolute right-0 mt-2 w-52 mx-auto bg-white text-black p-2 rounded shadow z-50">
                                <p className="mb-2">{user.displayName}</p>
                                <NavLink to="/addItems" className="block hover:text-blue-600 mb-2">
                                    Add Lost & Found Item
                                </NavLink>
                                <NavLink to="/allRecovered" className="block hover:text-blue-600 mb-2">
                                    All Recovered Items
                                </NavLink>
                                <NavLink to="/myItems" className="block hover:text-blue-600 mb-2">
                                    Manage My Items
                                </NavLink>
                                <button
                                    onClick={logout}
                                    className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    // Login Button
                    <NavLink to="/login" className="hover:text-gray-200">
                        Login
                    </NavLink>
                )}
               
            </div>
        </div>
    )
}
