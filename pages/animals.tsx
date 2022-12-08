import Image from "next/image";
import Header from "../components/shared/Header/Header";
import { birds } from "../fakeData/birds";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

/* --------------------------------------------------------
-------------Style uses from _bird.scss file---------------
----------------------------------------------------------- */

const Animals: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="birds_pages">
        <div className="birds">
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
          <div className="birds_paginations">
            <div className="birds_pagination_counter">
              <span>
                <IoIosArrowBack />
              </span>
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>
              <span>7</span>
              <span>8</span>
              <span>9</span>
              <h5>.....</h5>
              <span>110</span>
              <span>
                <IoIosArrowForward />
              </span>
            </div>
            <div className="pagination_result">
                <select name="birds_count" id="">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              <p>Results: 1-5 of 324</p>
            </div>
          </div>
        </div>
        <div className="addsSide">adds Side</div>
      </div>
    </div>
  );
};

export default Animals;
