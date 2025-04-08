import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const MainBanner = () => {
    return (
        <div className='relative '>
            <img src={assets.main_banner_bg} className='w-full hidden md:block' alt='main-banner' />
            <img src={assets.main_banner_bg_sm} className='w-full md:hidden' alt='main-banner-sm' />

            <div className='absolute inset-0 flex flex-col justify-center items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24 xl:pl-32'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15'>Fressness you can trust, everytime you can buy!</h1>
           

            <div className='flex item-center mt-6 font-medium'>
                <Link className='group flex item-center gap-2 px-7 md:px-9 py-3 bg-primary hover:bg-primary-dull transition rounded text-white cursor-pointer' to={"/products"}>
                    <img src={assets.white_arrow_icon} className='md:hidden transition group-focus:translate-x-1' />
                    Shop Now
                </Link>
                <Link className='group hidden md:flex item-center gap-2 px-9 py-3 cursor-pointer' to={"/products"}>
                    <img src={assets.black_arrow_icon} className=' transtion group-hover:translate-x-1' />
                    Explore deals
                </Link>
            </div>
            </div>
        </div>
    )
}

export default MainBanner
