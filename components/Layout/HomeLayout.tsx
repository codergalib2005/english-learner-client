import InformationSide from '../shared/InformationSide';
import AddsSide from '../shared/AddsSide';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';
import React from 'react';

type layoutChildren = {
    children: React.ReactNode;
};
const HomeLayout = ({ children }: layoutChildren) => {
    return (
        <div className='home_layout_main_wrapper' >
            {/* Keyword Side or Left Side */}
            <div className='home_layout_keyword_sidebar'>
                <InformationSide />
            </div>
            {/* Main Content */}
            <div className="content_layout">
                <Header />
                <div className='content_layout_wrapper'>
                    {/* Content */}
                    <main className='content_box_parent'>
                        {children}
                    </main>
                    {/* Right Side or Adds Side */}
                    <div className='content_box_ads_side'>
                        <AddsSide />
                    </div>
                </div>
                <Footer />
            </div>
        </div >
    )
}
export default HomeLayout;