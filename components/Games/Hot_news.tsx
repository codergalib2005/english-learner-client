import Image from "next/image";
import React from "react";

const Hot_news = () => {
  const news = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo impedit ipsam laboriosam iure nulla commodi ut, dolorem a possimus, doloremque labore eligendi? ",
      img: "https://i.ibb.co/6WJFtTQ/3777183.jpg",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo impedit ipsam laboriosam iure nulla commodi ut, dolorem a possimus, doloremque labore eligendi? ",
      img: "https://i.ibb.co/6WJFtTQ/3777183.jpg",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo impedit ipsam laboriosam iure nulla commodi ut, dolorem a possimus, doloremque labore eligendi?",
      img: "https://i.ibb.co/6WJFtTQ/3777183.jpg",
    },
  ];
  return (
    <div className="hot_news_container">
      <h4>Hottets news!</h4>
      <div className="hot_news_component">
        <div className="card_image">
          <Image
            style={{ borderRadius: "5px 5px 0px 0px" }}
            src="https://i.ibb.co/BZjvWHb/3820362.jpg"
            alt=""
            fill
          />
        </div>
        <div className="news_card">
          {news.map((single_news, index) => (
            <div className="news_card_child">
              <div className="news_card_content">
                <div>
                  <Image
                    style={{ borderRadius: "5px 5px 0px 0px" }}
                    src={single_news.img}
                    alt=""
                    width={180}
                    height={130}
                  />
                </div>
                <div className="news_text">
                  <h5>{single_news.title}</h5>
                  <p>{single_news.des}</p>
                  <button className="news_more_button">Show more</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hot_news;
