import React from 'react'
import { color, motion } from "motion/react"

const Plans = () => {
    return (
        <div className='absolute left-0 right-0 w-full'>
            <div className='wrapper flex w-[100%] justify-between items-center'>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
            </div>
            {/* the content of the plans.jsx */}
            <div className='the-content-container flex w-[100%] bg-[#f5f5dc] h-[700px]'>
                <div
                    className='the-content w-[100%] mx-[15%] my-[40px] flex justify-center flex-col '
                    style={{ fontFamily: "poppins", fontWeight: 600 }}
                >
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.2 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className='text-[#1f1f1f] text-4xl uppercase flex justify-center items-center mb-[60px]'
                        style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700' }}
                    >
                        Choose Your Working Time!
                    </motion.h1
                    >
                    <div className='flex justify-around items-center '>
                        <div className='flex flex-col items-center justify-center h-[400px] w-[400px]  '>
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                                className='flex flex-col items-center justify-centerw-[100%] h-[200px]'
                            >
                                <img
                                    className='max-w-[80px] h-auto object-contain'
                                    src="/images/iso-block.png"
                                    alt="alt image"
                                />
                            </motion.div>
                            <motion.p
                                initial={{ opacity: 0, y: -50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.4 }}
                                viewport={{ once: true }}
                                className='text-4xl text-[#1f1f1f]'
                            >+5 Minutes
                            </motion.p>
                        </div>
                        <div className='flex flex-col items-center justify-center h-[400px] w-[400px] '>
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.4 }}
                                className='flex flex-col items-center justify-centerw-[100%] h-[200px]'
                            >
                                <img
                                    className='max-w-[150px] h-auto object-contain'
                                    src="/images/iso-blocks-4.png"
                                    alt="alt image"
                                />
                            </motion.div>
                            <motion.p
                                initial={{ opacity: 0, y: -50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                viewport={{ once: true }}
                                className='text-4xl text-[#1f1f1f]'
                            >+1 Hour
                            </motion.p>
                        </div>
                        <div className='flex flex-col items-center justify-center h-[400px] w-[400px] '>
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.6 }}
                                className='flex flex-col items-center justify-centerw-[100%] h-[200px]'
                            >
                                <img
                                    className='max-w-[200px] h-auto object-contain'
                                    src="/images/iso-blocks-9.png"
                                    alt="alt image"
                                />
                            </motion.div>
                            <motion.p
                                initial={{ opacity: 0, y: -50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                viewport={{ once: true }}
                                className='text-4xl text-[#1f1f1f]'
                            >+2 Hours
                            </motion.p>
                        </div>
                    </div>
                    <motion.p
                        style={{ color: "#1f1f1f", fontSize: "18px", fontWeight: 500 }}
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        viewport={{ once: true }}
                        className='flex items-center justify-center'
                    >
                        Set your time and start working and growing at the same time
                    </motion.p>
                </div>
            </div>
            <div className='wrapper flex w-[100%] justify-between items-center'>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
                <div className='w-[40px] h-[40px] bg-[#f5f5dc]'></div>
            </div>
        </div>

    )
}

export default Plans