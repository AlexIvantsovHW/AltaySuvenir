import React from "react";
import "./Common/style.css";
import { pictures } from "./Common/Images/Image";
import { connect } from 'react-redux';
import { CurrentImgAC } from "./redux/slider-reducer";


let current_page = 0;

const left = () => {
  debugger;
  current_page = pictures.length;

  return ;

};
class Slider extends React.Component {
  componentDidMount(){
    CurrentImgAC(current_page)
  }
  render() {
return(
  <div className="container">
      <div className="slider">
        <div className="img">
          <img src={pictures[current_page]} />
        </div>
        <div className="buttons">
          <button onClick={left}>left</button>
          <button>Right</button>
        </div>
      </div>
    </div>
)
    
  }
}

const mapStateToProps=(state)=>{
  return{
    currentImg:state.current_img,
  }
}
export default connect(mapStateToProps,{CurrentImgAC})(Slider);
