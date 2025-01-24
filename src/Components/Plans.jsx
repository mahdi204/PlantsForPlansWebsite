import React from 'react';
import { motion } from 'motion/react';

const Plans = () => {
    return (
        <div className="relative w-full">
            {/* The content of the Plans */}
            <div className="wrapper flex w-[100%] justify-between items-center">
                {[...Array(24)].map((_, index) => (
                    <div
                        key={index}
                        className="w-[40px] h-[40px] bg-[#f5f5dc]"
                    ></div>
                ))}
            </div>

            <div className="the-content-container flex w-[100%] bg-[#f5f5dc] h-[700px]">
                <div
                    className="the-content w-[100%] ml-60 mr-60 my-[40px] flex justify-center flex-col"
                    style={{ fontFamily: 'poppins', fontWeight: 600 }}
                >
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.2 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="text-[#1f1f1f] text-4xl uppercase flex justify-center items-center mb-[60px]"
                    >
                        Choose Your Working Time!
                    </motion.h1>
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col items-center justify-center h-[400px] w-[400px]">
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                                className='mb-32'
                            >
                                <img
                                    className="max-w-[70px] h-auto object-contain"
                                    src="/images/iso-block.png"
                                    alt="block"
                                />
                            </motion.div>
                            <motion.p
                                initial={{ opacity: 0, y: -50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="text-4xl text-[#1f1f1f]"
                            >
                                +5 Minutes
                            </motion.p>
                        </div>
                        <div className="flex flex-col items-center justify-center h-[400px] w-[400px]">
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.4 }}
                                className='mb-32'
                            >
                                <img
                                    className="max-w-[120px] h-auto object-contain"
                                    src="/images/iso-blocks-4.png"
                                    alt="block"
                                />
                            </motion.div>
                            <motion.p
                                initial={{ opacity: 0, y: -50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.6 }}
                                viewport={{ once: true }}
                                className="text-4xl text-[#1f1f1f]"
                            >
                                +1 Hour
                            </motion.p>
                        </div>
                        <div className="flex flex-col items-center justify-center h-[400px] w-[400px]">
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.6 }}
                                className='mb-32'
                            >
                                <img
                                    className="max-w-[180px] h-auto object-contain"
                                    src="/images/iso-blocks-9.png"
                                    alt="block"
                                />
                            </motion.div>
                            <motion.p
                                initial={{ opacity: 0, y: -50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.8 }}
                                viewport={{ once: true }}
                                className="text-4xl text-[#1f1f1f]"
                            >
                                +2 Hours
                            </motion.p>
                        </div>
                        {/* Add other items */}
                    </div>
                </div>
            </div>
            <div className="wrapper flex w-[100%] justify-between items-center">
                {[...Array(24)].map((_, index) => (
                    <div
                        key={index}
                        className="w-[40px] h-[40px] bg-[#f5f5dc]"
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Plans;
