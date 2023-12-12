import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//1- configurando router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from "./router/pages/homePage/Home";
import Form from "./router/pages/formCadastro/FormCadastro";

const router = createBrowserRouter([

  {
    path: '/',
    element: <Home />
  },
  {
    path: 'form',
    element: <Form />
  }

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
