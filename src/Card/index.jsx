const Card = ({ id, img, title, children }) => {
  return (
    <div key={id} id="item">
      <img src={img} alt="anime poster" />
      <p>{title}</p>
      {children}
    </div>
  );
};

export default Card;
