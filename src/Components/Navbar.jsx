import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center h-24 w-100%'>
            <h1 className=' font-bold uppercase text-2xl'>plants for plans</h1>
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