import React from 'react'

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
                <img src="/images/iso-block.png" alt="image" />
            </section>
            {/* This is just a pixel art border */}
            {/* <div className='relative '>
                <div className='w-40 h-80' style={{ border: '8px solid #f5f5dc' }}></div>
                <div className=' absolute top-0 right-0 w-2 h-2' style={{ background: '#1f1f1f' }}></div>
                <div className='absolute top-0 left-0 w-2 h-2' style={{ background: '#1f1f1f' }}></div>
                <div className='absolute bottom-0 right-0 w-2 h-2' style={{ background: '#1f1f1f' }}></div>
                <div className='absolute bottom-0 left-0 w-2 h-2' style={{ background: '#1f1f1f' }}></div>
            </div> */}
        </div>
    )
}

export default Main 