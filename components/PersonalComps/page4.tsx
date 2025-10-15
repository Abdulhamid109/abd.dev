import Testimonials from '@/constants/Testimonialsvals'
import React from 'react'
import { InfiniteMovingCards } from '../ui/infinite-moving-cards'

const Page4 = () => {
    return (
        <div className=' relative md:top-[0vh] top-[100vh]'>
            <div className='font-bold md:text-3xl text-xl mb-2 flex justify-center items-center'>Kind words from <span className='text-[#CBACF9] pl-1 '>satisfied clients</span></div>
            <div className=" rounded-md flex flex-col antialiased z-16 bg-[#05071D]/10 items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                className='backdrop-blur-2xl shadow-2xl shadow-black'
                    items={Testimonials}
                    // direction="right"
                    speed="slow"
                />
            </div>
        </div>
    )
}

export default Page4