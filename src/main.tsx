import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import PlansPage from './Pages/PlansPage';
import ContactPage from './Pages/ContactPage';
import LoginPage from './Pages/LoginPage';
import "./Styles/Global.css"
import AboutUsPage from './Pages/AboutUsPage';
import SignUpPage from './Pages/SignUpPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/planos",
    element: <PlansPage />
  },
  {
    path: "/sobre-nos",
    element: <AboutUsPage />
  },
  {
    path: "/contato",
    element: <ContactPage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/signup",
    element: <SignUpPage />
  },
]);




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
