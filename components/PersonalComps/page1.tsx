"use client"
import { cn } from '@/lib/utils'
import React from 'react'
import { Spotlight } from '../ui/spotlight'
import Navbar from './Navbar'
import { Button } from '../ui/moving-border'
import { MdOutlineArrowOutward } from "react-icons/md";


const Page1 = () => {
  return (

    <div className="relative flex h-screen w-full overflow-hidden rounded-md bg-[#05071D]/[0.96] antialiased md:items-start md:justify-center sm:items-center sm:justify-center">
      <Navbar />

      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      />

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />


      <div className='md:w-[60vw] flex flex-col justify-center items-center'>
        <p className='flex justify-center z-10 tracking-wider md:mt-[30vh] p-1 text-center'>DYNAMIC WEB MAGIC WITH NEXT JS</p>
      <h1 className='text-5xl font-bold sm:w-full z-10 p-1 text-center'>Transforming Concepts into seamless <span className='text-[#CBACF9]'>User Experiences</span> </h1>
        <p className='flex justify-center z-10 mt-2 p-2 text-center tracking-tighter'>Hi! I &apos; m Abdulhamid Patel, a Next.js Developer based in India</p>
        <Button
        containerClassName='md:w-[15vw] w-[70vw] m-1 '
        className='flex justify-center items-center text-[15px] '
        >
          See my work <MdOutlineArrowOutward/>
        </Button>
      </div>

      
    </div>

  )
}

export default Page1