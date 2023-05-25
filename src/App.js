import React from "react";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import MainPage from "./Component/MainPage/MainPage";
import Product from "./Component/Product/Product";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./Component/AboutUs/AboutUs";
import Contact from "./Component/Contact/Contact";
import Order from "./Component/Footer/Order/Order";
import Pay from "./Component/Footer/Pay/Pay";
import Deliver from "./Component/Footer/Deliver/Deliver";
import Partner from "./Component/Footer/Partner/Partner";
import MusicContainer from "./Component/Product/Music/MusicContainer";
import FAQ from "./Component/FAQ/FAQ";
import { compose } from "react-compose";



const App = () => {
  return (
    <div className="container">
     <Header/>
     <Routes>
            <Route path="/mainPage" element={<MainPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product" element={<Product />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/order" element={<Order />} />
            <Route path="/pay" element={<Pay />} />
            <Route path="/deliver" element={<Deliver />} />
            <Route path="/partner" element={<Partner   />} />

            <Route path="/music" element={<MusicContainer />} />
            <Route path="/faq" element={<FAQ />} />
            
          </Routes>
     <Footer/>
    </div>
  );
};


export default App;
