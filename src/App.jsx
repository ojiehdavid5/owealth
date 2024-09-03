import { useEffect, useState } from 'react'
import Landing from "../src/components/Lepole/Landing";
import AOS from 'aos'
import "aos/dist/aos.css"


import './App.css'

function App() {

  useEffect(() => {
    AOS.init();
  },[]);

  return (
    <>
<div className="">
  
  
  
<Landing/>


</div>
    
     
    </>
  )
}

export default App
