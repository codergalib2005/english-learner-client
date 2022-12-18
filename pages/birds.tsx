import Image from "next/image";
import Header from "../components/shared/Header/Header";
import { motion } from "framer-motion";
import { useGetBirdsQuery } from "../redux/feature/birds/birdApi";
import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";
import BirdCartLoader from "../components/loader/BirdCartLoader";
import Error from "../components/loader/Error";

const Birds: React.FC = () => {
  const router = useRouter();
  const { page, limit } = router.query || {};
  const { data, isSuccess, isLoading, isError } = useGetBirdsQuery({
    page: page || 1,
    limit: limit || 20,
  });

  const handlePageClick = (e: any) => {
    if (limit) {
      router.push(`/birds?page=${e.selected + 1}&limit=${limit}`);
    } else {
      router.push(`/birds?page=${e.selected + 1}`);
    }
  };
  const changeLimit = (e: any) => {
    if (page) {
      router.push(`/birds?page=${page}&limit=${e.target.value}`);
    } else {
      router.push(`/birds?limit=${e.target.value}`);
    }
  };

  let content = null;
  if (true) content = <BirdCartLoader />;
  if (isError) content = <Error massege="404 Page Not Found" />;
  if (isSuccess && data?.birds?.length === 0) content = <Error massege="No Data" />;
  if (isSuccess && data?.birds?.length > 0) {
    content = (
      <div>
        <div className="birds_pages_info">
            {data.birds.map((bird: any) => (
              <motion.div
                key={bird._id}
                whileDrag={{ scale: 1.1 }}
                whileHover={{ scaleY: 1.1 }}
                whileTap={{ scale: 0.8 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="birds_card"
              >
                <Image
                  className="card_img"
                  src={bird.image}
                  alt={bird.name}
                  width={100}
                  height={100}
                />
                <h3>{bird.name}</h3>
              </motion.div>
            ))}
          </div>
          <div className="birds_paginations">
            <div className="birds_pagination_counter noselect">
              <ReactPaginate
                breakLabel="..."
                nextLabel="Next →"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={data?.totalPages}
                previousLabel="← Previous"
                // renderOnZeroPageCount={null}
              />
            </div>
            <div className="pagination_result">
              <select
                defaultValue={20}
                disabled={!(isSuccess && data?.birds?.length > 0)}
                onChange={(e) => changeLimit(e)}
                name="birds_count"
                id=""
              >
                <option value="20">20</option>
                <option value="40">40</option>
                <option value="60">60</option>
                <option value="80">80</option>
                <option value="100">100</option>
              </select>
              <p>
                Results: {data?.currentPage}-{limit || 20} of{" "}
                {data?.totalBirds || "00"}
              </p>
            </div>
          </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="birds_pages">
        <div style={{ width: "100%" }} className="birds">
        {content}
        </div>
        <div className="addsSide">adds Side</div>
      </div>
    </div>
  );
};

export default Birds;
