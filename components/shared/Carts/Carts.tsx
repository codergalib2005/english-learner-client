import Image from "next/image";
import Link from "next/link";
import React from "react";
import { services } from "../../../fakeData/services";
import bookimg from "../../../public/images/book.jpeg";
import { BsStopwatch } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import { BsFillBookmarkFill } from "react-icons/bs";
import { Tooltip } from 'antd';

const Carts: React.FC = () => {
  return (
    <div className="product-ards">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_, index) => (
        <div key={index} className="product-card">
          <div className="badge">Hot</div>
          <div className="product-tumb">
            <Image
              className="img"
              src={bookimg}
              alt=""
              width={100}
              height={100}
            />
          </div>
          <div className="product-details">
            <span className="product-catagory">Women,bag</span>
            <div className="product-tittle">
              <h4>
                <a href="">Women leather bag</a>
              </h4>
              <Tooltip color="#2db7f5" title="Bookmark Crouses">
              <span>
                <BsFillBookmarkFill />
              </span>
              </Tooltip>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
              possimus nostrum!
            </p>
            <div className="product-bottom-details">
              <div className="product-price">
                <Tooltip color="#2db7f5" title="Crouse compeleted time">
                <span>
                  <BsStopwatch className="icons" /> 24 Hours
                </span>
                </Tooltip>
              </div>
              <div className="product-price">
              <Tooltip color="#2db7f5" title="Crouses Language">
                <span>
                  <TfiWorld className="icons" /> Language
                </span>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Carts;
// <div key={service.id} className="cart">
//   <Link className="cart-link" href="/">
//     <div className="img-ring">
//     <Image
//       className="cart-img"
//       src={service.img}
//       alt=""
//       width={100}
//       height={100}
//     />
//     </div>
//     <h4>{service.name}</h4>
//   </Link>
//   <p>{service.topic}</p>
// </div>
