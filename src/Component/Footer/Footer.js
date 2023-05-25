import React from "react";
import "../../Common/style/style.css";
import { NavLink } from "react-router-dom";
import { footerImg } from "../../Common/Data";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer_menu">
          <span><a href="https://t.me/Domick_Shamana"><img src={footerImg.telegram}/></a></span>
          <span><a href='https://wa.me/qr/AQZJEINBO5F5E1'><img src={footerImg.whatsUp}/></a></span>
      </div>
    </div>
  );
};
export default Footer;
