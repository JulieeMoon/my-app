import * as React from "react";
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {Body} from "./components/Body/Body";
import s from './index.module.scss';
import {News} from "./components/Header/News";
import {Message} from "./components/Header/Message";
import {Profile} from "./components/Header/Profile";
import {Route} from "react-router-dom";

const App = () => {
    return (
        <div className={s.appSt}>
            <Header/>
            <div>
                {/*<Route path='/profile' render={() => <Profile/>}/>*/}
                {/*<Route path='/news' render={() => <News/>}/>*/}
                {/*<Route path='/message' render={() => <Message/>}/>*/}
            </div>
            <Body/>
            <Footer/>
        </div>
  );
}

export {App};
