import React from 'react'
import { useRoutes } from 'react-router-dom'
import Cart from '../CartFile/Cart/Cart'
import Homescreen from '../Home/Homescreen'
import Register from '../Registering/Register'

const Allroutes = () => {

    let element = useRoutes([
        {
            path:"/",
            element:<Homescreen/>
        },
        {
            path:"/about",
            element:<Cart/>
        },
        {
            path:"/register",
            element:<Register/>
        }
    ])
  return element
    
}

export default Allroutes
