import React from "react";
import "./Order.css";

const Order = (props) => {
  return <div className="Order">

  <div className="orderContainer">
    <div className="orderText">
        <div className="textHeader"><h4>Как сделать заказ?</h4></div>
          <div className="subText"><h2>Шаг №1- перейдите в категорию Продукция</h2> </div>
          <div className="subText"><h2>Шаг №2- выбирите интересующую категорию товара</h2></div>
          <div className="subText"><h2>Шаг №3- выбирите интересующий товар</h2></div>
          <div className="subText"><h2>Шаг №4- нажмите на значок кошелька</h2></div>
          <div className="subText"><h2>Шаг №5- в открывшейся ссылке ввидите ФИО, номер телефона и артикла, количество товара,адресс и способ доставки</h2></div>
          <div className="subText">
              <div className="subText_2"><h2>Ожидайте ответа менеджера, он свяжется с Вами с ближайшее время</h2></div>
         </div>
      </div>
    </div>
  </div>;
};
export default Order;
