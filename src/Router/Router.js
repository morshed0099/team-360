import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Attendance from '../Components/Attendance';
import Dashboard from '../Components/Dashboard';
import ErrorPage from '../Components/ErrorPage';
import Main from '../layout/Main';

export const router=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Dashboard></Dashboard>
            },
            {
                path:'/attendance',
                element:<Attendance></Attendance>
            }
        ]
    }
])
   
