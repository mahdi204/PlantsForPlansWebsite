import React from 'react'
import { color, motion } from "motion/react"
import { Link } from "react-scroll"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import useMediaQuery from './useMediaQuery';




const Navbar = () => {
    const is4xl = useMediaQuery("(min-width: 1920px");
    const is3xl = useMediaQuery("(min-width:1755px)");
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
    }
    return (
        <div className='ml-20 mr-20 flex justify-between items-center h-18 w-100% 3xl:ml-60 3xl:mr-60 xl:text-[15px]  sm:mr-5 sm:text-sm sm:ml-5'>
            <div onClick={handleNav} className="block 2md:hidden">
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div
                className={
                    nav
                        ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
                        : "fixed left-[-100%] "
                }
            >
                <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>

                <ul className=" uppercase">
                    <li className="p-4 border-b border-gray-600">Home</li>
                    <li className="p-4 border-b border-gray-600">Company</li>
                    <li className="p-4 border-b border-gray-600">Resources</li>
                    <li className="p-4 border-b border-gray-600">About</li>
                    <li className="p-4">Contact</li>
                </ul>
            </div>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
            >
                <div className='flex justify-center items-center'>
                    <img
                        className='w-10 h-10 mr-6'
                        src="/images/plant for plans logo.png" alt="logo" />
                    <h1 className=' font-bold uppercase xl:text-2xl sm:text-sm sm:ml-5'>plants for plans</h1>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: +50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
            >
                <ul className='hidden 2md:flex items-center gap-x-14 h-16'>
                    <li>
                        <Link
                            activeClass="active"
                            to="home-section"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            className="relative group  py-1.5 px-2.5 cursor-pointer" >
                            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-50 group-hover:w-full group-hover:transition-all">
                            </span>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="about-section"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            className="relative group  py-1.5 px-2.5 cursor-pointer" >
                            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-50 group-hover:w-full group-hover:transition-all">
                            </span>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="plans-section"
                            spy={true}
                            smooth={true}
                            offset={40}
                            duration={500}
                            className="relative group  py-1.5 px-2.5 cursor-pointer" >
                            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-50 group-hover:w-full group-hover:transition-all">
                            </span>
                            Planing
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="foot-section"
                            spy={true}
                            smooth={true}
                            offset={40}
                            duration={500}
                            className="relative group  py-1.5 px-2.5 cursor-pointer" >
                            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-50 group-hover:w-full group-hover:transition-all">
                            </span>
                            Contact
                        </Link>
                    </li>
                    <motion.button
                        whileHover={{ scale: 1.2, backgroundColor: "transparent", color: "#f5f5dc" }}
                        whileTap={{ scale: 0.9 }}
                        style={buttonStyle}
                    >
                        Sign Up
                    </motion.button>
                </ul>

            </motion.div>

        </div>
    )
}
const buttonStyle = {
    color: "#1f1f1f",
    width: "70px",
    height: "35px",
    border: "2px solid #f5f5dc",
    backgroundColor: "#f5f5dc",
    borderRadius: "0px",
    cursor: "pointer",
}

export default Navbar