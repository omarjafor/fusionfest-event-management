import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Root from './Root/Root';
import Home from './Pages/Home/Home';
import ErrorPage from './Pages/ErrorPage';
import AuthProvider from './Provider/AuthProvider';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Profile from './Pages/Profile/Profile';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { HelmetProvider } from 'react-helmet-async';
import UpcomingEvents from './Pages/UpcomingEvents/UpcomingEvents';
import FindService from './Pages/Services/FindService';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element: <Home></Home>,
      },
      {
        path: '/services/:id',
        element: <PrivateRoute><FindService></FindService></PrivateRoute>
      },
      {
        path: '/upcomingevents',
        element: <PrivateRoute><UpcomingEvents></UpcomingEvents></PrivateRoute>
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
