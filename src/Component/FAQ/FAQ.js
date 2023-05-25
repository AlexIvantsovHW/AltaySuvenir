import React from "react";
import './FAQ.css'
import { NavLink } from "react-router-dom";
import { commonImg } from "../../Common/Data";


const FAQ=()=>{
    return(
        <div className="FAQ">
          <div className="faqContainer">
            <div className="faqImg">
                <img src={commonImg.FAQ}/>
            </div>

            <div className="faqText">
            <h4>Часто задаваемые вопросы</h4>
            <NavLink to='/order'><h2>Как сделать Заказ?</h2></NavLink>
           <NavLink to='/deliver'><h2>Какие есть способы доставки?</h2></NavLink> 
            </div>
          </div>
              </div>
    )
}
export default FAQ;