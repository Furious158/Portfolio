import {
    createBrowserRouter, 
    RouterProvider, 
}    from "react-router-dom";

import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"

const router = createBrowserRouter([
    {
        path: "/", 
        element: <Home/>
    }, 
    {
        path:"/About", 
        element: <About/>
    },
    {
        path:"/Contact", 
        element: <Contact/>
    }
])

export default function Router(){
    return (
        <RouterProvider router={router} />
    )
}