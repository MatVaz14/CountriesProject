import "./Card.css";
import React, { useState } from "react";

import Modal from "../modal/Modal.jsx";

const Card = ({ tag, name, flag, continent, population, capital, region, subregion, timezones, map, area, Activities }) => {

  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(true)
  }
  return (
    <>
    <div className="container__card">
        <img className="style__flag" src={flag} alt="flag" width="150px" height="120px" onClick={handleClick}/>
    </div>
    <Modal estado={active} 
        nuevoEstado={setActive} 
        name={name}  
        tag={tag}
        continent={continent} 
        population={population} 
        capital={capital} 
        region={region} 
        subregion={subregion} 
        timezones={timezones} 
        map={map} 
        area={area}
        Activities={Activities}
        >
      <img className="style__flag" src={flag} alt="flag" width="100%" height="240px"/>
    </Modal>
    </>
  );
};

export default Card;
