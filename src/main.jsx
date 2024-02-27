import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import FormLogin from './pages/login/FormLogin.jsx'
import FormCadastro from './pages/cadastro/FormCadastro.jsx'

const route = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'login',
        element: <FormLogin />
      },
      {
        path: 'cadastro',
        element: <FormCadastro />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
