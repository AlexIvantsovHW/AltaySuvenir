import React from "react";
import { connect } from "react-redux";
import HoneY from "./HoneY";
import { ImgAC,moduleAC,stateAC,clearAC } from "../../../redux/honey-reducer";



class HoneyContainer extends React.Component{
  componentDidUpdate(prevProps,prevState){
    if (this.props.honey!== prevProps.honey) {
      this.setState(this.props.honey);
    }
  }

  render() {
    return (
      <>
        <HoneY  {...this.props}/>
      </>
    );
  }
}



const mapStateToProps=(state)=>{
  return{
    honey:state.honey,
  }
}
export default connect(mapStateToProps,{ImgAC,moduleAC,stateAC,clearAC})(HoneyContainer);
