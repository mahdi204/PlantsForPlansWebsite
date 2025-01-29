import { div } from 'motion/react-client'
import React from 'react'


const Foot = () => {
    return (
        <div
            className=' bg-[#60e05c] text-[#1f1f1f]'
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
            <div className='flex justify-between ml-60 mr-60 h-[350px]  p-10'  >
                <section className='first-col flex flex-col h-full justify-start items-start w-[200px]' style={{ fontWeight: 400 }}>
                    <p className='mb-2 uppercase text-xl ' style={{ fontWeight: 700 }}>Social:</p>
                    <div className='w-full h-[1px] bg-[#1f1f1f] mb-4'></div>
                    <div className='flex'>
                        <div className='mr-2'><svg fill="#1f1f1f" height="25px" width="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/400/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xml:space="preserve" stroke="#9ed1db"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M113,145c-141.2,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M215.2,361.2 c0.1,2.2,0.1,4.5,0.1,6.8c0,69.5-52.9,149.7-149.7,149.7c-29.7,0-57.4-8.7-80.6-23.6c4.1,0.5,8.3,0.7,12.6,0.7 c24.6,0,47.3-8.4,65.3-22.5c-23-0.4-42.5-15.6-49.1-36.5c3.2,0.6,6.5,0.9,9.9,0.9c4.8,0,9.5-0.6,13.9-1.9 C13.5,430-4.6,408.7-4.6,383.2v-0.6c7.1,3.9,15.2,6.3,23.8,6.6c-14.1-9.4-23.4-25.6-23.4-43.8c0-9.6,2.6-18.7,7.1-26.5 c26,31.9,64.7,52.8,108.4,55c-0.9-3.8-1.4-7.8-1.4-12c0-29,23.6-52.6,52.6-52.6c15.1,0,28.8,6.4,38.4,16.6 c12-2.4,23.2-6.7,33.4-12.8c-3.9,12.3-12.3,22.6-23.1,29.1c10.6-1.3,20.8-4.1,30.2-8.3C234.4,344.5,225.5,353.7,215.2,361.2z"></path> </g></svg></div>
                        <div className='mr-2'><svg fill="#1f1f1f" height="25px" width="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xml:space="preserve" stroke="#e37d7d"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M113,446c24.8,0,45.1-20.2,45.1-45.1c0-9.8-3.2-18.9-8.5-26.3c-8.2-11.3-21.5-18.8-36.5-18.8s-28.3,7.4-36.5,18.8 c-5.3,7.4-8.5,16.5-8.5,26.3C68,425.8,88.2,446,113,446z"></path> <polygon points="211.4,345.9 211.4,308.1 211.4,302.5 205.8,302.5 168,302.6 168.2,346 "></polygon> <path d="M183,401c0,38.6-31.4,70-70,70c-38.6,0-70-31.4-70-70c0-9.3,1.9-18.2,5.2-26.3H10v104.8C10,493,21,504,34.5,504h157 c13.5,0,24.5-11,24.5-24.5V374.7h-38.2C181.2,382.8,183,391.7,183,401z"></path> <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M241,374.7v104.8 c0,27.3-22.2,49.5-49.5,49.5h-157C7.2,529-15,506.8-15,479.5V374.7v-52.3c0-27.3,22.2-49.5,49.5-49.5h157 c27.3,0,49.5,22.2,49.5,49.5V374.7z"></path> </g> </g></svg></div>
                    </div>
                </section>
                <section className='second-col flex flex-col h-full justify-start items-start w-[200px]' style={{ fontWeight: 400 }}>
                    <p className='mb-2 uppercase text-xl ' style={{ fontWeight: 700 }}>sections:</p>
                    <div className='w-full h-[1px] bg-[#1f1f1f] mb-4'></div>
                    <div className='flex flex-col'>
                        <a href="Home">Home</a>
                        <a href="About">About</a>
                        <a href="Services">Contact</a>
                    </div>
                </section>
                <section className='third flex flex-col h-full justify-start items-start w-[200px]' style={{ fontWeight: 400 }}>
                    <p className='mb-2 uppercase text-xl' style={{ fontWeight: 700 }}>about us:</p>
                    <div className='w-full h-[1px] bg-[#1f1f1f] mb-4'></div>
                    <p>At Plants For Plans, we believe in the power of balance.  Let nature remind you to stay present, get things done, and build healthier habits—one plant at a time.</p>
                </section>
            </div>
        </div>
    )
}

export default Foot