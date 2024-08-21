import React,{useState} from 'react'
import Logo from '../../assets/Logo.png'
import lepole from '../../assets/lepole.png'
import arrow from '../../assets/arrow.png'
import x from "../../assets/x.png"
import path from "../../assets/path.png"
import instagram from "../../assets/instagram.png"
import AOS from 'aos'

const Landing = () => {
  const[openMenu,setOpenMenu]=useState(false);
  const toggleNavBar=()=>{
    setOpenMenu(true);
  }
  return (
    <div  className='w-full h-full   flex flex-col mx-auto  text-center container'>

{/* <nav className="  absolute flex flex-row top-4 container space-x-[50rem]">
    <img src={Logo} className='w-[8rem] h-[3rem]'/>
    <div className=" lg:flex lg:flex-row lg:space-x-2 hidden ">
    <button className=' text-[#fff] bg-transparent p-3  px-10 rounded-[1.5rem] font-secondfont text-[15px] font-[400] ' >
        About us
      </button>

      <button className=' text-[#000] bg-[#e2d628] p-3  px-10 rounded-[1.5rem] font-secondfont text-[15px] font-[400] ' >
        Talk to us
      </button>



    </div>

    <button className='lg:hidden text-white p-5 bg-[#fff]'>
        ok
      </button>

</nav> */}


 <div className=" lg:flex lg:flex-row mt-[5rem]   w-full h-[40rem]    md:flex md:flex-col ">
  <div className=" flex flex-col mt-[8rem] w-full h-[5rem]   container" >
<h1 className=' lg:text-[#fff] lg:text-left lg:text-[4rem] font-bold text-center text-[2rem] container ml-[40px]'>
End To End<br/>
Product Design &<br/>
Branding Agency
</h1>
<p className='lg:font-secondfont lg:mt-[1rem]  lg:text-left lg: ml-[3rem] text-center mt-[1rem]'> Lepoles Dides is a product design for <br/>early stage startup</p>

 <button className='lg:flex lg:flex-row lg:text-center  lg:w-[18rem] lg:rounded-[6rem] lg:border-[#fff] lg:text-[2rem]lg:mt-[2rem] ml-[6rem]   w-[12rem] h-[5rem] p-[1rem]  border-[#fff] rounded-[4rem] border-[3px] mt-[2rem]' > 
  Learn More <img src={arrow} className='lg:w-[2rem]  lg:ml-[11rem]lg:mt-[10px] w-[30px] ml-[120px]   -mt-[25px]' />
</button>
 
  </div>
  <img src={lepole} className="  lg:w-[40rem]  w-[40rem] h-[40rem] mt-[1rem] ml-[5rem]   " />

</div>


{/* <div className=" flex flex-row space-x-[40rem] mb-[1rem]">
  <img src={Logo} className='w-[8rem] h-[3rem]'/>

  <span className='flex flex-col'>
<p className='text-right font-secondfont'>  Reach us out on</p>
<h1>
hello@lepoledides.com
</h1>
  </span>
</div>
<hr className='mb-[2rem]'/>


<div className=" flex flex-row  justify-between">

  <p>
    2024 Lepole Dides .All Reserved Privacy

  </p>
  <span className='flex  flex-row justify-end space-x-9'>
    <p>
      privacy policy

    </p>
    <p>
      terms and condition

    </p>
    <span className='flex flex-row space-x-2'>
      <img src={x} className='w-4 h-4'/>
      <img src={path} className='w-4 h-4'/>
      <img src={instagram} className='w-4 h-4'/>
      

    </span>
  </span>
</div>
 * */}

      
    </div>
  )
}

export default Landing
