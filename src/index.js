import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import img1 from "../src/assets/images/img1.jpg";
import img2 from "../src/assets/images/img2.jpg";
import img3 from "../src/assets/images/img3.jpg";
import img4 from "../src/assets/images/img4.jpg";
import img5 from "../src/assets/images/img5.jpg";
import img6 from "../src/assets/images/img6.jpg";
import img7 from "../src/assets/images/img7.jpg";
import img8 from "../src/assets/images/img8.jpg";
import img9 from "../src/assets/images/img9.jpg";
import img10 from "../src/assets/images/img10.jpg";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const anilist = [
  {
    id: 1,
    img: img1,
    title: "Tokyo Ghoul",
  },
  {
    id: 2,
    img: img2,
    title: "Attack On Titan",
  },
  {
    id: 3,
    img: img3,
    title: "Cyberpunk: Edgerunners",
  },
  {
    id: 4,
    img: img4,
    title: "Erased",
  },
  {
    id: 5,
    img: img5,
    title: "Another",
  },
  {
    id: 6,
    img: img6,
    title: "Jujutsu Kaisen",
  },
  {
    id: 7,
    img: img7,
    title: "Link Click",
  },
  {
    id: 8,
    img: img8,
    title: "Death Note",
  },
  {
    id: 9,
    img: img9,
    title: "Serial Experiments Lain",
  },
  {
    id: 10,
    img: img10,
    title: "Ergo Proxy",
  },
];

const App = () => {
  const [watchlist, setWatchlist] = useState([]);

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
      <h1>My Anime List</h1>
      <div id="container">
        {anilist.map((a) => {
          const { id, img, title } = a;
          return (
            <div key={id} id="item">
              <img src={img} alt="anime poster" />
              <p>{title}</p>
              <button className="add" onClick={() => addToWatchlist(id)}>
                Add to Watchlist
              </button>
            </div>
          );
        })}
      </div>
      <p>And many more...</p>
      <h1>Your Watchlist </h1>
      <div id="container">
        {watchlist.map((a) => {
          const { id, img, title } = a;
          return (
            <div key={id} id="item">
              <img src={img} alt="anime poster" />
              <p>{title}</p>
              <button
                className="remove"
                onClick={() => removeFromWatchlist(id)}
              >
                Remove from Watchlist
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
