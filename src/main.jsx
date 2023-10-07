import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Root from './Root/Root';
import Home from './Pages/Home/Home';
import ErrorPage from './Pages/ErrorPage';
import AuthProvider from './Provider/AuthProvider';
import Services from './Pages/Services/Services';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Profile from './Pages/Profile/Profile';
import PrivateRoute from './PrivateRoute/PrivateRoute';


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
        path: '/services',
        element: <Services></Services>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/about',
        element: <About></About>
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
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
