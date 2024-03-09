import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const anilist = [
  {
    id: 1,
    img: "https://cdn.myanimelist.net/images/anime/1517/92767l.jpg",
    title: "Tokyo Ghoul",
  },
  {
    id: 2,
    img: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
    title: "Attack On Titan",
  },
  {
    id: 3,
    img: "https://cdn.myanimelist.net/images/anime/1129/135442.jpg",
    title: "Cyberpunk: Edgerunners",
  },
  {
    id: 4,
    img: "https://cdn.myanimelist.net/images/anime/10/77957.jpg",
    title: "Erased",
  },
  {
    id: 5,
    img: "https://cdn.myanimelist.net/images/anime/4/75509.jpg",
    title: "Another",
  },
  {
    id: 6,
    img: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg",
    title: "Jujutsu Kaisen",
  },
  {
    id: 7,
    img: "https://cdn.myanimelist.net/images/anime/1458/113542.jpg",
    title: "Link Click",
  },
  {
    id: 8,
    img: "https://cdn.myanimelist.net/images/anime/9/9453.jpg",
    title: "Death Note",
  },
  {
    id: 9,
    img: "https://cdn.myanimelist.net/images/anime/3/10243.jpg",
    title: "Serial Experiments Lain",
  },
  {
    id: 10,
    img: "https://cdn.myanimelist.net/images/anime/5/29347.jpg",
    title: "Ergo Proxy",
  },
];

const App = () => {
  return (
    <>
      <h1>My Anime List</h1>
      <div id="container">
        {anilist.map((a) => {
          return <Card img={a.img} title={a.title} key={a.id} />;
        })}
      </div>
      <p>And many more...</p>
    </>
  );
};

const Card = ({ img, title }) => {
  return (
    <div id="item">
      <img src={img} alt="anime poster" />
      <p>{title}</p>
    </div>
  );
};

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
