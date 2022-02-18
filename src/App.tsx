import * as React from "react";
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {Body} from "./components/Body/Body";
// @ts-ignore
import s from './index.module.scss';
import {News} from "./components/Header/News";
import {Message} from "./components/Header/Message";
import {Profile} from "./components/Header/Profile";
import {Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <div className={s.appSt}>
            <Header/>
            <Body>
                <Routes>
                    <Route index element={<div>INDEX</div>}/>
                    <Route path='/profile/*' element={<Profile/>}/>
                    <Route path='/news/*' element={<News/>}/>
                    <Route path='/message/*' element={<Message/>}/>
                    <Route path='*' element={<div>ERROR</div>}/>
                </Routes>
            </Body>
            <Footer/>
        </div>
  );
}

export {App};
