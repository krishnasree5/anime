import Card from "../Card";

const HomePage = ({ anilist, addToWatchlist }) => {
  return (
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
  );
};

export default HomePage;
