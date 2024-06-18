import { Link, useNavigate } from "react-router-dom";

const Header = ({ fetchAnime }) => {
  const TopAnimeUrl = "https://api.jikan.moe/v4/top/anime";
  const searchUrl = "https://api.jikan.moe/v4/anime?q=";
  const navigate = useNavigate();

  const handleLogoClick = () => {
    fetchAnime(TopAnimeUrl);
    navigate("");
  };

  return (
    <div id="header">
      <div id="logo">
        <h1 onClick={handleLogoClick}>Anime Companion</h1>
      </div>

      <div id="right">
        <div>
          <input id="search" type="text" placeholder="Search" />
          <button
            id="search-button"
            type="button"
            onClick={() =>
              fetchAnime(searchUrl + document.getElementById("search").value) +
              "&sfw"
            }
          >
            Search
          </button>
        </div>

        <div>
          <Link to="/watchlist">
            <button type="button" id="watchlist-button">
              Watchlist
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
