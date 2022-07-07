import { lazy, LazyExoticComponent } from "react";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyLoad/pages";
import { NoLazy } from "../01-lazyLoad/pages/NoLazy";

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
const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyPage1" */'../01-lazyLoad/components/layout/LazyLayout'));

export const routes:IRoute[] = [
    {
        to: '/lazylayout/',
        path: '/lazylayout/*',
        component: LazyLayout,
        name: 'Lazy Layout'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        component: NoLazy,
        name: 'No Lazy'
    },
]