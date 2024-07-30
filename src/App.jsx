import { useEffect, useState } from 'react'
import Home from './components/Home/Home'
import AOS from 'aos'
import "aos/dist/aos.css"


import './App.css'

function App() {

  useEffect(() => {
    AOS.init();
  },[]);

  return (
    <div className=''>
    <Home/>
    
     
    </div>
  )
}

export default App
