import * as React from "react";
import {Message} from "./components/Sections/Massage";
import {Profile} from "./components/Sections/Profile";
import {News} from "./components/Sections/News";
import {PageHome} from "./components/Pages/PageHome";
import {PageNotFound} from "./components/Pages/PageNotFound";

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
    path: "/profile/*",
    element: <Profile />,
    label: "Профиль",
  },
  {
    index: true,
    path: "/news/*",
    element: <News />,
    label: "Новости",
  },
  {
    index: true,
    path: "/message/*",
    element: <Message />,
    label: "Сообщения",
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