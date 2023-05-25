import React from "react";
import { NavLink } from "react-router-dom"
import '../../Common/style/style.css'
import { commonImg } from "../../Common/Data";

const Header=()=>{
    return(
        <div className="header">
        <div className="logo">
        <NavLink to={`/mainPage`}><div className="logoImg"><img src={commonImg.logo}/></div></NavLink>
          
        </div>
        <div className="head_menu">
        
       <div className="menu_container"> 
       <NavLink to={`/contact`}><div className="btn"><button >Контакты</button></div> </NavLink>
       </div>
       
          <div className="menu_container"><NavLink to={`/product`}>
            <div className="btn"><button >Продукция</button></div>
            </NavLink></div>
          <div className="menu_container"><NavLink to={`/aboutUs`}><div className="btn"><button >О нас</button></div></NavLink></div>

          <div className="menu_container"> 
       <NavLink to={`/faq`}><div className="btn"><button >FAQ</button></div> </NavLink>
       </div>
        </div>

        
      </div>
    )
}
export default Header;