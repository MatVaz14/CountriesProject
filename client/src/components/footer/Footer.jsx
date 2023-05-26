import AOS from "aos";
import "aos/dist/aos.css";

import "./Footer.css";

import React, { useEffect } from "react";

AOS.init();

const Footer = () => {
   return(
     <footer className="section_footer">
      <h2>Desarrollo y Diseño - Matias Vazquez 2023</h2>
    </footer>
    );
 }

export default Footer;
