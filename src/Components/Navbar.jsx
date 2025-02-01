import React from 'react'
import { color, motion } from "motion/react"
import { Link } from "react-scroll"


const Navbar = () => {
    return (
        <div className='ml-60 mr-60 flex justify-between items-center h-18 w-100%'>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
            >
                <div className='flex justify-center items-center'>
                    <img
                        className='w-10 h-10 mr-6'
                        src="/images/plant for plans logo.png" alt="logo" />
                    <h1 className=' font-bold uppercase text-2xl'>plants for plans</h1>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: +50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
            >
                <ul className='flex items-center gap-x-14 h-16'>
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