import React, { useState, useEffect } from 'react'
import { motion } from "motion/react"

const Main = () => {

    const [heroText, setHeroText] = useState({
        first: "STOP",
        second: "SCROLLING",
        third: "YOUR",
        forth: "PHONE",
    });
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setToggle((prevToggle) => !prevToggle);
        }, 7000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (toggle) {
            setHeroText({
                first: "START",
                second: "GETTING",
                third: "JOB",
                forth: "DONE"
            });
        }
        else {
            setHeroText({
                first: "STOP",
                second: "SCROLLING",
                third: "YOUR",
                forth: "PHONE",
            });
        }
    }, [toggle]);

    return (
        <div className='flex ml-60 mr-60 w-100% items-center h-[calc(100vh)]'>
            <section className='w-1/2 flex justify-center flex-col'>
                <motion.div
                    style={{ fontSize: '120px' }}
                    className='p-0 m-0 flex flex-col leading-none font-bold'
                    initial={{ opacity: 0, y: -80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <motion.div
                        key={heroText.first}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {heroText.first}
                    </motion.div>
                    <motion.div
                        key={heroText.second}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {heroText.second}
                    </motion.div>
                    <motion.div
                        key={heroText.third}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {heroText.third}
                    </motion.div>
                    <motion.div
                        key={heroText.forth}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ color: '#60e05c' }}
                    >
                        {heroText.forth}
                    </motion.div>
                </motion.div>
                <motion.button
                    className='bg-[#60e05c] w-[150px] h-[50px] text-[#1f1f1f] mt-10 border-[2px] border-[#60e05c] '
                    style={{ fontFamily: 'Outfit', fontWeight: 600 }}
                    whileHover={{ backgroundColor: "transparent", color: "#f5f5dc" }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Download Now
                </motion.button>
            </section>
            <div style={{ width: "10px", margin: "0 auto" }}>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="h-[10px] w-[10px] mb-[10px] bg-[#f5f5dc]"
                ></motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="h-[10px] w-[10px] mb-[10px] bg-[#f5f5dc]"
                ></motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="h-[500px] w-[10px] bg-[#f5f5dc]"
                ></motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="h-[20px] w-[10px] mt-[10px] bg-[#f5f5dc]"
                ></motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="h-[10px] w-[10px] mt-[10px] bg-[#f5f5dc]"
                ></motion.div>
            </div>

            <section className='w-1/2 flex justify-center items-center'>
                <motion.img
                    src='/images/iso-block.png'
                    alt='animated image'
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.9,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                ></motion.img>
            </section>
        </div >
    )
}

export default Main 