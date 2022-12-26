import Image from "next/image";
import { Rating } from "react-simple-star-rating";
import { AiOutlineShoppingCart } from "react-icons/ai";

type explore_cardType = {
  id: number;
  title: string;
  instractor: string;
  rating: number;
  price: number;
  status: boolean;
  img: string;
};

const Explore_card: React.FC<explore_cardType> = (props: explore_cardType) => {
  const { id, title, instractor, rating, price, status, img } = props;
  return (
    <div className="explore_card">
      <div className="explore_card_img">
        <Image src={img} alt="" fill />
      </div>
      <div className="card_texts">
        <div className="title_ins">
          <h2>{title}</h2>
          <p> by {instractor}</p>
        </div>
        <Rating
          style={{ margin: "5px 0px" }}
          readonly
          size={23}
          initialValue={rating}
        />
        <div className="bar"></div>
        <div className="Price_cart_button">
          <span>${price}</span>
          <div className="">
            <button className="preview">Preview</button>
            <button className="cart">
              <AiOutlineShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore_card;
