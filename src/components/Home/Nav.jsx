import React from 'react'
import Logo from '../../assets/Landingpage/image.png'

const Nav = () => {
  return (
    <div className='  ml-[3rem]'>
        <div className=" flex space-x-[45rem]">
        <span>
            <img src={Logo} 
            className='ml-[4rem]'
            />

        </span>

        <div className=" flex  flex-row gap-7 mr-[20rem]">
            <button className='ml-2 bg-white  color text-[#0D0A33] p-[1rem] w-[10rem] hover:bg-[#0D0A33] hover:text-[#fff] text-[20px]' >
                Login
            </button>
            <button className='bg-[#0D0A33] p-[1rem]  w-[10rem] hover:text-[#0D0A33] hover:bg-[#fff] text-[20px]' >
                Login
            </button>

        </div>


        </div>
      
    </div>
  )
}

export default Nav
