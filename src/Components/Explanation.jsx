import React from 'react'

const Explanation = () => {
    return (
        <div className='flex ml-60 mr-60 items-center justify-between h-[100vh] bg-[#1f1f1f]]'>
            <div className=''>
                <div>
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