import React ,{useState} from 'react'
import Logo from "../../assets/Logo.png"
import menu from "../../assets/image.png"
import { Menu, X } from "lucide-react";
import arrow from "../../assets/arrow.png"
import lepole from "../../assets/lepole.png"


const Landing = () => {
  const [clicked,setClicked]=useState(false);
  const toggle=()=>{
    console.log('clicked');
    setClicked(true);
  }
  return (
    <>
    <div className="lg:w-[1024px] bg-[#000] w-full  mx-auto mr-[4rem] ml-[4rem]">
      <div className="">


      </div>
      <header className='flex flex-row  lg:space-x-[57rem]  space-x-[8rem] absolute top-5'>
        <img src={Logo} className='lg:w-[7rem]  w-[7rem] '/>


        <span className='hidden lg:flex'>
          <button className='bg-transparent mr-7 '>
About
          </button>
          <button className='text-[#000] bg-yellow-500 w-[10rem] rounded-[3rem]'>
            Talk to us

          </button>
        </span>
        <button onClick={toggle} className='lg:hidden md:flex '>
          {clicked?<menu/>:<x/>} 
        </button> 





      </header>

      <div className="lg:flex lg:flex-row lg:absolute lg:top-[12rem] flex flex-col absolute top-[5rem]">
        <span>
          <h3 className='lg:text-[5rem]  lg:font-[500] lg:mb-6  lg:text-left  text-center  text-[2rem] relative:top-[2rem] -left-[1rem]'>
            End To End
             <br/>Product Design & <br/>Branding Agency

          </h3>
          <p className='lg:mb-11 lg:text-left  lg:relative lg:top-4 lg:-left-[3px] relative top-[3rem]  right-[2rem] text-center'>

            Lepoles Dides is a product design agency for<br/> early startup

          </p>
          <button className='flex justify-center w-[14rem] pt-6 rounded-[3rem] border-white border-[3px]  md:relative md:top-[9rem]' > 
            Learn More <img src={arrow} className='w-10 relative bottom-2  left-3 '/>
            
          </button>
        </span>
        <img src={lepole} className='lg:w-2/5 lg:relative lg:left-[9rem] lg:-top-[4rem] relative top-[7rem] right-[2rem]'/>


      </div>




    </div>
      
    </>
  )
}

export default Landing
