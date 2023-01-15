import React, { useState} from 'react'
import Image from "next/image"
import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon, UserIcon } from "@heroicons/react/outline"
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"
import { DateRangePicker } from 'react-date-range'
import {useRouter} from "next/dist/client/router"

function Header({placeholder}) {
    
    
    const [searchInput, setSearchInput] = useState();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuests, setNoOfGuests] = useState(1);
    const router = useRouter();
    // console.log(searchInput);
    
    const search = ({placeholder}) => {
      router.push({
        pathname: "/search",
        query: {
            location: searchInput,
            startDate: startDate.toISOString(),
            endDate: endDate.toISOString(),
            noOfGuests,
        }
      })
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key:"selection", 
    };


    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);        
    };



    const resetInput = () => {
     setSearchInput("");
    };
    

    return (



        <div className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 
        md:px-10 
        '>
            <div onClick={()=>router.push("/")} className="relative flex items-center h-10 cursor-pointer my-auto mr-8 ">
                <Image
                    src="https://links.papareact.com/qd3"
                    objectFit="contain"
                    layout="fill"
                    objectPosition="left"
                    alt='logo'
                />

            </div>

            <div>
                <div className='flex item-center border-2 rounded-full py-2 shadow 	box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.5), 0 1px 5px -1px rgb(0 0 0 / 0.5);'>
                    <input
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        type="text" 
                        placeholder={placeholder||'search'}
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
                    <MenuIcon className='h-6' />
                    <UserCircleIcon className='h-6' />
                </div>

            </div>
            {searchInput &&

                <div className='flex flex-col col-span-3 mx-auto'>
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={['#1c1c1c']}
                        onChange={handleSelect}

                    />
                    
                    <div className='flex items-center border-b mb-4'>
                    <h2 className='text-2xl flex-grow font-bold'>
                    Number of Guests
                    </h2>
                    <UserIcon className='h-5'/>
                    <input type="number"
                    value={noOfGuests}
                    onChange={(e)=> setNoOfGuests(e.target.value)}
                    min = {1}
                    className="w-12 pl-2 text-lg outline-none text-red-400"
                    />
                    </div>
                    <div className='flex'>

                    <button className='flex-grow text-gray-500'
                    onClick={resetInput}
                    >Cancle</button>
                    <button className='flex-grow text-red-400'
                    onClick={search}
                    >Search</button>
                    
                    </div>

                </div>
            }

        </div>
    )
}

export default Header