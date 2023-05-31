import React from "react";
import { connect } from "react-redux";
import MineraL from "./MineraL";
import { ImgAC,moduleAC,stateAC,clearAC } from "../../../redux/mineral-reducer";



class MineralContainer extends React.Component{
  componentDidUpdate(prevProps,prevState){
    if (this.props.mineral!== prevProps.mineral) {
      this.setState(this.props.mineral);
    }
  }

  render() {
    return (
      <>
        <MineraL  {...this.props}/>
      </>
    );
  }
}



const mapStateToProps=(state)=>{
  return{
    mineral:state.mineral,
  }
}
export default connect(mapStateToProps,{ImgAC,moduleAC,stateAC,clearAC})(MineralContainer);
