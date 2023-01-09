import * as React from "react";
// @ts-ignore
import s from './index.module.scss';
import {Header} from "./Layout/Inside/Header";
import {Layout} from "./Layout";
import {Route, Routes} from "react-router-dom";
import {FC} from "react";
import {All} from "./routes";
import {SideBar} from "./Layout/Inside/SideBar";


interface IProps {}

const App: FC<IProps> = () => {
    return(
        <div><Layout/></div>
    )
    }

  //       <div className={s.appSt}>
  //           <Header/>
  //           <SideBar>
  //               <Routes>
  //               {All.map((elem, idx) => (
  //                   <Route
  //                       index={elem.index}
  //                       key={elem.path + idx}
  //                       path={elem.route || elem.path}
  //                       element={elem.element}
  //                   />
  //               ))}
  //               <Route/>
  //               </Routes>
  //           </SideBar>
  //           <Layout/>
  //       </div>
  // );


export {App};