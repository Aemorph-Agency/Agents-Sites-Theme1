import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import testpic from '../../assets/images/test-pic.png';
import floorPlanImage from '../../assets/images/floorplan-image.png';
import '../../styles/floorplans-carousel.css';
// import './styles.css';

// import required modules
// import { Pagination } from 'swiper/modules';



const SitePlanCarousel=({siteplanimages})=>{



    return(
       <div className='siteplan-slider relative'>
              <Swiper
                  slidesPerView={"auto"}
                  spaceBetween={24}
                  navigation={{
                    nextEl: '.sitePlansNext',
                    prevEl: '.sitePlansPrev',
                  }}
                  modules={[Navigation]}
                  className="mySwiper sp-Swiper"
                >
                  {siteplanimages.map((siteplanimg, index) => (
                    <SwiperSlide key={index} className={`sp-slide max-w-[600px]`}>
                          <Image src={siteplanimg.images}/>
                    </SwiperSlide>
                  ))}
                </Swiper>

       </div>
    )
}

export default SitePlanCarousel;
