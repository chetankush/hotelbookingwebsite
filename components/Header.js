import React from 'react'
import Image from "next/image"
import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon } from "@heroicons/react/outline"

function Header() {
    return (


        <div className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 
        md:px-10 
        '>
            <div className = "relative flex items-center h-10 cursor-pointer my-auto mr-8 ">
            <Image
             src="https://links.papareact.com/qd3"
             objectFit="contain"
             layout="fill"
             objectPosition="left"
            />
            
            </div>

            <div>
            <div className='flex item-center border-2 rounded-full py-2'>
            <input type="text" placeholder='search'
            className='bg-white color-black flex-grow pl-5 bg-transparent outline-none text-gray-600 placeholder-gray-400'
            />
            <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2
            md:mx-2
            cursor-pointer'/>

            </div>
            </div>


            <div className='flex items-center space-x-4 justify-end text-gray-500'>
            <p className='hidden md:inline cursor-pointer '>Become a host</p>
            <GlobeAltIcon
            className='h-6 cursor-pointer md:inline hidden'
            />

            <div className='flex items-center space-x-2 border-2 p-2 rounded-full cusor'>
            <MenuIcon className='h-6'/>
            <UserCircleIcon className='h-6'/>
            </div>


            </div>

        </div>
    )
}

export default Header