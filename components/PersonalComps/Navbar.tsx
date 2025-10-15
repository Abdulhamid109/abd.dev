import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='fixed z-50 top-2 w-screen left-0 right-0 bottom-0 text-center'>
            <div className='p-2 w-full flex justify-center'>
                <div className='bg-[#05071D]/10 p-2 gap-2 md:gap-4 list-none flex rounded-md backdrop-blur-2xl shadow-xl shadow-black'>
                    <Link className='p-2 hover:underline hover:scale-110 hover:transition-all hover:duration-200' href={"#about"}>About</Link>
                    <Link className='p-2 hover:underline hover:scale-110 hover:transition-all hover:duration-200' href={"#project"}>Projects</Link>
                    <li className='p-2 hover:underline hover:scale-110 hover:transition-all hover:duration-200'>Testimonials</li>
                    <li className='p-2 hover:underline hover:scale-110 hover:transition-all hover:duration-200'>Contact</li>
                </div>
            </div>
        </div>
    )
}

export default Navbar