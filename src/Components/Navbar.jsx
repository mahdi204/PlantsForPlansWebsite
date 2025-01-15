import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center h-24 w-100%'>
            <h1 className=' font-bold uppercase text-2xl'>plants for plans</h1>
            <ul className='flex items-center gap-x-14 h-16'>
                <li>
                    <button class="relative group  py-1.5 px-2.5 ">
                        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-50 group-hover:w-full group-hover:transition-all">
                        </span>
                        Home
                    </button>
                </li>
                <li>
                    <button class="relative group  py-1.5 px-2.5 ">
                        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-50 group-hover:w-full group-hover:transition-all">
                        </span>
                        About
                    </button>
                </li>
                <li>
                    <button class="relative group  py-1.5 px-2.5 ">
                        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-50 group-hover:w-full group-hover:transition-all">
                        </span>
                        Contact
                    </button>
                </li>
                <li>
                    <button class="relative group  py-1.5 px-2.5 ">
                        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-50 group-hover:w-full group-hover:transition-all">
                        </span>
                        Login
                    </button>
                </li>
                <button type="button" class="w-20 h-10 text-nowrap inline-flex items-center justify-center border-2 bg-[#f5f5dc] border-transparent px-12 py-3 text-center text-base font-bold text-black transition-all duration-200 ease-in-out focus:shadow hover:border-[#f5f5dc] hover:bg-transparent hover:text-[#f5f5dc]">
                    Sign Up
                </button>

            </ul>
        </div>

    )
}

export default Navbar