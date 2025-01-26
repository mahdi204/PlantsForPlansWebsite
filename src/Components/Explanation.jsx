import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'

import image1 from '/images/mobile-plant-1.png'
import image2 from '/images/mobile-plant-2.png'
import image3 from '/images/mobile-plant-3.png'
import image4 from '/images/mobile-plant-4.png'
import { easeInOut } from 'motion'



const Explanation = () => {
    const images = [image1, image2, image3, image4]
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isInView, SetIsInView] = useState(false);

    useEffect(() => {
        if (isInView) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
            }, 3000)
            return () => clearInterval(interval);
        }
    }, [isInView, images.length])//for performance issues

    return (
        <div className='flex ml-60 mr-60 items-center justify-between h-[100vh] bg-[#1f1f1f]]'>
            <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                onViewportEnter={() => SetIsInView(true)}
                onViewportLeave={() => SetIsInView(false)}
                className=''
            >
                <div className='relative' id='plantContainer'>
                    <motion.img
                        key={currentIndex} // Ensure Framer Motion re-renders the animation when the index changes
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        ease={{ easeInOut }}
                        className="absolute max-w-[200px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-auto object-contain"
                        src={images[currentIndex]}
                        alt="block"
                    ></motion.img>
                    <img
                        className="max-w-[400px] h-auto object-contain"
                        src="/images/pixel-mobile.png"
                        alt="block"
                    />
                </div>
            </motion.div>
            <div className='flex items-center justify-center w-[70%] '>
                <h2 className='text-6xl'>Stop Scrolling Your Phone</h2>
                <p>Set your plan time and stick to your work, while giving the plant time to grow.</p>
            </div>
        </div>
    )
}

export default Explanation