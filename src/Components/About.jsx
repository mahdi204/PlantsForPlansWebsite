import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'motion/react'

const About = () => {

    const fullText = "What Is Plants For Plans?";
    const [displayedText, setDisplayedText] = useState("");
    const indexRef = useRef(0); // Keeps track of index without causing re-renders

    useEffect(() => {
        const interval = setInterval(() => {
            setDisplayedText(fullText.slice(0, indexRef.current + 1));
            indexRef.current += 1;

            if (indexRef.current >= fullText.length) {
                clearInterval(interval);
            }
        }, 20); // Adjust speed here

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="about-section flex justify-center items-start flex-col mr-60 ml-60 h-[100vh] " id='about-section'>
                <div className='flex justify-center items-center mb-10'>
                    <motion.div
                        // animate from left to right and go back to left
                        initial={{ x: 0 }}
                        animate={{ x: [0, 850, 0] }}
                        transition={{ duration: 1.5, times: [0, 1] }}
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.1, repeat: Infinity, repeatType: 'reverse', repeatDelay: 0.3 }}
                            className='h-[40px] w-[40px] bg-[#f5f5dc] mr-4'
                        ></motion.div>
                    </motion.div>
                    <h2 className='text-6xl'>{displayedText}</h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.3 }}
                    className='flex flex-col justify-center items-center w-full '
                    style={{ fontFamily: 'Outfit', fontWeight: 200, fontSize: '22px' }}
                >
                    <p >
                        <span className='mr-3 text-3xl' style={{ fontFamily: 'Pixelify Sans' }}>Plants For Plans</span>
                        is a unique productivity app designed to help you break free from unnecessary phone usage and stay focused on what truly matters. Instead of mindlessly scrolling, you nurture a virtual plant that grows on block-like ground—each block representing the time you commit to staying off your phone. The more time you resist distractions, the more your plant flourishes, creating a visual representation of your progress and self-discipline. Whether you're studying, working, or simply trying to be more present in your daily life, [Your App Name] turns productivity into a fun and rewarding experience.
                    </p>
                    <p>
                        encourages focus by motivating you to stay off your phone and track your progress visually through a growing plant. It helps build healthy habits by reducing screen time and improving time management. The app turns productivity into an interactive experience, making it both fun and rewarding. With a custom growth system where each block represents your effort and commitment, you can see your achievements grow—literally—one block at a time.
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default About