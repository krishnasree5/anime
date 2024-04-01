import Card from "../Card";

const WatchList = ({ watchlist, removeFromWatchlist }) => {
  return (
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
  );
};

export default WatchList;
