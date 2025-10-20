import React from 'react'
import GenreList from '../Components/GenreList'

const Home = () => {
  return (
    <div className=' grid grid-cols-4 px-5'>
      <div className='h-full hidden md:block'>
        <GenreList/>
      </div>
      <div className=' bg-blue-500 md:col-span-3 col-span-4'>Section 2
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default Home