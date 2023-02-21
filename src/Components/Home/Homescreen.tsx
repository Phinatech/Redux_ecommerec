import React from 'react'
import Cart from '../CartFile/Cart/Cart'
import PropsCard from '../PropsCard'
import Arrivals from './Arrivals'
import Discover from './Discover'
import Hero from './Hero'
import Pict from './Pict'
import Start from './Start'
import Specialchild from './Specialchild'

const Homescreen = () => {
  return (
    <div style={{overflow:"hidden"}}>
      <Hero/>
   
      <Discover/>
     
      <Arrivals/>
    
      <Pict/>
  
      <Specialchild/>
    
      <Start/>
 
      
    
    </div>
  )
}

export default Homescreen