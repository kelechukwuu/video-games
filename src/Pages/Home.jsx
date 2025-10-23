import React, { useEffect, useState } from "react";
import GenreList from "../Components/GenreList";
import Banner from "../Components/Banner";
import TrendingGames from "../Components/TrendingGames";
import GamesByGenreId from "../Components/GamesByGenreId";

const Home = ({GlobalApi, gameListByGenreId,getGameListByGenreId}) => {
  const [allGamesList, setAllGameList] = useState();
  const [selectedGenreName, setSelectedGenreName] = useState('Action')


  useEffect(() => {
    getAllGamesList();
    getGameStores(1)
  }, []);


  const getAllGamesList = () => {
    GlobalApi.getAllGames.then((resp) => {
      const result = resp.data.results
      const shuffled = [...result].sort(() => 0.5 - Math.random());
      setAllGameList(shuffled);


    });
  };

  const getGameStores = (id)=>{
      GlobalApi.getGameStores(3498).then((resp)=>{

    })
  
  }





  return (
    <div className=" grid grid-cols-5 px-5">
      
      <div className="h-full hidden md:block">
        <GenreList  genreId={(genreId)=> getGameListByGenreId(genreId)} selectedGenreName={(name)=> setSelectedGenreName(name)}/>
      </div>
      <div className=" md:col-span-3 col-span-4">
        {allGamesList?.length > 0 ? (
          <div>
            <Banner BannerImage={allGamesList[9]} />
          </div>
        ) : null}
        {gameListByGenreId?.length > 0 ? (
          <GamesByGenreId gameListByGenreId={gameListByGenreId} setSelectedGenreName={selectedGenreName} GlobalApi={GlobalApi}/>
        ) : null}
      </div>
            {allGamesList?.length>0 ?<TrendingGames gameList={allGamesList} />:null}
    </div>
  );
};

export default Home;
