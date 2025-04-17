import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";
import { ShoppingPage } from "../02-components-patterns/pages/ShoppingPage";

type JSXComponent = () => React.JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const LazyLayout = lazy( () => import (/*webpackChunkName: "LazyLayout"*/'../01-lazyload/layout/LazyLayout') );


export const routes : Route[] = [ 
    {
        to: '/lazyload',
        path: 'lazyload/*',
        Component: LazyLayout,
        name: 'LazyLayout'
    },
    {
        to: '/shopping',
        path: 'shopping/*',
        Component: ShoppingPage,
        name: 'Shopping'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },
];