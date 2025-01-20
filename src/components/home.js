import React from 'react';
import Menu from './Menu/menu';
import LiveMatches from './LiveMatches';
import ShowNews from './NewsCarousel/NewsCarousel';
import BannerList from './Destaques/BannerList';
import Footer from './footer/footer';
import Sponsors from './Sponsors/Sponsors';


const Home = () => {
    return (
        <div className="home-container">
            <Menu/>
            <LiveMatches campeonatoId={2} />
            <ShowNews/>
            <LiveMatches campeonatoId={2} />
            <BannerList/>
            <Sponsors/>
            <Footer/>
        </div>
    );
};

export default Home;
