import Header from "../components/shared/Header/Header";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { ImCopy } from "react-icons/im";
import Image from "next/image";

const BlogDetails: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="blog_details-container">
        <div className="blog_details-info">
          <div className="blog_rout_details">
            <p>
              Home page &gt; Newest &gt; <span>Real Estate Insight</span>
            </p>
          </div>
          <div className="blog_details">
            <div className="blog_details-time">
              <span>Real Estate Insight | 2 Mins Ago</span>
            </div>
            <div className="blog_details-title">
              <h1>
                Intoducing Noha Compelete: Sell, <br /> Buy and Close Seamlessly
              </h1>
              <span>
                by <span>Zack Jeniel</span>
              </span>
            </div>
            <div className="blog_details-share">
              <span className="title">Share this article</span>
              <div className="socail-icon">
                <span>
                  <AiFillFacebook /> Share
                </span>
                <span>
                  <AiOutlineTwitter /> Tweet
                </span>
                <span>
                  <AiFillLinkedin /> Share
                </span>
                <span>
                  <ImCopy /> Copy
                </span>
              </div>
            </div>
            <div>
              <Image
                className="blog_details-image"
                src="https://img.freepik.com/premium-photo/developing-programmer-development-website-design-coding-technologies_18497-1019.jpg"
                alt=" "
                width={100}
                height={100}
              />
              <p>
                Repellendus facilis blanditiis in. Quae nihil molestiae eveniet
                minima ex voluptatibus architecto accusamus voluptatem eligendi
                cumque enim hic minus culpa aliquam repellat tempore odio, quia
                harum consequuntur? Sed omnis expedita deleniti sequi esse
                blanditiis perspiciatis veniam dolore, adipisci fugiat delectus!
                Cupiditate ad optio asperiores, iste, accusantium debitis labore
                sint maxime minima possimus expedita, deleniti alias numquam
                ipsum impedit odio eveniet et aspernatur ducimus nemo deserunt
                ex voluptas sequi doloribus. Suscipit laboriosam esse minima
                libero? Blanditiis autem mollitia cum velit vel nobis magni
                eius, placeat perspiciatis similique ullam repellat cupiditate
                nostrum sequi odio facere et magnam eveniet quisquam dolore quod
                necessitatibus alias dolorum dolorem. Dolorem nisi numquam
                voluptate, eos deleniti neque minus obcaecati! Tempore
                asperiores consectetur tenetur minus aliquid in minima quibusdam
                aperiam nobis ipsam porro fuga facilis, molestiae dolorem
                inventore a magni quidem deserunt, accusantium officia! Iure
                neque sunt officia voluptatibus consequatur nulla laboriosam
                debitis assumenda vero ipsam.
              </p>
              <div className="blog_detail-box">
                <h5>we know that life</h5>
                <p>
                  Numquam quos nihil aliquid aliquam corrupti nam sed cupiditate
                  tenetur, officia officiis ducimus aspernatur voluptates?
                  Minima error rerum quidem unde ducimus a accusantium voluptas
                  soluta! Reprehenderit natus vero odio sapiente quis, commodi
                  maxime incidunt enim illum, recusandae minima explicabo, vel
                  nulla harum corrupti. Repudiandae doloribus temporibus
                  consequatur animi quas adipisci dolorum eum. Quas omnis nulla
                  obcaecati cumque molestias odio dolorum autem et dolores,
                  officia aut repellat? Amet deleniti, quod esse atque expedita
                  hic nesciunt est eveniet?
                </p>
              </div>
              <div className="blog_detail-box">
                <h5>Remember Reguler Maintance</h5>
                <p>
                  Repudiandae doloribus temporibus consequatur animi quas
                  adipisci dolorum eum. Quas omnis nulla obcaecati cumque
                  molestias odio dolorum autem et dolores, officia aut repellat?
                  Amet deleniti, quod esse atque expedita hic nesciunt est
                  eveniet?
                </p>
              </div>
              <Image
                className="blog_details-image"
                src="https://img.freepik.com/free-photo/programer-coding-laptop-sitting-down-desk-with-computer-screens-parsing-code-software-agency-software-developer-compiling-algorithms-with-cloud-programers-working-background_482257-43993.jpg"
                alt=" "
                width={100}
                height={100}
              />
              <div className="blog_detail-box">
                <h5>Habe s Packing plan</h5>
                <p>
                  Repudiandae doloribus temporibus consequatur animi quas
                  adipisci dolorum eum. Quastemporibus consequatur animi quas
                  adipisci dolorum eum. Quastemporibus consequatur animi quas
                  adipisci dolorum eum. Quas omnis nulla obcaecati cumque
                  molestias odio dolorum autem et dolores, officia aut repellat?
                  Amet deleniti, quod esse atque expedita hic nesciunt est
                  eveniet?
                </p>
              </div>
              <div className="blog_detail-box">
                <h5>Thing About Moving Insurance</h5>
                <p>
                  Numquam quos nihil aliquid aliquam corrupti nam sed cupiditate
                  tenetur, officia officiis ducimus aspernatur voluptates?
                  Minima error rerum quidem unde ducimus a accusantium voluptas
                  soluta! Reprehenderit natus vero odio sapiente quis, commodi
                  maxime incidunt enim illum, recusandae minima explicabo, vel
                  nulla harum corrupti. Repudiandae doloribus temporibus
                  consequatur animi quas adipisci dolorum eum. Quas omnis nulla
                  obcaecati cumque molestias odio dolorum autem et dolores,
                  officia aut repellat? Amet deleniti, quod esse atque expedita
                  hic nesciunt est eveniet?
                </p>
              </div>
              <div className="blog_detail-box">
                <h5>Thing About Moving Insurance</h5>
                <p>
                  Repudiandae doloribus temporibus consequatur animi quas
                  adipisci dolorum eum. Quas omnis nulla obcaecati cumque
                  molestias odio dolorum autem et dolores, officia aut repellat?
                  Amet deleniti, quod esse atque expedita hic nesciunt est
                  eveniet?
                </p>
              </div>
            </div>
            <div className="blog_details-tags">
              <h5>Tags</h5>
              <button className="tags_btn-first">Real Estate Insight</button>
              <button className="tags_btn-secound">Sell</button>
            </div>
            <div className="blog_details_share_bottom">
              <span className="title">Share this article</span>
              <div className="socail-icon">
                <span>
                  <AiFillFacebook /> Share
                </span>
                <span>
                  <AiOutlineTwitter /> Tweet
                </span>
                <span>
                  <AiFillLinkedin /> Share
                </span>
                <span>
                  <ImCopy /> Copy
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="blog_addsSide">adds Side</div>
      </div>
    </div>
  );
};

export default BlogDetails;
