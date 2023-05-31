import React from "react";
import { connect } from "react-redux";
import CameL from "./Camel";
import { ImgAC,moduleAC,stateAC,clearAC } from "../../../redux/honey-reducer";



class CamelContainer extends React.Component{
  componentDidUpdate(prevProps,prevState){
    if (this.props.camel!== prevProps.camel) {
      this.setState(this.props.camel);
    }
  }

  render() {
    return (
      <>
        <CameL  {...this.props}/>
      </>
    );
  }
}



const mapStateToProps=(state)=>{
  return{
    camel:state.camel,
  }
}
export default connect(mapStateToProps,{ImgAC,moduleAC,stateAC,clearAC})(CamelContainer);
