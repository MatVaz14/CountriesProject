import "./Menu.css";

import AOS from "aos";
import "aos/dist/aos.css";

import { Link } from "react-router-dom";

AOS.init();

const Menu = ({ activate, closed }) => {
  return (
    <>
      {activate && (
        <div className="container_menu" data-aos="zoom-in-left">
          <div className="containerMenu_option">
            <h2>Countries</h2>
          </div>
          <div className="containerMenu_option animationOption">
            <h2>
              <Link className="styleLinkPortfolio" to="/createActivity">
                Crear Actividad
              </Link>
            </h2>
          </div>
          <div className="containerMenu_option animationOption2">
            <h2>
              <a
                className="styleLinkPortfolio"
                href="https://matvaz.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Mi Portafolio
              </a>
            </h2>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
