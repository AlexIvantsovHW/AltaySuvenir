import React from "react";
import { connect } from "react-redux";
import Oberegs from "./Obereg";
import { ImgAC,moduleAC,stateAC,clearAC } from "../../../redux/obereg-reducer";



class OberegContainer extends React.Component{
  componentDidUpdate(prevProps,prevState){
    if (this.props.obereg!== prevProps.obereg) {
      this.setState(this.props.obereg);
    }
  }

  render() {
    return (
      <>
        <Oberegs  {...this.props}/>
      </>
    );
  }
}



const mapStateToProps=(state)=>{
  return{
    obereg:state.obereg,
  }
}
export default connect(mapStateToProps,{ImgAC,moduleAC,stateAC,clearAC})(OberegContainer);
