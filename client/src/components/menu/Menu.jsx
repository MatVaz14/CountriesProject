import "./Menu.css";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Menu = ({activate, closed}) => {
	return (
		<>
		{activate &&
		<div className="container_menu" data-aos="zoom-in-left">
			<div className="containerMenu_option"><h2>Countries</h2></div>
			<div className="containerMenu_option animationOption"><h2>Crear Actividad</h2></div>
			<div className="containerMenu_option animationOption2"><h2><a className="styleLinkPortfolio" href="https://matvazportfolio.vercel.app/" target="_blank">Mi Portafolio</a></h2></div>
		</div>
		}
		</>
	)
}

export default Menu;