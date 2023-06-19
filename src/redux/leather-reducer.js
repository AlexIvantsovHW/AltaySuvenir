
const SET_IMG='SET_IMG'
const SET_MODULE='SET_MODULE'
const SET_STATE='SET_STATE'
const SET_CLEAR='SET_CLEAR'


let initialState = {
  current_img:0,
  current_module:'Кошельки',
  State:  {
    Wallet_1:{
      name:'Портмане (Вертикальное)',
      Desc:'Стильное, плоское, удлиненной формы портмоне -«раскладушка» с массой удобных отделений. Оно настолько удобно ложится в ладонь, что его не хочется выпускать из рук. Строгая, лаконичного дизайна, аккуратная, удобная модель. Модель производит приятное эстетическое впечатление. Портмоне сконструировано удобно распахивающейся "раскладушкой". Для финансовой документации – длинные открытые карманы: один за блоком карточек и один на противоположной стороне. В широком, просторном отделении для купюр также удобно будет расположить бумаги. Для пластиковых карточек – 10 гнезд с эффектным вырезом.',
      price:2500,
      articul:'LW1',
      img:'https://i.postimg.cc/9fFKpyBH/Wallet-1.png'},
Wallet_2:{
      name:'Портмане (Для водителей)',
      Desc:'Практичный, рожденный по требованию времени аксессуар. Кроме мест для паспорта и автодокументов в нем устроен удобный блок для клиентских и платежных пластиковых карточек. Удобно лаконично и все под рукой! Модель – плоская, компактная, с отлично приданной формой: открывается и закрывается легким движением руки. Его приятно держать в руках и не расставаться с ним. ',
      articul:'LW2',
      price:2500,
      img:'https://i.postimg.cc/BbS01tnm/Wallet-2.png'},
  Wallet_3:{
      name:'Зажим для денег с отделением для карт',
      Desc:'Очаровательный современный аксессуар для человека, который активно пользуется таким платежным средством как пластиковые карточки. В этой модели все устроено для них и удобства их владельца, как открытые гнезда, так и 2 потайных кармана. Зажим выполнен из плотной кожи, очень приятной на ощупь,хорошо держит форму. В месте перегиба есть металлическая скобка фиксирующая держатель купюр внутри зажима, так же внутри расположено 6 кармашка для пластиковых карт и два потайных кармана. Все очень лаконично и практично. Подобное изделие является хорошей альтернативой небольшому кошельку или бумажнику и позволит держать бумажную наличность в достойном виде.',
      price:1500,
      articul:'LW3',
      img:'https://i.postimg.cc/zGS4T84M/Wallet-3.png',
      },
  Wallet_4:{
      name:'Портмоне на круговой молнии из кожи',
      Desc:'Модель плоская сшита из шикарной толстой кожи, комфортно располагается в руке и имеет все шансы стать самой любимой. Кожа отличается изысканным внешним видом, характерным для шкур экзотической рептилии. Её поверхность выглядит совершенно натурально. Кожа плотная, матовая, очень приятная на ощупь, хорошо держит форму. Это материал для истинных ценителей необычных вещей, обладающих, к тому же, и прекрасными качественными и функциональными характеристиками. Великолепное удобное клатч портмоне жесткой формы на круговой молнии из натуральной кожи КРС. Формально портмоне, а фактически два в одном: портмоне и сумка-визитка (клатч), способные вместить все необходимое. Имеет удобную многофункциональную конструкцию. Портмоне сконструировано гармошкой, открывается широко и удобно.',
      price:1500,
      articul:'LW4',
      img:'https://i.postimg.cc/X7gg8q7w/Wallet-4.png',
      },
    }}


const LeatherReducer = (state = initialState, action) => {
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
export default LeatherReducer;
