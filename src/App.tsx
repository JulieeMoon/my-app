import React from "react";
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {Body} from "./components/Body/Body";
import s from './index.module.scss';

const App = () => {
  return (
      <div className={s.appSt}>
        <Header/>
        <Body/>
        <Footer/>
      </div>
  );
}

export {App};
