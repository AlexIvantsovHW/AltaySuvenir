import React from "react";
import { NavLink } from "react-router-dom"
import '../../Common/style/style.css'
import { commonImg } from "../../Common/Data";
import { connect } from "react-redux";
import { clearAC } from "../../redux/product-reducer";


class Header extends React.Component{
  componentDidUpdate(prevProps,prevState){
    if (this.props.product!== prevProps.product) {
      this.setState(this.props.product);
    }
  }
render(){
  return(
      
    <div className="header">
    <div className="logo">
    <NavLink to={`/mainPage`}><img src={commonImg.logo} onClick={()=>{this.props.clearAC(0)}}/></NavLink>    
    </div>
    <div className="head_menu">
   <NavLink to={`/contact`}><button onClick={()=>{this.props.clearAC(0)}}>Контакты</button></NavLink>
   <NavLink to={`/product`}><button onClick={()=>{this.props.clearAC(0)}}>Продукция</button></NavLink>
   <NavLink to={`/aboutUs`}><button onClick={()=>{this.props.clearAC(0)}}>О нас</button></NavLink>
   <NavLink to={`/faq`}><button onClick={()=>{this.props.clearAC(0)}}>FAQ</button></NavLink>
   
    </div>
  </div>
)
}
}

const mapStateToProps=(state)=>{
  return{
    product:state.product,
  }
}
export default connect(mapStateToProps,{clearAC})(Header);