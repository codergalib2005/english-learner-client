import Image from "next/image";
import Header from "../components/shared/Header/Header";
import { birds } from "../fakeData/birds";
import eagle from "../public/images/birds/eagle.jpg";

const Birds: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="birds_pages">
        <div className="birds_pages_info">
          {birds.map((bird) => ( 
            <div key={bird.id} className="birds_card">
              <Image
                className="card_img"
                src={bird.img}
                alt=""
                width={100}
                height={100}
              />
              <h3>{bird.name}</h3>
            </div>
          ))}
        </div>
        <div className="addsSide">adds Side</div>
      </div>
    </div>
  );
};

export default Birds;
