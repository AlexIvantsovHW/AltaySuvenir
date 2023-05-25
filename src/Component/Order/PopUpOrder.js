import React, { useState } from "react";

const PopUp=()=>{
    const [modal,setModal]=useState(false);
const toggleModel=()=>{
  setModal(!modal)
}

if (modal){document.body.classList.add('active-modal')}else{document.body.classList.remove('active-modal')}
    return(
        <div className="modal">
        <div className="overlay">
          <div className="model-content">
            <h2>Hello</h2>
            <p>hey hey</p>
        <button className="close-modal" onClick={toggleModel}>Close</button>      
          </div>
        </div>
      </div>
    )
}
export default PopUp;