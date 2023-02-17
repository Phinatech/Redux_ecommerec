import React from 'react'
import Allroutes from './Components/AllRoutes/Allroutes'
import Footer from './Components/footer/footer'
import Header from './Components/Header/Header'
import Homescreen from './Components/Home/Homescreen'

const App = () => {
  return (
    <div>
   <Header/>
   <Allroutes/>
   <Footer/>
    </div>
  )
}

export default App