import Explore_card from "./Explore_card";

const Explore_cards: React.FC = () => {
  const cards = [
    {
      id: 1,
      title: "Hello something",
      instractor: "Gobindo",
      rating: 4,
      price: 23,
      status: true,
      img: "https://i.ibb.co/XCdhnRQ/1-3.png",
    },
    {
      id: 2,
      title: "Hello Brother",
      instractor: "Gobindo",
      rating: 4,
      price: 543,
      status: false,
      img: "https://i.ibb.co/XCdhnRQ/1-3.png",
    },
    {
      id: 3,
      title: "Interactive Cv",
      instractor: "Anis",
      rating: 4,
      price: 53,
      status: true,
      img: "https://i.ibb.co/XCdhnRQ/1-3.png",
    },
    {
      id: 4,
      title: "Video Editing",
      instractor: "Rokon",
      rating: 4,
      price: 40,
      status: true,
      img: "https://i.ibb.co/XCdhnRQ/1-3.png",
    },
    {
      id: 5,
      title: "Tometo Color",
      instractor: "Gopal",
      rating: 4,
      price: 25,
      status: false,
      img: "https://i.ibb.co/XCdhnRQ/1-3.png",
    },
  ];

  return (
    <div className="explore_card_component">
      <h3 className="head_title_com">Read blogs and growth your speaking ! </h3>
      <div className="explore_cards">
        {cards.map((card) => (
          <Explore_card {...card} key={card.id} />
        ))}
      </div>
    </div>
  );
};

export default Explore_cards;
