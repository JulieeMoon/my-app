import * as React from "react";
// @ts-ignore
import s from './index.module.scss';
import {Header} from "./components/SiteBody/Header";
import {SideBar} from "./components/SiteBody/Sidebar";
import {Layout} from "./components/SiteBody/Layout";
import {Route, Routes} from "react-router-dom";
import {FC} from "react";
import {All} from "./routes";
import {PostPage} from "./components/Sections/News/PostPage";

interface IProps {}

const App: FC<IProps> = () => {

    return (
        <div className={s.appSt}>
            <Header/>
            {/*<SideBar/>*/}
                {/*<Routes>*/}
                {/*{All.map((elem, idx) => (*/}
                {/*    <Route*/}
                {/*        index={elem.index}*/}
                {/*        key={elem.path + idx}*/}
                {/*        path={elem.route || elem.path}*/}
                {/*        element={elem.element}*/}
                {/*    />*/}
                {/*))}*/}
                {/*<Route path="/news/:id" element={<PostPage/>} />*/}
                {/*</Routes>*/}

            <Layout/>
        </div>
  );
}

export {App};
