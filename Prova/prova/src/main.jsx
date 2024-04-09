import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { About } from './Components/About.jsx'
import { Contatti } from './Components/Contatti.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  }, 
  {
    path: "/about",
    element: <About></About>
  },
  {
    path: "/contatti",
    element: <Contatti></Contatti>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>  
  </React.StrictMode>,
)
