import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/home'
import { createBrowserRouter } from "react-router-dom";
import About from './components/About/About.jsx'
import Contact from './components/Contact/contact.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element : <Layout/>,
    children : [
      {
        path : "",
        element : <Home/>

      },
      {

        path : "/about",
        element : <About/>

      },
      {

        path : "/contact",
        element : <Contact/>

      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    { <RouterProvider router={router}/>  /* this requires us to create a router in a separate file and import it here and then we can use it to wrap our whole app so that we can use the functionalities of react router dom in our app & this requires a prop named ROUTER */}
  </StrictMode>,
)
