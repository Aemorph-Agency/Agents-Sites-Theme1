import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import uds from '../../assets/images/uds.png';
import floorPlanImage from '../../assets/images/floorplan-image.png';
import '../../styles/floorplans-carousel.css';
// import './styles.css';

// import required modules
// import { Pagination } from 'swiper/modules';


const UdsCarousel=()=>{

    const udsImages=[
            {"caption": "Example Caption 1", 'image': uds },
            {"caption": "Example Caption 2", 'image': uds },
            {"caption": "Example Caption 3", 'image': uds },
            {"caption": "Example Caption 4", 'image': uds }, 
            {"caption": "Example Caption 5", 'image': uds },
    ];


    
    return(
       <div className='testimonial-slider relative'>
  <Swiper
      slidesPerView={"auto"}
      spaceBetween={10}
      navigation={{
        nextEl: '.udsNext',
        prevEl: '.udsPrev',
      }}
      modules={[Navigation]}
      className="mySwiper uds-Swiper"
    >
      {udsImages.map((uds, index) => (
        <SwiperSlide key={index} className='px-5 py-4 rounded-[20px] max-w-[380px]' style={{background:'rgba(78, 95, 129, 0.05)'}}>
            <Image src={uds.image} alt=''/>
            <p className='text-base font-normal leading-[140%] -tracking-[0.16px] text-clr1100 mt-4'>{uds.caption}</p>
        </SwiperSlide>
      ))}
    </Swiper>

       </div>
    )
}

export default UdsCarousel;
