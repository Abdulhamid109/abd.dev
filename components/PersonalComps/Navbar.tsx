import React from 'react'

const Navbar = () => {
    return (
        <div className='fixed top-2 w-screen left-0 right-0 bottom-0 text-center z-15'>
            <div className='p-2 w-full flex justify-center'>
                <div className='bg-[#05071D]/10 p-2 gap-2 md:gap-4 list-none flex rounded-md backdrop-blur-2xl shadow-xl shadow-black'>
                    <li className='p-2 hover:underline'>About</li>
                    <li className='p-2 hover:underline'>Projects</li>
                    <li className='p-2 hover:underline'>Testimonials</li>
                    <li className='p-2 hover:underline'>Contact</li>
                </div>
            </div>
        </div>
    )
}

export default Navbar