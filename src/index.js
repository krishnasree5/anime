import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import MainPage from "./MainPage";
import WatchList from "./WatchList";

import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const App = () => {
  const TopAnimeUrl = "https://api.jikan.moe/v4/top/anime";
  const [anilist, setAnilist] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  const fetchAnime = async (url) => {
    const dummy = [];
    const res = await fetch(url);
    const data = await res.json();
    const topAnime = data.data;

    topAnime.forEach((a) => {
      const someAnime = {
        id: a.mal_id,
        img: a.images.jpg.image_url,
        title: a.title,
      };
      dummy.push(someAnime);
    });

    setAnilist(dummy);
  };

  useEffect(() => {
    fetchAnime(TopAnimeUrl);
  }, []);

  const addToWatchlist = (id) => {
    const anime = anilist.find((a) => a.id === id);
    if (!watchlist.some((a) => a.id === id)) {
      setWatchlist([...watchlist, anime]);
    }
  };

  const removeFromWatchlist = (id) => {
    const newWatchlist = watchlist.filter((a) => a.id !== id);
    setWatchlist(newWatchlist);
  };

  return (
    <BrowserRouter>
      <Header fetchAnime={fetchAnime} />

      <Routes>
        <Route
          path="/"
          element={
            <MainPage anilist={anilist} addToWatchlist={addToWatchlist} />
          }
        ></Route>
        <Route
          path="/watchlist"
          element={
            <WatchList
              watchlist={watchlist}
              removeFromWatchlist={removeFromWatchlist}
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
