import React from "react";
import './Deliver.css'


const Deliver=()=>{
    return(
        <div className="Deliver">

<div className="deliverContainer">
<div className="deliverText">
<div className="textHeader"><h4>Доставка</h4></div>
  <div className="subText"><h2>Мы предлагаем доставку нашей продукции по территории РФ, Казахстана, Белорусии, Армении и Киргизии.
    <br/> По территории РФ доставка осуществляется 2 способами:</h2> </div>
  <div className="subText"><h2>№1- Доставка <a href='https://www.pochta.ru/'>Почтой-России</a></h2></div>
  <div className="subText"><h2>№2- Доставка Грузовой компанией <a href="https://nrg-tk.ru/">Энергия</a></h2></div>
  <div className="subText">
    <div className="subText_2">
    <h2>
          Обращаем Ваше внимание, что в стоимость доставки <span>не включена</span> в стоимость изделеия.
     <br/>Окончательная стоимость будет расчитана после обработки заявки нашим менеджером.
     <br/> Ориентировочную стоимость доставки Вы можете узнать на сайте транспортной компании по ссылкам выше</h2>
    </div>
  </div>
  
</div>
</div>
</div>
    )
}
export default Deliver;