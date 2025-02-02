import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/testimonials.css';
import Image from 'next/image';
import testpic from '../assets/images/test-pic.png';
import Icons from './icons';


// import './styles.css';

// import required modules
// import { Pagination } from 'swiper/modules';

const Testimonials=()=>{
    return(
       <div className='testimonial-slider relative'>
 <Swiper
        slidesPerView="auto"
        spaceBetween={30}
        centeredSlides={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={{
          nextEl: '.test-button-next',
          prevEl: '.test-button-prev',
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper test-Swiper"
      >
        <SwiperSlide className='test-slide rounded-[20px] bg-clr500 px-[40px] py-[35px] max-w-[440px]'>
        
                    <div className='test-content'>
                        <p>Lectus nunc nisl amet etiam tempus. Mauris nulla volutpat semper dictum convallis vehicula a amet. Odio et scelerisque erat proin quis eget et. Rhoncus pellentesque adipiscing tempus dictumst. Vitae eu egestas euismod ac maecenas imperdiet porta faucibus.</p>
                    </div>
                    <div className='flex gap-4'> 
                        <Image src={testpic} alt='author profile' height={80} width={80} className='rounded-full'/>
                        <div className='flex flex-col '>
                            <p className='text-black text-base font-medium -tracking-[0.16px] mb-0'>Jhon Doe</p>
                            <p className='text-[14px] font-normal -tracking-[0.14px] text-clr800'>Bought a 2-bed apartment in Hillock Green in 2024</p>
                        </div>
                    </div>
           
        </SwiperSlide>
        <SwiperSlide className='test-slide rounded-[20px] bg-clr500 px-[40px] py-[35px] max-w-[440px]'> 
       
                    <div className='test-content'>
                        <p>Lectus nunc nisl amet etiam tempus. Mauris nulla volutpat semper dictum convallis vehicula a amet. Odio et scelerisque erat proin quis eget et. Rhoncus pellentesque adipiscing tempus dictumst. Vitae eu egestas euismod ac maecenas imperdiet porta faucibus.</p>
                    </div>
                    <div className='flex gap-4'> 
                        <Image src={testpic} alt='author profile' height={80} width={80} className='rounded-full'/>
                        <div className='flex flex-col '>
                            <p className='text-black text-base font-medium -tracking-[0.16px] mb-0'>Jhon Doe</p>
                            <p className='text-[14px] font-normal -tracking-[0.14px] text-clr800'>Bought a 2-bed apartment in Hillock Green in 2024</p>
                        </div>
                    </div>
           
            </SwiperSlide>
            <SwiperSlide className='test-slide rounded-[20px] bg-clr500 px-[40px] py-[35px] max-w-[440px]'> 
       
       <div className='test-content'>
           <p>Lectus nunc nisl amet etiam tempus. Mauris nulla volutpat semper dictum convallis vehicula a amet. Odio et scelerisque erat proin quis eget et. Rhoncus pellentesque adipiscing tempus dictumst. Vitae eu egestas euismod ac maecenas imperdiet porta faucibus.</p>
       </div>
       <div className='flex gap-4'> 
           <Image src={testpic} alt='author profile' height={80} width={80} className='rounded-full'/>
           <div className='flex flex-col '>
               <p className='text-black text-base font-medium -tracking-[0.16px] mb-0'>Jhon Doe</p>
               <p className='text-[14px] font-normal -tracking-[0.14px] text-clr800'>Bought a 2-bed apartment in Hillock Green in 2024</p>
           </div>
       </div>

</SwiperSlide>
<SwiperSlide className='test-slide rounded-[20px] bg-clr500 px-[40px] py-[35px] max-w-[440px]'> 
       
                    <div className='test-content'>
                        <p>Lectus nunc nisl amet etiam tempus. Mauris nulla volutpat semper dictum convallis vehicula a amet. Odio et scelerisque erat proin quis eget et. Rhoncus pellentesque adipiscing tempus dictumst. Vitae eu egestas euismod ac maecenas imperdiet porta faucibus.</p>
                    </div>
                    <div className='flex gap-4'> 
                        <Image src={testpic} alt='author profile' height={80} width={80} className='rounded-full'/>
                        <div className='flex flex-col '>
                            <p className='text-black text-base font-medium -tracking-[0.16px] mb-0'>Jhon Doe</p>
                            <p className='text-[14px] font-normal -tracking-[0.14px] text-clr800'>Bought a 2-bed apartment in Hillock Green in 2024</p>
                        </div>
                    </div>
           
            </SwiperSlide>
            <SwiperSlide className='test-slide rounded-[20px] bg-clr500 px-[40px] py-[35px] max-w-[440px]'> 
       
                    <div className='test-content'>
                        <p>Lectus nunc nisl amet etiam tempus. Mauris nulla volutpat semper dictum convallis vehicula a amet. Odio et scelerisque erat proin quis eget et. Rhoncus pellentesque adipiscing tempus dictumst. Vitae eu egestas euismod ac maecenas imperdiet porta faucibus.</p>
                    </div>
                    <div className='flex gap-4'> 
                        <Image src={testpic} alt='author profile' height={80} width={80} className='rounded-full'/>
                        <div className='flex flex-col '>
                            <p className='text-black text-base font-medium -tracking-[0.16px] mb-0'>Jhon Doe</p>
                            <p className='text-[14px] font-normal -tracking-[0.14px] text-clr800'>Bought a 2-bed apartment in Hillock Green in 2024</p>
                        </div>
                    </div>
           
            </SwiperSlide>
            <SwiperSlide className='test-slide rounded-[20px] bg-clr500 px-[40px] py-[35px] max-w-[440px]'> 
       
                    <div className='test-content'>
                        <p>Lectus nunc nisl amet etiam tempus. Mauris nulla volutpat semper dictum convallis vehicula a amet. Odio et scelerisque erat proin quis eget et. Rhoncus pellentesque adipiscing tempus dictumst. Vitae eu egestas euismod ac maecenas imperdiet porta faucibus.</p>
                    </div>
                    <div className='flex gap-4'> 
                        <Image src={testpic} alt='author profile' height={80} width={80} className='rounded-full'/>
                        <div className='flex flex-col '>
                            <p className='text-black text-base font-medium -tracking-[0.16px] mb-0'>Jhon Doe</p>
                            <p className='text-[14px] font-normal -tracking-[0.14px] text-clr800'>Bought a 2-bed apartment in Hillock Green in 2024</p>
                        </div>
                    </div>
           
            </SwiperSlide>
        

        
   <div className='flex justify-center mt-11 gap-2 relative'>
   <button className='test-button-prev text-white bg-btn100 w-14 h-14 flex justify-center items-center  rounded-full hover:bg-clr500 hover:text-btn100 transition duration-300 ease-in-out'><Icons iconName="arrowleft" /></button>
   <button className='test-button-next text-white bg-btn100 w-14 h-14 flex justify-center items-center  rounded-full hover:bg-clr500 hover:text-btn100 transition duration-300 ease-in-out'><Icons iconName="arrowright"/></button>
   </div>
      </Swiper>

       </div>
    )
}

export default Testimonials;
