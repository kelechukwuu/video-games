import React, { useEffect } from 'react'

const TrendingGames = ({gameList}) => {
    const trending = gameList[Math.floor(Math.random() * gameList.length)];
  return (
    <div>
        <h1 className='font-bold text-[30px] dark:text-white mt-5'>Trending Games</h1>
        <div className='hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {
            gameList.map((i,index)=> index < 4 &&(
                <div className='bg-[#76a8f75e] rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-progress' key={index}>
                    <img src={i.background_image} className='h-[270px] rounded-lg object-cover' />
                    <h2 className='dark:text-white tet-[20px] font-bold p-2 text-center'>{i.name}</h2>
                </div>
            ))
        }
    </div></div>
  )
}

export default TrendingGames