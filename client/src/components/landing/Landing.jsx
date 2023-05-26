import { Link } from "react-router-dom";
import world from "../../assets/world.mp4";
import "./Landing.css";

import AOS from "aos";
import "aos/dist/aos.css";

import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/action";


AOS.init();

const Landing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
    // eslint-disable-next-line
  }, [dispatch]);
  return (
    <div className="container__landing">
      <video src={world} autoPlay loop muted />
      <div className="bg-landing">
      <h1 data-aos="zoom-in-down" data-aos-duration="3000">Countries</h1>
        <Link to="/home" className="style__link" data-aos="zoom-in" data-aos-duration="3000">Iniciar</Link>
      </div>
    </div>
  );
};

export default Landing;
