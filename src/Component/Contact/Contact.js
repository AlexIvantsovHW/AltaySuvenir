import React from "react";
import './Contact.css'


const Contact=()=>{
    return(
        <div className="Contact">
          <div className="contactContainer">
            <div className="contactImg">
                <img src='https://i.postimg.cc/N0rxNrY7/Map.png'/>
                <a href='https://go.2gis.com/oqnof'><div className="point"> <img src='https://i.postimg.cc/SxH6zN8X/loop.png'/></div></a>
            </div>

            <div className="contactText">
            <h4>Контактная информация</h4>
            <h2>ИП: Рябухина Ирина Анатольевна</h2>
            <h2>Адрес: Республика Алтай, Майминский Район, с.Соузга, ул.Набережная 66</h2>
            <h2>Рабочий телефон: 8-903-919-9356</h2>
            <h2>Почта: domikshamana@mail.ru</h2>
            <h2>Координаты: 51.89374745785859, 85.86589132912735 </h2>

            </div>
          </div>
              </div>
    )
}
export default Contact;