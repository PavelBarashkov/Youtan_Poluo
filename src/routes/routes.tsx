import React from "react";
import { Main } from "../pages/Main";
import { BASKET_ROUTE, MAIN_ROUTE, PRODUCT_ROUTE, STORE_ROUTE} from "./consts";
import { Store } from "../pages/Store";
import { Basket } from "../pages/Basket";
import { Product } from "../pages/Product";

interface Path {
    path: string
    element: React.ReactNode,
}

export const publicRoutes: Path[] = [
    {
        path: MAIN_ROUTE,
        element: <Main/>
    },
    {
        path: STORE_ROUTE,
        element: <Store/>
    },
    {
        path: BASKET_ROUTE,
        element: <Basket/>
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        element: <Product/>
    },
    {
        path: '/*',
        element: <Main/>
    }
]
