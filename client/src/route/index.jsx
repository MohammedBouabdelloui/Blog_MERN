import { createBrowserRouter } from "react-router-dom";
import Header from "../layout/header";
import Homme from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";

export const Route_Login = "/login";
export const Route_Register = '/register';

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
                    path : Route_Login,
                    element : <Login />
                },
                
                {
                    path : Route_Register ,
                    element : <Register />
                }
            ]
        }
    ]
)
