import Card from "../Card";

const MainPage = ({ anilist, addToWatchlist }) => {
  return (
    <div id="outer-container">
      <h2>For You</h2>
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

export default MainPage;
