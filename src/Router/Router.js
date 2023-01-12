import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Attendance from '../Components/Attendance';
import Dashboard from '../Components/Dashboard';
import Main from '../layout/Main';

export const router=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>
            },
            {
                path:'/attendance',
                element:<Attendance></Attendance>
            }
        ]
    }
])
   
