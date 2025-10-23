import React, { useEffect, useState } from "react";

const GamesByGenreId = ({ gameListByGenreId, setSelectedGenreName, GlobalApi }) => {
  const [movieTrailer,setMovieTrailer] = useState()

       const getGameMovies =  (id)=>{
        GlobalApi.getGameMovies(id).then((resp)=>
          setMovieTrailer(resp)
    )}
  return (
    <div>
      <h2 className="font-bold text-[30px] dark:text-white mt-5">
        
        {setSelectedGenreName} Games
      </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {gameListByGenreId.map((i, idx) => (
    <div
      key={idx}
      className="bg-[#76a8f75e] p-3 rounded-lg pb-6 h-full flex flex-col justify-between hover:scale-105 transition-transform duration-300 "
    >
      {/* image with fixed height or aspect ratio */}
      <div className="w-full h-44 md:h-48 overflow-hidden rounded-xl mb-3">
        <img
          src={i.background_image}
          alt={i.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div>
        <h2 className="text-[16px] text-black dark:text-white font-bold">
          {i.name}{i.id}
          <span className="p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-700 font-medium">
            {i.metacritic}
          </span>
        </h2>

        <h2 className="text-gray-700 dark:text-gray-200 text-[14px]">
          ⭐{i.rating} 💬{i.reviews_count} 🔥{i.suggestions_count}
        </h2>
      </div>

      <button onClick={()=> { getGameMovies(i.id)}} className=" px-3 py-1 bg-blue-950 text-white rounded mt-3 bg-radial-[at_50%_75%] from-blue-400 via-indigo-900 to-90%">
        Watch Trailer
      </button>
    </div>
  ))}
</div>

    </div>
  );
};

export default GamesByGenreId;
