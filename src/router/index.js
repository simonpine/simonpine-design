import { createBrowserRouter } from "react-router-dom";
import App from '../App.js'
import Category from '../views/category.js'
import About from "../views/about.js";
import ItemDetail from "../views/itemsDetail.js";
import Cart from "../views/cart.js";
import Checkout from "../views/Checkout.js";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/store/:category',
        element: <Category />,
    },
    {
        path: '/Store/item/:id',
        element: <ItemDetail />,
    },
    {
        path: '/About',
        element: <About/>,
    },
    {
        path: '/cart',
        element: <Cart/>,
    },
    {
        path: '/cart/checkout',
        element: <Checkout/>,
    }
])
