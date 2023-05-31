import React from "react";
import { connect } from "react-redux";
import Music from "./Music";
import { ImgAC,moduleAC,stateAC,clearAC } from "../../../redux/product-reducer";



class MusicContainer extends React.Component{
  componentDidUpdate(prevProps,prevState){
    if (this.props.production!== prevProps.production) {
      this.setState(this.props.production);
    }
  }

  render() {
    return (
      <>
        <Music  {...this.props}/>
      </>
    );
  }
}



const mapStateToProps=(state)=>{
  return{
    production:state.production,
  }
}
export default connect(mapStateToProps,{ImgAC,moduleAC,stateAC,clearAC})(MusicContainer);
