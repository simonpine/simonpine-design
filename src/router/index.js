import { createBrowserRouter } from "react-router-dom";
import App from '../App.js'
import Category from '../views/category.js'
import Store from "../views/store.js";
import About from "../views/about.js";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/store/category/:id',
        element: <Category />,
    },
    {
        path: '/store',
        element: <Store/>,
    },
    {
        path: '/About',
        element: <About/>,
    }
])