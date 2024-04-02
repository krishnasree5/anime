const Header = ({ fetchAnime }) => {
  const TopAnimeUrl = "https://api.jikan.moe/v4/top/anime";
  const searchUrl = "https://api.jikan.moe/v4/anime?q=";

  return (
    <div id="header">
      <div id="logo">
        <h1 onClick={() => fetchAnime(TopAnimeUrl)}>Anime Companion</h1>
      </div>
      <div>
        <input id="search" type="text" placeholder="Search" />
        <button
          type="button"
          onClick={() =>
            fetchAnime(searchUrl + document.getElementById("search").value) +
            "&sfw"
          }
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;
