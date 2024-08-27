import React ,{useState} from 'react'
import Logo from "../../assets/Logo.png"
import menu from "../../assets/image.png"
import {   AlignJustify,X } from "lucide-react";
import arrow from "../../assets/arrow.png"
import lepole from "../../assets/lepole.png"


const Landing = () => {
  const [clicked,setClicked]=useState(false);
  const toggle=()=>{
    console.log('clicked');
    setClicked(!clicked);
  }
  return (
    <>

    <div className=" mx-auto  mr-[3rem] ml-[3rem] container min-h-screen ">
      <nav className=' absolute top-6  flex  ' > 
        <img src={Logo} className=' w-[7rem]  flex justify-start'/>
         <span className='hidden lg:flex  lg:justify-end'>
          <button className='bg-transparent '>
about
          </button>
          <button className='bg-yellow-400  text-[#000] px-[3rem] rounded-[2rem]'>
Talk to us
          </button>




          <button onClick={toggle} className='lg:hidden flex justify-end'>
       {clicked? <X/>:<AlignJustify/>} 
        </button>
        </span>


       
      </nav>

      {clicked&&(<div className='flex   h-[15rem]  w-full bg-[#000] flex-col  space-y-[2rem] items-center absolute top-[6rem] z-[99]'>
      <button className='bg-transparent  mt-[2rem]'>
about
          </button>
          <button className='bg-yellow-400  text-[#000] px-[3rem] rounded-[2rem]'>
Talk to us
          </button>



      </div>)}



 <div className='    '>
  {/* <div className=" ">
    <h4 className=''>End To End
Product Design &
Branding Agency</h4>
<p>I enole Dides is a product desian <br/>agency fo
parly stage startine</p>


  </div>
  <div className="">
    <img src={lepole} className=''/>
  


  </div> */}

</div> 







    </div>


















    {/* <div className="lg:w-[1024px]  w-full  mx-auto mr-[4rem] ml-[4rem] block">
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
          {clicked? <AlignJustify />:<X/>} 
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
          <button className='flex justify-center w-[14rem] pt-6 rounded-[3rem] border-white border-[3px]  relative   lg:top-[1rem] max-md:top-[5rem]  ' > 
            Learn More <img src={arrow} className='w-10 relative bottom-2  left-3 '/>
            
          </button>
        </span>
        <img src={lepole} className='lg:w-2/5 lg:relative lg:left-[9rem] lg:-top-[4rem] relative top-[7rem] right-[2rem]'/>


      </div>


       <div className='lg:flex lg:flex-row  max-md:flex-col lg:justify-between  relative lg:top-[33rem]  max-md:top-[36rem]' >
      <img src={Logo} className='lg:w-[7rem] lg:h-[2rem]  max-md:w-[9rem] w-[2rem]  relative lg:top-[3rem] max-md:top-[1rem] max-md:left-[3rem]'/>

      <span className='relative left-[10rem] lg:text-right max-md:text-center max-md:top-[3rem]  max-md:-left-[2rem] max-md:mt-[5rem]'>
        <p>Reach out To us</p>
        <h3 className='lg:text-[3rem] max-md:text-[20px]  max-md:font-bold'>hello@lepoledides.com</h3>
      </span>



      </div>

      <hr className='relative top-[35rem]'/>

 



    </div>
       */}
    </>
  )
}

export default Landing
