import React, { useState } from 'react'

const Explanation = () => {
    const [plantImage, setPlnatImage] = useState({
        first: true,
        second: false,
        third: false,
        forth: false
    })
    return (
        <div className='flex ml-60 mr-60 items-center justify-between h-[100vh] bg-[#1f1f1f]]'>
            <div className=''>
                <div className='relative'>
                    <img
                        className="absolute max-w-[200px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-auto object-contain"
                        src="/images/mobile-plant-1.png"
                        alt="block"
                    />
                    <img
                        className="max-w-[400px] h-auto object-contain"
                        src="/images/pixel-mobile.png"
                        alt="block"
                    />
                </div>
            </div>
            <div className='flex items-center justify-center w-[60%] '>
                <h2 className='text-6xl'>Stop Scrolling Your Phone</h2>
                <p>Set your plan time and stick to your work, while giving the plant time to grow.</p>
            </div>
        </div>
    )
}

export default Explanation