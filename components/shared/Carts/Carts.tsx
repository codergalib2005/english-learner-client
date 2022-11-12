import Image from "next/image";
import Link from "next/link";
import { services } from "../../../fakeData/services";

export default function Carts() {
  return (
    <div className="carts">
      {services.map((service) => (
        <div className="cart">
          <Link className="cart-link" href="/">
            <div className="img-ring"></div>
            <Image
              className="cart-img"
              src={service.img}
              alt=""
              width={100}
              height={100}
            />
            <h4>{service.name}</h4>
          </Link>
          <p>{service.topic}</p>
        </div>
      ))}
    </div>
  );
}
