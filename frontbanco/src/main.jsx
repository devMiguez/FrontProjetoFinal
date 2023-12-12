import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Configurando o router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from "./router/pages/homePage/Home";
import Form from "./router/pages/formCadastro/FormCadastro";
import FormConta from "./router/pages/formConta/FormConta";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/form',
    element: <Form />
  },
  {
    path: '/conta',
    element: <FormConta />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);