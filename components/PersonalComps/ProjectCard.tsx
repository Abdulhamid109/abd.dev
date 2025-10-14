import React from 'react'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import { MdOutlineArrowOutward } from 'react-icons/md'
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiTypescript } from 'react-icons/si'

const ProjectCard = () => {
    return (
        <div className='flex flex-col w-fit h-fit border rounded-md p-2 m-4 backdrop-blur-2xl shadow-2xl shadow-[#000000] hover:scale-105 transition-all duration-200'>
            <div className='bg-[url(/image.png)] bg-no-repeat border bg-center bg-cover w-[20rem] rounded-md h-[15rem] backdrop-blur-xl shadow-xl shadow-[#011721] md-2'>

            </div>
            <div className='flex flex-col justify-center items-start gap-1 p-1 mt-1'>
                <div className='font-bold text-2xl pl-2'>3D solar system</div>
                <div className='pl-2'>Explore the wonders of our solar system</div>
                <div className='flex justify-between items-center w-full p-2'>
                    <div className='flex justify-center items-center gap-1 '>
                        <FaReact/>
                        <RiNextjsFill />
                        <FaNodeJs />
                        <SiTypescript />
                        <RiTailwindCssFill />



                    </div>
                    <div className='text-[#CBACF9] flex justify-center gap-0.5 items-center'>
                        check live Site <MdOutlineArrowOutward /> </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard