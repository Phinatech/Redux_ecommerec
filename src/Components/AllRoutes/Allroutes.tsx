import React from 'react'
import { useRoutes } from 'react-router-dom'
import Cart from '../CartFile/Cart/Cart'
import Homescreen from '../Home/Homescreen'

const Allroutes = () => {

    let element = useRoutes([
        {
            path:"/",
            element:<Homescreen/>
        },
        {
            path:"/about",
            element:<Cart/>
        }
    ])
  return element
    
}

export default Allroutes
