import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'

const GenreList = ({genreId,selectedGenreName}) => {

    const [genreList, setGenreList]=useState([])
    const [activeIndex, setActiveIndex] =useState()
    useEffect(()=>{
        getGenreList()
    },[])

    const getGenreList=()=>{
        GlobalApi.getGenreList.then((resp)=>{
            setGenreList(resp.data.results)            

        })
    }
  return (
    <div className=' sticky top-0 overflow-y-scroll'>
    <h2 className=' text-[30px] font-bold  dark:text-white'>Genre</h2>
    {
       genreList.map((item,index) => (
  <div
  onClick={()=> {setActiveIndex(index); genreId(item.id); selectedGenreName(item.name)}}
    key={item.id} 
    className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 hover:font-medium dark:hover:bg-gray-600 hover:scale-105 p-2 rounded-lg transition-transform ease-out duration-300 ${activeIndex == index ? "bg-gray-300 dark:bg-gray-600 scale-105" : null}`}
  >
    <img
      src={item.image_background}
      alt={item.name}
      className="w-[40px] h-[40px] object-cover rounded-lg"
    />
    <h3 className="text-gray-900 dark:text-white text-[16px] transition-colors duration-300">{item.name}</h3>
  </div>
))
    }

    </div>
  )
}

export default GenreList