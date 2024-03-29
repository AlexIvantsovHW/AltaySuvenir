
const SET_IMG='SET_IMG'
const SET_MODULE='SET_MODULE'
const SET_STATE='SET_STATE'
const SET_CLEAR='SET_CLEAR'


let initialState = {
  current_img:0,
  current_module:'Чайные напитки',
  State:{
    Tea_1:{
      name:'Чай "Мир Сибири"',
      Desc:'Чайный напиток “Мир Сибири” из ферментированного кипрея – самый традиционный чай народов Сибири. Обладает прекрасными вкусовыми качествами, хорошо сочетается с мёдом и молоком. Издавна люди ценили Иван-чай за сильные противовоспалительные и обволакивающие свойства, за способность улучшать состав крови, нормализовать давление, продлевать молодость.',
      price:2500,
      articul:'AT1',
      img:'https://i.postimg.cc/kMbYSxj3/tea-1.png'},
  
      Tea_2:{
      name:'Чай "Горный мир"',
      Desc:'“Горный мир” – это сочетание трав, растущих в высокогорной местности, на скалах, вдоль горных ручьёв. Повышает защитные силы организма, придаёт энергию, помогает иммунитету сопротивляться болезнетворным микроорганизмам, улучшает работу пищеварительного тракта. Состав: чабрец, зверобой, Иван-чай, бадан, смородина.',
      price:2500,
      articul:'AT2',
      img:'https://i.postimg.cc/4xSpw0d8/tea-2.png'},
      Tea_3:{
         name:'Чай "Красный корень"',
         Desc:'“В народной медицине красный корень применяют при сезонных физиологических перегрузках (авитаминозы, эпидемии вирусных инфекций и пр.), способствует быстрому восстановлению сил после повышенных нервных и физических нагрузок.',
         price:2500,
         articul:'AT3',
         img:'https://i.postimg.cc/JzZX855x/Tea-3.png'},
     Tea_4:{
         name:'Чай "Панцерия"',
         Desc:'Это многолетнее травянистое растение с полым четырехгранным стеблем, толстым корневищем. Это растение, обладающее высокими лекарственными свойствами. Оно способствует понижению давления у людей с гипертонической болезнью. Панцерия обладает мочегонным эффектом, нормализует работу эндокринной системы, стабилизируют гормональные процессы. Благоприятна трава для иммунитета, способствует его укреплению, наделяет организм энергией и бодростью, зарекомендовала себя как эффективное сосудорасширяющее и успокаивающее средство. Она ни в чем не уступает, а порой даже и превосходит по силе другие растительные препараты, используют для расширения периферических кровяных сосудов, снижения кровяного давления и ритма сердца, при начальной стадии гипертонической болезни, пороках сердца, зобе, атеросклерозе, неврастении, легкой форме тиреотоксикоза, сердечно-сосудистых и вегетативных неврозах.',
         price:2500,
         articul:'AT4',
         img:'https://i.postimg.cc/W1T3jfLS/Tea-4.png'},
     Tea_5:{
         name:'Напиток чайный «Копеечник чайный»',
         Desc:'Настой корня копеечника в Алтайском крае издавна использовали в качестве естественного биостимулятора. Такой чай пили преимущественно мужчины – он позволял эффективно мобилизовать силы, быстро снять мышечную усталость и восстановиться после многочасовой физической работы.',
         price:2500,
         articul:'AT5',
         img:'https://i.postimg.cc/1zhnXV3H/tea-5.png'},
  }
}


const HoneyReducer = (state = initialState, action) => {
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
export const clearHoney=clearAC;
export default HoneyReducer;
