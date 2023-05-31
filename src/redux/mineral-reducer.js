
const SET_IMG='SET_IMG'
const SET_MODULE='SET_MODULE'
const SET_STATE='SET_STATE'
const SET_CLEAR='SET_CLEAR'


let initialState = {
  current_img:0,
  current_module:'Минералы',
  State:{
    Mineral_1:{
      name:'Подвеска',
      Desc:'Агат поможет пробудить ваши природные таланты, увеличит творческие способности, приведет к победе независимо от сферы деятельности, развеет страхи и укрепит мужество. Агат влияет на развитие ораторских способностей, также вы можете носить этот камень для того, чтобы не ошибиться в выборе истинных друзей. Благоприятное окружение, привлекаемое этим камнем, будет способствовать вашему процветанию.',
      price:2500,
      articul:'MP1',
      img:'https://i.postimg.cc/85bVw1Wx/mineral.png'},
  
 Mineral_2:{
      name:'Браслет',
      Desc:'Агат поможет пробудить ваши природные таланты, увеличит творческие способности, приведет к победе независимо от сферы деятельности, развеет страхи и укрепит мужество. Агат влияет на развитие ораторских способностей, также вы можете носить этот камень для того, чтобы не ошибиться в выборе истинных друзей. Благоприятное окружение, привлекаемое этим камнем, будет способствовать вашему процветанию.',
      price:2500,
      articul:'MB2',
      img:'https://i.postimg.cc/cHdfPmg6/mineral-2.png'},
  }
}


const MineralReducer = (state = initialState, action) => {
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
export default MineralReducer;
