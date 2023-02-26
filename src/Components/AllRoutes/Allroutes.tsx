import path from 'path'
import React from 'react'
import { useRoutes } from 'react-router-dom'
import Cart from '../CartFile/Cart/Cart'
import Homescreen from '../Home/Homescreen'
import Product from '../Product/Product'
import Register from '../Registering/Register'
import Singlepage from '../Singlepage/Singlepage'

const Allroutes = () => {

    let element = useRoutes([
        {
            path:"/",
            element:<Homescreen/>
        },
      {
        path: "/details/:id",
        element:<Singlepage/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
       
        {
            path:"/register",
            element:<Register/>
        },
        {
            path:"/products",
            element:<Product/>
        }
    ])
  return element
    
}

export default Allroutes
