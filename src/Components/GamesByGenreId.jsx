import React, { useEffect } from "react";

const GamesByGenreId = ({ gameListByGenreId, setSelectedGenreName }) => {
  return (
    <div>
      <h2 className="font-bold text-[30px] dark:text-white mt-5">
        
        {setSelectedGenreName} Games
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gameListByGenreId.map((i, index) => {
          return (
            <div
              className="bg-[#76a8f75e] p-3 rounded-lg pb-10 h-full hover:scale-110 transition-all ease-in-out"
              key={index}
            >
              <img
                src={i.background_image}
                className="w-full h-[80%] rounded-xl object-cover"
              />
              <h2 className="text-[18px] text-black dark:text-white font-bold ">
                {i.name}
                <span className="p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-700 font-medium">
                  {i.metacritic}
                </span>
              </h2>
              <h2 className="text-gray-200">
                ⭐{i.rating} 💬{i.reviews_count}🔥 {i.suggestions_count}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GamesByGenreId;
