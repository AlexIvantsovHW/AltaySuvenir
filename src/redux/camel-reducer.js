
const SET_IMG='SET_IMG'
const SET_MODULE='SET_MODULE'
const SET_STATE='SET_STATE'
const SET_CLEAR='SET_CLEAR'


let initialState = {
  current_img:0,
  current_module:'Тапочки',
  State:{
    Camel_1:{
      name:'Тапочки из верблюжей шерсти',
      Desc:'Ручная работа из натурального 100% войлока (отборная монгольская шерсть) и кожи. Подошва непромокаемая. Отделка из кожи. Настоящее монгольское качество! Врачи подтверждают неоценимое влияние такой обуви на здоровье. Стопа не деформируется, обувь - дышит. Валяная обувь оказывает массажное воздействие.  Благодаря высокой плотности войлока обеспечивается изоляция от воды.  Обувь из войлока легкая, обладает совершенным воздухопроницаемым и терморегулирующим свойством.',
      price:2500,
      articul:'СS1',
      img:'https://i.postimg.cc/pTWfhZBz/shoes-1.png'},
  
 Camel_2:{
      name:'Тапочки из верблюжей кожи и шерсти',
      Desc:'Ручная работа из натурального 100% войлока (отборная монгольская шерсть) и кожи. Подошва непромокаемая. Отделка из кожи. Настоящее монгольское качество! Врачи подтверждают неоценимое влияние такой обуви на здоровье. Стопа не деформируется, обувь - дышит. Валяная обувь оказывает массажное воздействие.  Благодаря высокой плотности войлока обеспечивается изоляция от воды.  Обувь из войлока легкая, обладает совершенным воздухопроницаемым и терморегулирующим свойством.',
      price:2500,
      articul:'CS2',
      img:'https://i.postimg.cc/t4dn36J5/shoes-2.png'},
  }
}


const CamelReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IMG: return { ...state,  current_img:action.Img}; 
    case SET_MODULE:return { ...state,State:action.state, current_module:action.module,current_img:0}; 
    case SET_STATE:return { ...state,state:action.state};
    case SET_CLEAR:return {...state=initialState,current_img:action.clear}
    default:return { ...state };
  }
};

export const ImgAC=(Img)=>{return{type: SET_IMG,Img }};
export const moduleAC=(module,state)=>{return{type:SET_MODULE,module,state}}
export const stateAC=(state)=>{{return{type:SET_STATE,state}}}
export const clearAC=(clear)=>{{return{type:SET_CLEAR,clear}}}
export default CamelReducer;
