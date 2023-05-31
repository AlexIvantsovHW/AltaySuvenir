import React from "react";
import { connect } from "react-redux";
import Totems from "./Totem";
import { ImgAC,moduleAC,stateAC,clearAC } from "../../../redux/totem-reducer";



class TotemContainer extends React.Component{
  componentDidUpdate(prevProps,prevState){
    if (this.props.totem!== prevProps.totem) {
      this.setState(this.props.totem);
    }
  }

  render() {
    return (
      <>
        <Totems  {...this.props}/>
      </>
    );
  }
}



const mapStateToProps=(state)=>{
  return{
    totem:state.totem,
  }
}
export default connect(mapStateToProps,{ImgAC,moduleAC,stateAC,clearAC})(TotemContainer);
