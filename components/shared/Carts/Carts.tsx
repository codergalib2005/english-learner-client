import Image from "next/image";
import Link from "next/link";
import React from "react";
import { services } from "../../../fakeData/services";

const Carts: React.FC = () => {
  return (
    <div className="carts">
      {services.map((service) => (
        <div key={service.id} className="cart">
          <Link className="cart-link" href="/">
            <div className="img-ring">
            <Image
              className="cart-img"
              src={service.img}
              alt=""
              width={100}
              height={100}
            />
            </div>
            <h4>{service.name}</h4>
          </Link>
          <p>{service.topic}</p>
        </div>
      ))}
    </div>
  );
};
export default Carts;