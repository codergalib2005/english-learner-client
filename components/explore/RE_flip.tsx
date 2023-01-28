import React from "react";
import HTMLFlipBook from "react-pageflip";
import image1 from "../../public/images/animals/wiried.jpg";
import image2 from "../../public/images/animals/large.jpg";
import Image from "next/image";

const RE_flip: React.FC = (props: any) => {
  const flipData = [
    {
      albumId: 1,
      id: 1,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    },
    {
      albumId: 1,
      id: 2,
      title: "reprehenderit est deserunt velit ipsam",
      url: "https://via.placeholder.com/600/771796",
      thumbnailUrl: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
    },
    {
      albumId: 1,
      id: 3,
      title: "officia porro iure quia iusto qui ipsa ut modi",
      url: "https://via.placeholder.com/600/24f355",
      thumbnailUrl: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
    },
    {
      albumId: 1,
      id: 4,
      title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      url: "https://via.placeholder.com/600/d32776",
      thumbnailUrl: "https://i.dummyjson.com/data/products/6/thumbnail.png",
    },
    {
      albumId: 1,
      id: 5,
      title: "natus nisi omnis corporis facere molestiae rerum in",
      url: "https://via.placeholder.com/600/f66b97",
      thumbnailUrl: "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
    },
    {
      albumId: 1,
      id: 6,
      title: "accusamus ea aliquid et amet sequi nemo",
      url: "https://via.placeholder.com/600/56a8c2",
      thumbnailUrl: "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
    },
  ];
  return (
    <div>
      <div className="main-page-container">
        <HTMLFlipBook
          showCover={true}
          width={300}
          height={340}
          style={{ margin: " auto" }}
        >
          {/* <img
            src="https://i.ibb.co/FJZCjSD/modern-wave-curve-abstract-presentation-background-pack-1142-17007.jpg"
            alt=""
          /> */}
          {flipData.map((el, i) => (
            <div className="demoPage" key={el.id}>
              <img src={el.thumbnailUrl} alt="" width={300} height={340} />
            </div>
          ))}
        </HTMLFlipBook>
      </div>
    </div>
  );
};

export default RE_flip;
