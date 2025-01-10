import React from 'react'

const Navbar = () => {
    return (

        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white '>
            <h1 className='mx-2 font-bold uppercase text-2xl'>plants for plans</h1>
            <ul className='flex items-center gap-x-14 h-16'>
                <li>Home</li>
                <li>About</li>
                <li>Content</li>
                <button >Log In</button>
                <button className='w-20 h-10 font-medium bg-white text-black ' >Sign Up</button>
            </ul>
        </div>

    )
}

export default Navbar