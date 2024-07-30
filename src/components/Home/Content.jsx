import React from 'react'
import {useEffect} from 'react'

import AOS from 'aos'

import image from '../../assets/Landingpage/man.png'


const Content = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 900,
      easing: 'ease-in-sine',
      delay: 100,
    });
  },[]);

  return (
    <div className='flex flex-row   gap-[5rem]'>
      <div className="flex-col space-y-6 ml-[6rem] mt-[10rem] "  data-aos="fade-left">
        <p className='font-normal text-[64px] leading-[70px] text-[#F5EAEA] font-myfont'>FINANCIAL <br/>
        DREAMS? MAKE <br/>
        THEM REAL</p>
        <p className="font-secondfont font-normal text-[20px] leading-[27.8px] ">
        How? we make you set goals for your money and a<br/> plan to reach them. Let some elegance into your <br/>Income!
        </p>

        <button className='border-[#fff] p-[1rem] w-[10rem] rounded-xl border-[6px]' >
          Get Started
        </button>

      </div>
      <div className=""  data-aos="fade-right">
        <img src={image}
        className='w-[50rem] h-[50rem]'
        />


      </div>



      
    </div>
  )
}

export default Content
