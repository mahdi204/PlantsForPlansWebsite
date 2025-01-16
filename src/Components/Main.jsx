import React from 'react'
import { motion } from "motion/react"

const Main = () => {
    function heroTextChanger() {
        let firstWord, secondWord, thirdWord, forthWord;
        let toggle = false;
        //put a time counter that count then change a boolean variable to change the words of the hero
        setInterval(() => {
            toggle = !toggle;

            if (toggle == true) {
                firstWord = "STOP"
                secondWord = "WASTING"
                thirdWord = "YOUR"
                forthWord = "TIME"
            }
            else {
                firstWord = "START"
                secondWord = "GETTING"
                thirdWord = "JOB"
                forthWord = "DONE"
            }
            document.getElementById("hero-first-word").textContent = firstWord;
            document.getElementById("hero-second-word").textContent = secondWord;
            document.getElementById("hero-third-word").textContent = thirdWord;
            document.getElementById("hero-forth-word").textContent = forthWord;
        }, 7000)
    }
    heroTextChanger();

    return (
        <div className='flex  w-100% items-center h-[calc(100vh-8rem)]'>
            <section className='w-1/2 flex justify-center flex-col'>
                <div style={{ fontSize: '150px' }} className=' p-0 m-0 flex flex-col leading-none font-bold'>
                    <div id='hero-first-word'>STOP</div>
                    <div id='hero-second-word'>WASTING</div>
                    <div id='hero-third-word'>YOUR</div>
                    <div id='hero-forth-word' style={{ color: '#60e05c' }}>TIME</div>
                </div>
                <p>this is where the big header will be added</p>
            </section>
            <div>
                <div className='h-[10px] w-[10px] mb-[10px] bg-[#f5f5dc]'></div>
                <div className='h-[10px] w-[10px] mb-[10px] bg-[#f5f5dc]'></div>
                <div className='h-[500px] w-[10px] bg-[#f5f5dc]'></div>
                <div className='h-[20px] w-[10px] mt-[10px] bg-[#f5f5dc]'></div>
                <div className='h-[10px] w-[10px] mt-[10px] bg-[#f5f5dc]'></div>
            </div>

            <section className='w-1/2 flex justify-center items-center'>
                <motion.img
                    src='/images/iso-block.png'
                    alt='animated image'
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                ></motion.img>
            </section>
        </div >
    )
}

export default Main 