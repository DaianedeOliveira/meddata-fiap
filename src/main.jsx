import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/pages/Login/index.jsx'
import Header from './components/Header/index.jsx'
import FooterBase from './components/FooterBase/index.jsx'
import Footer from './components/Footer/index.jsx'
import Medication from './components/pages/Medication/index.jsx'
import Resultado from './components/pages/Resultado/index.jsx'


  const router = createBrowserRouter([

  {
    path: "/",
    element: <App/>,
  },

  {
    path:"login",
    element: <Login/>,
  },

  {
    path:"medication",
    element: <Medication/>,
  },

  {
    path:"resultado",
    element: <Resultado/>,
  },



]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<Header/>
<RouterProvider router={router}/>
<FooterBase/>
<Footer/>

  </React.StrictMode>,
)
