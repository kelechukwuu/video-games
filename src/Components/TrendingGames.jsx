import React, { useEffect } from 'react'

const TrendingGames = ({gameList}) => {
    const trending = gameList[Math.floor(Math.random() * gameList.length)];
  return (
    <div className=''>
        <h1 className='font-bold text-[30px] dark:text-white pl-3'>Trending Game</h1>
        <div className='hidden md:grid lg:grid- gap-4 m-3'>
            {
            gameList.map((i,index)=> index < 4 &&(
                <div className='bg-[#76a8f75e] rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-progress' key={index}>
                    <img src={i.background_image} className='h-[270px] rounded-lg object-cover' />
                       <span className='flex justify-center gap-1 mt-2'>{
                i.stores.map((i,index)=>(
                    <img src={'https://'+i.store.domain+"/favicon.ico"} className='h-[20px] rounded-lg'/>
        ))}</span>
                    <h3 className='dark:text-white tet-[20px] font-bold p-2 text-center'>
                        {i.name}</h3>
                </div>
            ))
        }
    </div></div>
  )
}

export default TrendingGames