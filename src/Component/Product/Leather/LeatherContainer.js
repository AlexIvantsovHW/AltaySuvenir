import React from "react";
import { connect } from "react-redux";
import Leather from "./Leather";
import { ImgAC,moduleAC,stateAC,clearAC } from "../../../redux/leather-reducer";



class LeatherContainer extends React.Component{
  componentDidUpdate(prevProps,prevState){
    if (this.props.leather!== prevProps.leather) {
      this.setState(this.props.leather);
    }
  }

  render() {
    return (
      <>
        <Leather  {...this.props}/>
      </>
    );
  }
}



const mapStateToProps=(state)=>{
  return{
    leather:state.leather,
  }
}
export default connect(mapStateToProps,{ImgAC,moduleAC,stateAC,clearAC})(LeatherContainer);
