import React from 'react'

const Main = () => {
    return (
        <div className='flex  w-100% items-center h-[calc(100vh-8rem)]'>
            <section className='w-1/2 flex justify-center flex-col'>
                <div style={{ fontSize: '150px' }} className=' p-0 m-0 flex flex-col leading-none font-bold'>
                    <div>STOP</div>
                    <div>WASTING</div>
                    <div>YOUR</div>
                    <div style={{ color: '#60e05c' }}>TIME</div>
                </div>
                <p>this is where the big header will be added</p>
            </section>
            <section className='w-1/2 flex justify-center items-center'>
                <img src="/images/iso-block.png" alt="image" />
            </section>
            <div className='relative '>
                <div className='w-9 h-9' style={{ border: '8px solid #f5f5dc' }}></div>
                <div className=' absolute top-0 right-0 w-2 h-2' style={{ background: '#1f1f1f' }}></div>
                <div className='absolute top-0 left-0 w-2 h-2' style={{ background: '#1f1f1f' }}></div>
                <div className='absolute bottom-0 right-0 w-2 h-2' style={{ background: '#1f1f1f' }}></div>
                <div className='absolute bottom-0 left-0 w-2 h-2' style={{ background: '#1f1f1f' }}></div>
            </div>
        </div>
    )
}

export default Main 