import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

import Header from "./Header";
import HomePage from "./HomePage";
import WatchList from "./WatchList";

import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const url = "https://api.jikan.moe/v4/top/anime";
const searchUrl = "https://api.jikan.moe/v4/anime?q=";

const App = () => {
  const [anilist, setAnilist] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const anilist = [];

    const fetchAnime = async () => {
      const res = await fetch(url);
      const data = await res.json();
      const topAnime = data.data;

      topAnime.forEach((a) => {
        const someAnime = {
          id: a.mal_id,
          img: a.images.jpg.image_url,
          title: a.title,
        };
        anilist.push(someAnime);
      });

      setAnilist(anilist);
    };

    fetchAnime();
  }, []);

  const addToWatchlist = (id) => {
    const anime = anilist.find((a) => a.id === id);
    setWatchlist([...watchlist, anime]);
  };

  const removeFromWatchlist = (id) => {
    const newWatchlist = watchlist.filter((a) => a.id !== id);
    setWatchlist(newWatchlist);
  };

  return (
    <>
      <Header />
      <HomePage anilist={anilist} addToWatchlist={addToWatchlist} />
      <WatchList
        watchlist={watchlist}
        removeFromWatchlist={removeFromWatchlist}
      />
    </>
  );
};

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
