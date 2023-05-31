
const SET_IMG='SET_IMG'
const SET_MODULE='SET_MODULE'
const SET_STATE='SET_STATE'
const SET_CLEAR='SET_CLEAR'


let initialState = {
  current_img:0,
  current_module:'Маски',
  State:{
    Mask_1:{
      name:'Маска Шамана',
      Desc:'Одним из средств выражения внутреннего потенциала служит маска. На ней может быть изображено животное или предок-шаман. Носитель маски воплощает своих предков. Чтобы укрепить этот контакт, шаман и надевает маску. У некоторых народов маска использовалась как способ концентрации. Изготавливались маски из разных материалов и надевались только в особых случаях.',
      price:2500,
      articul:'Mm1',
      img:'https://i.postimg.cc/pX1Yy4yH/Mask-1.png'},
  }
}


const MaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IMG: return { ...state,  current_img:action.Img}; 
    case SET_MODULE:debugger;return { ...state,State:action.state, current_module:action.module,current_img:0}; 
    case SET_STATE:debugger;return { ...state,state:action.state};
    case SET_CLEAR:debugger;return {...state=initialState,current_img:action.clear}
    default:return { ...state };
  }
};

export const ImgAC=(Img)=>{return{type: SET_IMG,Img }};
export const moduleAC=(module,state)=>{debugger;return{type:SET_MODULE,module,state}}
export const stateAC=(state)=>{{debugger;return{type:SET_STATE,state}}}
export const clearAC=(clear)=>{{debugger;return{type:SET_CLEAR,clear}}}
export default MaskReducer;
