import React from 'react'
import Image from 'next/image'
const Banner = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] '>
      <Image
      src="/b1.jpg"
      objectFit='cover'
      layout='fill'
      alt='banner'
      />

    <div className="absolute top-1/2 w-full text-center">
    <p className='text sm:text-lg font-semibold text-white'> Not sure where to go?</p>

    <button className='text-black bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl
    active:scale-100 transition duration-150
    '>
    I'm flexible</button>
    </div>
    </div>
  )
}

export default Banner
