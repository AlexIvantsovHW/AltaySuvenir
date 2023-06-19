
const SET_CP='SET_CP'



let initialState = {
  current_img:0,
};


const SliderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CP:return { ...state,  current_img:action.Img}; 
    default:return { ...state };
  }
};

export const CurrentImgAC=(Img)=>{return{type: SET_CP,Img }};

export default SliderReducer;
