
const SET_IMG='SET_IMG'
const SET_MODULE='SET_MODULE'
const SET_STATE='SET_STATE'
const SET_CLEAR='SET_CLEAR'


let initialState = {
  current_img:0,
  current_module:'Бубны',
  State: {
    buben_1:{
        name:'Бубен (Наскальные рисунки)',
        Desc:'Бубен-это ударный музыкальный инструмент, состоящий из кожаной мембраны, натянутой на деревянный обод. К некоторым разновидностям бубнов подвешены металлические колокольчики, которые начинают звенеть, когда исполнитель ударяет по мембране бубна, потирает её или встряхивает весь инструмент. Все бубны, представленные в Домике Шамана выполнены из кожи марала и украшены национальными рисунками Горного-Алтая.',
        price:'2 500-60 000',
        articul:'MB1',
        size:{
            price:['2 500','4 600','6 200','12 000','16 500','21 500','50 000','60 000'],
            d:[14,18,23,30,35,40,60,65],
        },
        img:'https://i.postimg.cc/nLvZyfyj/BUBEN.png'},
    buben_2:{
        name:'Бубен (Животный мир)',
        Desc:'Бубен-это ударный музыкальный инструмент, состоящий из кожаной мембраны, натянутой на деревянный обод. К некоторым разновидностям бубнов подвешены металлические колокольчики, которые начинают звенеть, когда исполнитель ударяет по мембране бубна, потирает её или встряхивает весь инструмент. Все бубны, представленные в Домике Шамана выполнены из кожи марала и украшены национальными рисунками Горного-Алтая.',
        articul:'MB2',
        size:{
            price:['2 500','4 600','6 200','12 000','16 500','21 500','50 000','60 000'],
            d:[14,18,23,30,35,40,60,65],
        },
        price:'2 500-60 000',
        img:'https://i.postimg.cc/SsJ5F0QL/Buben2.png'},
    buben_3:{
        name:'Бубен (оригинал)',
        Desc:'Бубен-это ударный музыкальный инструмент, состоящий из кожаной мембраны, натянутой на деревянный обод. К некоторым разновидностям бубнов подвешены металлические колокольчики, которые начинают звенеть, когда исполнитель ударяет по мембране бубна, потирает её или встряхивает весь инструмент. Все бубны, представленные в Домике Шамана выполнены из кожи марала и украшены национальными рисунками Горного-Алтая.',
        price:'2 500-60 000',
        articul:'MB3',
        img:'https://i.postimg.cc/cCqrfSrX/Buben3.png',
        size:{
            price:['2 500','4 600','6 200','12 000','16 500','21 500','50 000','60 000'],
            d:[14,18,23,30,35,40,60,65],
        },},
    }}


const ProductReducer = (state = initialState, action) => {
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
export default ProductReducer;
