import React from 'react'

const Page5 = () => {
    return (
        <div className='relative md:top-[10vh] top-[110vh] p-4'>
            <div className='font-bold md:text-3xl text-xl mb-2 flex justify-center items-center'>My <span className='text-[#CBACF9] pl-1 '>work Experience</span></div>
            <div className='flex flex-col mt-6'>
                <div className='flex justify-center items-center gap-5 flex-wrap'>

                    <div className='flex backdrop-blur-2xl shadow-2xl shadow-black bg-[#00042D]/50 p-5 rounded-md'>
                        <img src="/h1.png" alt="no imag found" className='rounded-md w-[5rem] h-[5rem]' />
                        <div className='flex flex-col justify-center items-center gap-1'>
                            <div className='text-xl font-bold'>Mobile App Dev Intern</div>
                            <div className='text-center w-[80%] font-thin'>Assisted in the developement of a app-based platform using Flutter</div>
                        </div>
                    </div>
                    <div className='flex backdrop-blur-2xl shadow-2xl shadow-black bg-[#00042D]/50 p-5 rounded-md'>
                        <img src="/h3.png" alt="no imag found" className='rounded-md w-[5rem] h-[5rem]' />
                        <div className='flex flex-col justify-center items-center gap-1'>
                            <div className='text-xl font-bold '>Freelancing Full Stack Dev</div>
                            <div className='text-center w-[80%] font-thin'>Led the dev of a NextJs based full stack web-app for a Client</div>
                        </div>
                    </div>

                </div>

                <div className='flex justify-center items-center gap-5 flex-wrap mt-5'>
                    <div className='flex backdrop-blur-2xl shadow-2xl shadow-black bg-[#00042D]/50 p-5 rounded-md'>
                        <img src="/h2.jpg" alt="no imag found" className='rounded-md w-[5rem] h-[5rem]'/>
                        <div className='flex flex-col justify-center items-center gap-1'>
                            <div className='text-xl font-bold text-center'>ASE-Level 1</div>
                            <div className='text-center w-[80%] font-thin'>Currently working as Associate Software Engineer at MNC.</div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Page5