import React from 'react'
import Spline from '@splinetool/react-spline/next';
import Marquee from "react-fast-marquee";
import { cn } from '@/lib/utils';


const Page2 = () => {
    const webDevSkills = ["HTML5", "CSS3", "JavaScript", "React", "Next.js"];

    return (
        <div className='h-screen w-screen flex flex-col justify-center items-center bg-[#05071D]/[0.96]'>

            <div className='flex justify-center items-center flex-wrap md:gap-3'>
                <div className="bg-[url(/image.png)] shadow-black bg-cover w-[29rem] h-[30rem] backdrop-blur-2xl shadow-2xl bg-black/10 rounded-md">
                    <p className='flex justify-center items-end h-full text-2xl p-2 w-[20rem] font-bold'>I prioritize Client collaboration,fostering opening communication</p>
                </div>
                <div className='flex flex-col'>
                    <div className='bg-[url(/earth.png)] shadow-black bg-cover w-[29rem] h-[20rem] backdrop-blur-2xl shadow-2xl bg-blend-color-burn border-2 mt-2 bg-gradient-to-l from-black to-zinc-700 rounded-md'>
                        <p className='p-2 font-bold text-2xl '>I &apos;m very fexibile with time zone communications</p>
                    </div>
                    <div className="backdrop-blur-2xl w-[29rem] h-[10rem] mt-2 shadow-2xl bg-black/10 rounded-md border-2 p-4 shadow-black">
                        <p className='font-bold text-2xl p-1 mb-1 text-center'>My Tech Stack</p>
                        <Marquee
                            className=' backdrop-blur-2xl shadow-2xl  rounded-md'
                            direction='right'
                            speed={50} gradient={false} pauseOnHover>
                            {webDevSkills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="mx-4 px-4 py-2 bg-white/10 rounded-lg text-gray-200 "
                                >
                                    {skill}
                                </div>
                            ))}
                        </Marquee>
                        <Marquee
                            className='mt-2 backdrop-blur-2xl shadow-2xl  rounded-md'
                            direction='left'
                            speed={50} gradient={false} pauseOnHover>
                            {webDevSkills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="mx-4 px-4 py-2 bg-white/10 rounded-lg text-gray-200 "
                                >
                                    {skill}
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </div>
            </div>


           




        </div>
    )
}

export default Page2


//  <div className='w-[29rem] h-[30rem] md:w-[59rem] flex flex-col md:flex-row justify-center items-center flex-wrap gap-3 mt-2 rounded-2xl z-10'>
//                 {/* Left Column: Two small sections stacked vertically */}
//                 <div className='flex flex-col justify-start items-start w-[29rem] h-[20rem]  md:w-auto'>
//                     <div className='bg-[url(/dark.webp)] bg-cover w-full md:w-[19rem] h-[10rem] backdrop-blur-2xl shadow-2xl bg-[#05071D]/[0.96] shadow-black rounded-md'>
//                         <p className='z-10 text-xl md:text-2xl font-bold p-2'>Tech Enthusiastic Passion for development</p>
//                     </div>
//                     <div className='mt-2 md:w-[19rem] h-[10rem] w-[29rem] p-2 backdrop-blur-2xl shadow-2xl bg-gradient-to-tl from-zinc-700 to-black shadow-black rounded-md'>
//                         <p className='z-10 text-xl md:text-2xl font-bold p-2'>Do you want to start the project together?</p>
//                         <div className='bg-zinc-700 text-white font-thin p-1 rounded-md'>Copy my Email address</div>
//                     </div>
//                 </div>
                
//                 {/* Right Column: The Green Bites section */}
//                 <div className='md:flex md:justify-center md:items-center flex flex-col w-full '>
//                     <div className='rounded-md flex flex-col justify-center items-center bg-[url(/demo-img.png)] bg-cover backdrop-blur-2xl shadow-2xl bg-[#05071D]/[0.96] shadow-black p-4'>
//                     <p className='text-2xl font-bold'>The Green Bites</p>
//                     <h1 className='text-lg font-semibold text-center'>Currently Developing the AI-based Food & Supply Chain Management</h1>
//                 </div>
//                 </div>
//             </div>