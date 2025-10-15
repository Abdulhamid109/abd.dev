import React from 'react'
import { CiTwitter } from 'react-icons/ci'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { MdOutlineArrowOutward } from 'react-icons/md'

const Page6 = () => {
  return (
    <div className='relative md:top-[20vh] top-[120vh] h-[50vh]'>
      <div className='md:font-bold text-xl text-center drop-shadow-xs drop-shadow-zinc-500 font-semibold md:text-3xl flex justify-center p-3 items-center'>Ready to take your digital presence to the next level?</div>
      <div className='flex justify-center items-center w-full font-thin text-center text-[16px] m-2'>Reach out to me today and let's discuss how I can help you achieve your goals.</div>
      <div className='flex justify-center items-center w-full'>
        <button
        className=' md:w-[15vw] mb-15 p-2 bg-[#05071d]/50 rounded-md backdrop-blur-2xl border shadow-2xl shadow-black w-[70vw] m-1 flex justify-center items-center text-[15px] '
      >
        Contact Me Now <MdOutlineArrowOutward />
      </button>

      </div>

      <div className='absolute bottom-0 p-10 flex justify-between items-center w-full'>
    <div className='font-thin md:text-[15px] text-xs'>
      Copyright &copy;2025 Abdulhamid Patel
    </div>
    <div className='flex justify-center items-center gap-2'>
      <FaInstagram />
      <CiTwitter />
      <FaGithub />
      <FaWhatsapp />
      <FaLinkedin />
    </div>
      </div>
    </div>
  )
}

export default Page6