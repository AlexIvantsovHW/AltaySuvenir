import React from "react";
import '../Style_Prod.css'
import { Buben, Music_Items,Comus,Shum,ShumDict, commonImg} from "../../../Common/Data";
import { bubenDict,ComusDict } from "../../../Common/Data";
import { NavLink } from "react-router-dom";


const Music = (props) => {


let page_Items=Music_Items // Менять
let [item_1,dict_1,item_2,dict_2,item_3,dict_3]=[Buben[0],bubenDict,Comus[0],ComusDict,Shum[0],ShumDict] // Менять
let pWay=props.production// менять
  
//____________________ЛОГИКА____________________________
  // Проверка текущего модуля и экземпляра
  let Module_current=pWay.current_module;

  let  SwtichModule=(Module)=>{
    switch (Module){
      case page_Items[0]:
        item=item_1;
        dict=dict_1;
        break;
      case page_Items[1]:
        item=item_2;
        dict=dict_2;
        break;
      default:
        item=item_3;
        dict=dict_3;
    }   
};
  SwtichModule(Module_current);
  var item;
  var dict;
  var objLength=(Object.keys(item).length)
  

  let toExit=()=>{
   return (props.clearAC(0))
  }
  // Смена модуля
  let curr_page=0;

  let prevModule=()=>{
    SwtichModule(page_Items[left_module]);
    return (props.moduleAC(page_Items[left_module],item,curr_page))}
  let nextModule=()=>{
    SwtichModule(page_Items[right_module]);
    return (props.moduleAC(page_Items[right_module],item,curr_page))}

  let ICM=page_Items.indexOf(Module_current) // index of current module
  let left_module=((ICM-1)<0?ICM:(ICM-1));
  let right_module=((ICM+1)===page_Items.length?ICM:(ICM+1));

// Ссылки на конкретные товары

  var Img_current=(pWay.current_img>objLength?0:pWay.current_img);

  let Curr_State=pWay.State[dict[Img_current]];// current state
  let name=(Object.keys(item).length>1?(item[dict[Img_current]].name):(item[dict[0]].name))
  let articul=Curr_State.articul;
  let size= (Curr_State.size?Curr_State.size:null)
  let price=(Curr_State.price?Curr_State.price:null)
  let Desc=(Curr_State.Desc?Curr_State.Desc:null)

// Проверка длины диапозона
  let Left_check=((Img_current-1)<0?Img_current:(Img_current-1))
  let Right_check=((Img_current+1)===objLength?Img_current:(Img_current+1))

  let PREV=()=>{return(props.ImgAC(Left_check))}
  let NEXT=()=>{return(props.ImgAC(Right_check))}

  // Загрузка таблицы

  let itemTablePrice=(size&&(size.price.length>0)?
    (size.price.map(item=><td>{item}</td>)):null
    )
    let itemTableD=(size&&(size.price.length>0)?
      (size.d.map(item=><td>{item}</td>)):null
      )

      // Таблицы с ценами
  let Table=(size?(    
  <table frame="hsides" rules="rows" rules="cols">
    <caption>Таблица размеров</caption>
    <tr>
    <th>Размер,см</th>
      {itemTableD}
    </tr> 
    <tr>
    <th>Цена ,руб</th>
      {itemTablePrice}
    </tr>
    </table>):null) 


//____________________ТЕЛО КОМПОНЕНТЫ____________________________
return (
  <div className="music_container">
     
<div className="Music">

      <div className="img">
        <div className='img_container'><img src={Curr_State.img} /></div>        
        <div className={'img_button'} >
          <div ><img src={commonImg.leftArrow} onClick={PREV}/></div>
          <div ><img src={commonImg.rightArrow} onClick={NEXT}/></div>
        </div>
      </div>
      <div className="text">
     
      <div className="item">
  <div className="sub_button"><button onClick={prevModule}><h3>{Music_Items[ICM-1]}</h3></button> </div>
  <div className="button"><button><h2>{Module_current}</h2></button></div>
  <div className="sub_button"><button onClick={nextModule}><h3>{Music_Items[ICM+1]}</h3></button></div>
      </div>
        <div className="item">{name.toUpperCase()}</div>
        <div className="description">
         <div className='desc_text'> <h1>Описание</h1></div>
        <h2>{Desc}</h2>
        {Table}
        </div>
        <div className="price">
          <div className="buy">
            <div className="buy_cont"> Цена: {price} руб <p>Артикул:{articul}</p></div>
          </div>
          <div className="wallet-cont">
          <div className='wallet'> <a href='https://t.me/+0q63ZumKjDkxZDBi'> <img src={commonImg.wallet} /> </a> 
          </div>
          </div>
        </div>
      </div>
      <div className="end"><NavLink to='/product'><img src={commonImg.endPoint} onClick={toExit}/></NavLink></div>
    </div>
  </div>  
  );
};
export default Music;
