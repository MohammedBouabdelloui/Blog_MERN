import { createBrowserRouter } from "react-router-dom";
import Header from "../layout/header";
import Homme from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";



export const router = createBrowserRouter (
    [
        {
            element : <Header />,
            children : [
                {
                    path : '/',
                    element : <Homme />
                },

                {
                    path : '/login',
                    element : <Login />
                },
                
                {
                    path : '/register',
                    element : <Register />
                }
            ]
        }
    ]
)
