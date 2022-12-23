const BirdCartLoader: React.FC = () => {
  return (
    <div className="cards">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
      <div key={index} className="card is-loading">
        <div className="image"></div>
        <div className="content">
          <h2></h2>
        </div>
      </div>
      ))}
    </div>
  );
};

export default BirdCartLoader;
