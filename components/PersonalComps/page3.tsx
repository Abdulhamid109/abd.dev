import React from 'react'
import ProjectCard from './ProjectCard'

const Page3 = () => {
    return (
        <div className='w-screen h-screen relative md:top-[20vh] top-[40vh]'>
            <div className='font-bold text-3xl mb-2 flex justify-center items-center'>
                A small selection of <span className='text-[#CBACF9] pl-1 '>recent projects</span>
            </div>
            <div className='flex justify-center items-center'>
                <div className='md:grid-cols-2 lg:grid-cols-3 grid grid-cols-1'>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
        </div>
    )
}

export default Page3