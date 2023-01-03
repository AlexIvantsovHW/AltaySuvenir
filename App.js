import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import BodyCont from "./components/BodyContainer/BodyCont.jsx";
import Wrapper from './style.module.css';
import Foot from './components/Foot/Foot.jsx';
const App = () => {
  return (
    <div className={Wrapper.wrapper}>
      <Header />
      <BodyCont />
      <Foot />
    </div>
    Haha
  );
}

export default App;
