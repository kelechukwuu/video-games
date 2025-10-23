import React from 'react'

const Banner = ({BannerImage}) => {
  return (
    <div className=' relative '>
        <div className=' absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent w-full'>
            <h2 className='text-[24px] text-white font-bold'>{BannerImage.name}</h2>
            <button className='bg-blue-950 text-white px-4 p-1 rounded-lg bg-radial-[at_50%_75%] from-blue-400 via-indigo-900 to-90%'>GetNow</button>
        </div>
        <img src={BannerImage.background_image} className='md:h-[320px] w-full object-cover rounded-xl'/>
    </div>
  )
}

export default Banner