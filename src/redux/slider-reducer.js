
const SET_CP='SET_CP'



let initialState = {
  current_img:0,
};


const SliderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CP: debugger;return { ...state,  current_img:action.Img}; 
    default:return { ...state };
  }
};

export const CurrentImgAC=(Img)=>{debugger;return{type: SET_CP,Img }};

export default SliderReducer;
