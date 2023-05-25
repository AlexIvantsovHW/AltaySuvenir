import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="AboutUs">
      <div className="aboutUsContainer">
        <div className="aboutUsImg">
          <img src='https://i.postimg.cc/7h9LCdBp/Domik-Shamana.jpg'/>
        </div>
        <div className="aboutUsText">

<div><h1>О нас</h1></div>
<div className="subText">
<h2>Сувенирный магазин Домик Шамана образован в 2001г. в селе Соузга Майминского района Республики Алтай. 
Покупателями нашей сувенирной продукции являются клиенты со всего мира начиная от России и СНГ, заканчивая Соединёнными штатами Америки.   
В Домике Шамана для Вас представлен огромный ассортимент сувенирной продукции, начиная от музыкальных инструментов,
изделий из кожи и различных оберегов, заканчивая множеством чайных сборов и меда.  
</h2>
</div>

<div className="subText">
  <h2>
Мы заботимся о нашей репутации и качестве товара и работаем только с лучшими мастерами и поставщиками в Республики Алтай.
  </h2>
</div>
<div className="subText">
  <h2>
Мы открыты для Вас круглый год с 9 утра до 9 вечера.
  </h2>
</div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
