import React, { useState } from "react";
import "./Music.css";
import { Buben, Data, Music_Items,Comus,Shum,ShumDict, commonImg} from "../../../Common/Data";
import { bubenDict,ComusDict } from "../../../Common/Data";








const Music = (props) => {

//____________________ЛОГИКА____________________________
  // Проверка текущего модуля и экземпляра
  let Module_current=props.prod.production.current_module;
  switch (Module_current){
    case 'Бубны':
      item=Buben[0];
      dict=bubenDict;
      break;
    case 'Комусы':
      item=Comus[0];
      dict=ComusDict;
      break;
    default:
      item=Shum[0];
      dict=ShumDict;
  }
  
  var item;
  var dict;
  var objLength=(Object.keys(item).length)
  


  // Смена модуля
  let prevModule=()=>{return (props.prod.moduleAC(Music_Items[left_module]))}
  let nextModule=()=>{return (props.prod.moduleAC(Music_Items[right_module]))}

  let ICM=Music_Items.indexOf(Module_current) // index of current module
  let left_module=((ICM-1)<0?ICM:(ICM-1));
  let right_module=((ICM+1)===Music_Items.length?ICM:(ICM+1));

// Ссылки на конкретные товары

  let Img_current=props.prod.production.current_img;
  let name=(Object.keys(item).length>1?(item[dict[Img_current]].name):(item[dict[0]].name))
  let articul=item[dict[Img_current]].articul;
  let size=((item[dict[Img_current]].size===undefined)?null:item[dict[Img_current]].size)
  let price=item[dict[Img_current]].price
  let Desc=item[dict[Img_current]].Desc
// Проверка длины диапозона
  let Left_check=((Img_current-1)<0?Img_current:(Img_current-1))
  let Right_check=((Img_current+1)===objLength?Img_current:(Img_current+1))

  let PREV=()=>{return(props.prod.ImgAC(Left_check))}
  let NEXT=()=>{return(props.prod.ImgAC(Right_check))}

  // Загрузка таблицы

  let itemTablePrice=(size&&(size.price.length>0)?
    (size.price.map(item=><td>{item}</td>)):null
    )
    let itemTableD=(size&&(size.price.length>0)?
      (size.d.map(item=><td>{item}</td>)):null
      )

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
        <div className='img_container'><img src={item[dict[Img_current]].img} /></div>        
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
          <h1>Описание</h1>
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
    </div>


  </div>  
  );
};
export default Music;
