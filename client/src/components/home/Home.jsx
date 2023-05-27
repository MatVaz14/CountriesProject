import React, { useState } from "react";
import "./Home.css";
import Cards from "../cards/Cards.jsx";
import Search from "../search/Search.jsx";
import Filters from "../filters/Filters.jsx";
import Menu from "../menu/Menu.jsx";
import videoContinent from "../../assets/continents.mp4"

import { GiHamburgerMenu } from "react-icons/gi";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <section className="sectionContainer__home">
    <div className="backgroundSectionHome">
      <video className="videoContinents" src={videoContinent} autoPlay muted loop data-aos="fade-down"
     data-aos-easing="linear"/>
    </div>
      <div className="container__home">
        <div className="sectionOne">
          <div className="sectionOne_sec1"><Filters /></div>
          <div className="sectionOne_sec2" data-aos="fade-up"
     data-aos-duration="3000"><Search /></div>
          <div className="sectionOne_sec3" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
     <div className="containerMenu">
      <Menu activate={showMenu}/>
     </div>
     <GiHamburgerMenu className="style-burger" onClick={showMenu ? () => setShowMenu(false) : () => setShowMenu(true)}/>
     </div>
        </div>
        <div className="sectionTwo">
          <Cards />
        </div>
      </div>
    </section>
  );
};

export default Home;
