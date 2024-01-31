import React from 'react'
import Logo from "../../public/dua-logo.svg"
import Image from 'next/image'
import { GoHome } from "react-icons/go";
import { TiThMenuOutline } from "react-icons/ti";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { CiBookmark } from "react-icons/ci";
import { VscPersonAdd } from "react-icons/vsc";
import { IoChatboxOutline } from "react-icons/io5";
export default function Sidebar() {
  return (
    <div className='min-h- flex flex-col items-center p-2 bg-white min-w-20 my-20 mx-4 rounded-xl '>
        <div className='my-4'>
            <Image src={Logo} alt='Dua logo' />
        </div>
        <div className='mt-8 flex flex-col gap-6'>
            <div className='w-12 h-12 rounded-full flex justify-center items-center bg-gray-200'>
                <GoHome className='text-2xl '/>
            </div>
            <div className='w-12 h-12 rounded-full flex justify-center items-center bg-gray-200'>
                <TiThMenuOutline className='text-2xl '/>
            </div>
            <div className='w-12 h-12 rounded-full flex justify-center items-center bg-gray-200'>
                <HiOutlineLightBulb className='text-2xl '/>
            </div>
            <div className='w-12 h-12 rounded-full flex justify-center items-center bg-gray-200'>
                <CiBookmark className='text-2xl '/>
            </div>
            <div className='w-12 h-12 rounded-full flex justify-center items-center bg-gray-200'>
                <VscPersonAdd className='text-2xl '/>
            </div>
            <div className='w-12 h-12 rounded-full flex justify-center items-center bg-gray-200'>
                <IoChatboxOutline className='text-2xl '/>
            </div>
        </div>
        <div>
            
        </div>
    </div>
  )
}
