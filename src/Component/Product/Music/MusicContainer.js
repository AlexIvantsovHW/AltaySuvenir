import React from "react";
import { connect } from "react-redux";
import Music from "./Music";
import { ImgAC,moduleAC } from "../../../redux/product-reducer";



class MusicContainer extends React.Component{
  componentDidUpdate(prevProps,prevState){
    debugger;
    if (this.props.production!== prevProps.production) {
      this.setState(this.props.production);
    }

  
  }
  render() {
    debugger;
    return (
      <>
        <Music  prod={this.props}/>
      </>
    );
  }
}



const mapStateToProps=(state)=>{
  return{
    production:state.production,
  }
}
export default connect(mapStateToProps,{ImgAC,moduleAC})(MusicContainer);
