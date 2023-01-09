import * as React from "react";
import {Courses} from "./components/Sections/Courses";
import {PageHome} from "./components/Pages/PageHome";
import {PageNotFound} from "./components/Pages/PageNotFound";
import {Room} from "./components/Sections/Room";
import {Profile} from "./components/Sections/Profile";

type IRoute = {
  index?: boolean;
  name?: routesKey;
  path: string;
  route?: string;
  element: JSX.Element;
  label: string;
};

export enum routesKey {
  home = "home",
  error_404 = "error_404",
}

const All: IRoute[] = [
  {
    index: true,
    path: "/room/*",
    element: <Room />,
    label: "Вебинарная комната",
  },
  {
    index: true,
    path: "/profile/*",
    element: <Profile />,
    label: "Мой профиль",
  },
  {
    index: true,
    path: "/courses/*",
    element: <Courses />,
    label: " Мои курсы",
  },
  {
    index: true,
    name: routesKey.home,
    path: "/",
    element:  <PageHome />,
    label: "Главная",
  },
  {
    name: routesKey.error_404,
    path: "*",
    element: <PageNotFound />,
    label: "404",
  },
];

export {All};