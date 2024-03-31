import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Card from "./Card";
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
      <div id="header">
        <h1>Anime Companion</h1>
        <input id="search" type="text" placeholder="Search" />
      </div>

      <div id="top-anime">
        <h2>Top Anime</h2>
        <div id="container">
          {anilist.map((a) => {
            const { id, img, title } = a;
            return (
              <Card key={id} id={id} img={img} title={title}>
                <button onClick={() => addToWatchlist(id)}>Add</button>
              </Card>
            );
          })}
        </div>
      </div>

      <div id="watchlist">
        <h2>Your Watchlist </h2>
        <div id="container">
          {watchlist.map((a) => {
            const { id, img, title } = a;
            return (
              <Card key={id} id={id} img={img} title={title}>
                <button onClick={() => removeFromWatchlist(id)}>Remove</button>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
