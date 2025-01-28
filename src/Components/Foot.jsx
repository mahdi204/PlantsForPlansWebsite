import { div } from 'motion/react-client'
import React from 'react'


const Foot = () => {
    return (
        <div
            className=' bg-[#60e05c] text-[#f5f5dc]'
            style={{ fontFamily: 'Outfit', fontWeight: 200 }}
        >
            <div className='flex justify-end items-end w-[100%] bg-[#1f1f1f] h-[100px]  '>
                <div className='mr-60 ml-60'>
                    <div className='flex justify-end items-end h-[100%] w-[300px]  text-[#ece7d5]'>
                        <img
                            className='max-w-[190px] h-auto object-contain'
                            src="/images/Footer-Plants-2.png"
                            alt="footer plants"
                        />
                    </div>
                </div>

            </div>
            <div className='flex justify-between ml-60 mr-60 h-[300px] uppercase' style={{ fontWeight: 700 }} >
                <section className='first-col flex flex-col h-full justify-center items-start'>
                    <p>first row</p>
                    <p>second row</p>
                    <p>third row</p>
                </section>
                <section className='second-col flex flex-col h-full justify-center items-start'>
                    <p>first row</p>
                    <p>second row</p>
                    <p>third row</p>
                </section>
                <section className='third flex flex-col h-full justify-center items-start'>
                    <p>first row</p>
                    <p>second row</p>
                    <p>third row</p>
                </section>
            </div>
        </div>
    )
}

export default Foot