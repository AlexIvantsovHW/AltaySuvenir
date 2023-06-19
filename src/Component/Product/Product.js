import React from "react";
import './Product.css'
import { NavLink} from "react-router-dom";
import { commonImg } from "../../Common/Data";



class Product extends React.Component{
   render(){
    return(
      <div className="Product"> 
  <div className="productContainer">
  
  <div className="card">
    <NavLink to='/music'>
      <div className="front"><img src={commonImg.music}/></div>
      <div className="back">Музыкальные инструменты</div>
    </NavLink> 
  </div>

  <div className="card">
    <NavLink to='/leather'>
      <div className="front"><img src={commonImg.leather}/>  </div>
      <div className="back">Изделия из кожи</div>
    </NavLink> 
  </div>

  <div className="card">
    <NavLink to='/totem'>
     <div className="front"><img src={commonImg.totem}/></div>
     <div className="back">Тотемы</div>
    </NavLink> 
  </div>
  
  <div className="card">
    <NavLink to='/obereg'>
      <div className="front"><img src={commonImg.kukla}/></div>
      <div className="back">Куклы,обереги и подвески</div>
    </NavLink> 
  </div>

  <div className="card">
    <NavLink to='/tea'>
      <div className='front'><img src={commonImg.honey}/></div>
      <div className="back">Чай<br/>Масла<br/>Мёд<br/>Орехи<br/>Добавки</div>
    </NavLink> 
  </div>

  <div className="card">
    <NavLink to='/camel'>
      <div className='front'><img src={commonImg.shoes}/></div>
      <div className="back">Изделия из верблюжей шерсти</div>    
    </NavLink>
  </div>

  <div className="card">
    <NavLink to='/mineral'>
      <div className="front"><img src={commonImg.mineral}/></div>
      <div className="back">Изделия из минералов</div>    
    </NavLink> 
  </div>

  <div className="card">
    <NavLink to='/mask'>
      <div className="front"><img src={commonImg.mask}/></div>
      <div className="back">Маски</div>
    </NavLink> 
    
  </div>
  </div>

    </div>
  )
   }
}

export default Product;