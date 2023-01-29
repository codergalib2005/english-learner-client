import React from 'react';
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../components/shared/Header/Header";
import { poets } from "../fakeData/poets";

const Poets: React.FC = () => {

    return (
        <div className='poet_container'>
            <Header />
            <div className='birds_pages'>
                <div>
                {poets.map((poet: any) => (
                    <motion.div
                        whileDrag={{ scale: 1.1 }}
                        whileHover={{ scaleY: 1.1 }}
                        whileTap={{ scale: 0.8 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        key={poet._id}
                    // className=""
                    >
                        <div className='poet_container_div'>
                            <div className='poet_container_header'>
                                <Image
                                    className="card_img"
                                    src={poet.image}
                                    alt=""
                                    width={300}
                                    height={300}
                                />
                                <h2>{poet.name}</h2>
                                <h4>Born: {poet.birthyear}</h4>
                            </div>
                            <div className='poet_container_footer'>
                                <h3>Birthplace: {poet.birthplace}</h3>
                                <h5>Famouspoem: {poet.famouspoem}</h5>
                                <p>{poet.description}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
                </div>
                <div className="addsSide">adds Side</div>
            </div>
        </div>
    );
};

export default Poets;