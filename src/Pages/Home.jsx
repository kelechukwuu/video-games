import React, { useEffect, useState } from "react";
import GenreList from "../Components/GenreList";
import GlobalApi from "../Services/GlobalApi";
import Banner from "../Components/Banner";
import TrendingGames from "../Components/TrendingGames";
import GamesByGenreId from "../Components/GamesByGenreId";

const Home = () => {
  const [allGamesList, setAllGameList] = useState();
  const [gameListByGenreId, setGameListByGenreId] = useState();
  const [selectedGenreName, setSelectedGenreName] = useState('Action')


  useEffect(() => {
    getAllGamesList();
    getGameListByGenreId(4);
  }, []);


  const getAllGamesList = () => {
    GlobalApi.getAllGames.then((resp) => {
      const result = resp.data.results
      const shuffled = [...result].sort(() => 0.5 - Math.random());
      setAllGameList(shuffled);
    });
  };



  const getGameListByGenreId = (id) => {
    GlobalApi.getGamesListByGenreId(id).then((resp) => {
      setGameListByGenreId(resp.data.results);
    });
  };


  return (
    <div className=" grid grid-cols-4 px-5">
      <div className="h-full hidden md:block">
        <GenreList  genreId={(genreId)=> getGameListByGenreId(genreId)} selectedGenreName={(name)=> setSelectedGenreName(name)}/>
      </div>
      <div className=" md:col-span-3 col-span-4">
        {allGamesList?.length > 0 ? (
          <div>
            <Banner BannerImage={allGamesList[9]} />
            <TrendingGames gameList={allGamesList} />
          </div>
        ) : null}
        {gameListByGenreId?.length > 0 ? (
          <GamesByGenreId gameListByGenreId={gameListByGenreId} setSelectedGenreName={selectedGenreName}/>
        ) : null}
      </div>
      <div></div>
    </div>
  );
};

export default Home;
