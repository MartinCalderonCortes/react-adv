import { lazy, LazyExoticComponent } from "react";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyLoad/pages";

type JSXComponent = () => JSX.Element

interface IRoute {
    to: string,
    path: string,
    // component: LazyExoticComponent<() => JSX.Element> | (() => JSX.Element), 
    // component: (() => JSX.Element) | LazyExoticComponent<() => JSX.Element>, 
    component: LazyExoticComponent<() => JSX.Element> | (() => JSX.Element), 
    name: string,
}

// const Lazy1 = lazy(() => import(`${LazyPage1}`));
const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */'../01-lazyLoad/pages/LazyPage1'));
const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */'../01-lazyLoad/pages/LazyPage2'));
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */'../01-lazyLoad/pages/LazyPage3'));

export const routes:IRoute[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        component: Lazy1,
        name: 'Lazy-1'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        component: Lazy2,
        name: 'Lazy-2'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        component: Lazy3,
        name: 'Lazy-3'
    },

]