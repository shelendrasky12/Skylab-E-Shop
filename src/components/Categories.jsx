import React from 'react'
import { assets, categories } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Categories = () => {

    const {navigate} = useAppContext()
  return (
    <div className='mt-16'>
      <p className='text-2xl md:text-3xl font-medium'>Categories</p>
      <div className='grid grid-cols-2 sm:grid-cols-3  md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4 mt-6'>
        {categories.map((category, index) => (
          <div key={index} className='flex flex-col items-center justify-center gap-2 cursor-pointer hover:scale-105 transition-all' 
          style={{backgroundColor:category.bgColor}} onClick={()=> navigate(`/products/${category.path.toLocaleLowerCase()}`)}>
            <img src={category.image} alt={category.text} className='w-16 h-16 md:w-20 md:h-20' />
            <p className='text-sm md:text-base font-medium'>{category.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
