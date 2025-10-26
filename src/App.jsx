import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import GameDetails from "./Pages/GameDetails"
import MainLayout from "./Layout/MainLayout";
import GlobalApi from "./Services/GlobalApi";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

const App = () => {
  const [theme, setTheme] = useState("dark");

  const [gameListByGenreId, setGameListByGenreId] = useState();

  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "dark");
    getGameListByGenreId(4);
  }, []);
  const getGameListByGenreId = (id) => {
    GlobalApi.getGamesListByGenreId(id)
      .then((resp) => {
        setGameListByGenreId(resp.data.results);
      })
      .catch((error) => console.log(error));
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <MainLayout
            theme={theme}
            setTheme={setTheme}
            gameListByGenreId={gameListByGenreId}
          />
        }
      >
        <Route
          index
          element={
            <Home
              GlobalApi={GlobalApi}
              gameListByGenreId={gameListByGenreId}
              setGameListByGenreId={setGameListByGenreId}
              getGameListByGenreId={getGameListByGenreId}
            />
          }
        />
        <Route path="game-details/:id" element={<GameDetails/>} />
        <Route path="*" element={<div>Page Not Found</div>} />
        <Route path="login" element={<SignIn/>} />
        <Route path="register" element={<SignUp/>} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
