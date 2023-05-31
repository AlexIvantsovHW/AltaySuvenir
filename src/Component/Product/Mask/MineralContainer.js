import React from "react";
import { connect } from "react-redux";
import MasK from "./MasK";
import { ImgAC,moduleAC,stateAC,clearAC } from "../../../redux/mask-reducer";



class MaskContainer extends React.Component{
  componentDidUpdate(prevProps,prevState){
    if (this.props.mask!== prevProps.mask) {
      this.setState(this.props.mask);
    }
  }

  render() {
    return (
      <>
        <MasK  {...this.props}/>
      </>
    );
  }
}



const mapStateToProps=(state)=>{
  return{
    mask:state.mask,
  }
}
export default connect(mapStateToProps,{ImgAC,moduleAC,stateAC,clearAC})(MaskContainer);
