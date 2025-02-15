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
import '../../styles/virtualtours.css';
// import './styles.css';

// import required modules
// import { Pagination } from 'swiper/modules';
import vtButton from '../../assets/images/vt-button.png';


const VirtualToursCarousel=({vtiframes})=>{



    return(
       <div className='vt-slider relative'>
              <Swiper
                  slidesPerView={"auto"}
                  spaceBetween={10}
                  navigation={{
                    nextEl: '.vtNext',
                    prevEl: '.vtPrev',
                  }}
                  modules={[Navigation]}
                  className="mySwiper vt-Swiper"
                >
                  {vtiframes.map((vtiframes, index) => (
                    <SwiperSlide key={index} className={`vt-slide max-w-[400px] relative  rounded-[20px] overflow-hidden`}>
                          <div className='vt-iframe h-[300px]  rounded-[20px] overflow-hidden'>
                            <iframe src={vtiframes.iframe} width="100%" height="100%" frameBorder="0" allowFullScreen></iframe>
                          </div>
                          <div className='vt-overlay absolute top-0 left-0 w-full h-full flex items-center justify-center'>
                              <div className='virtualButton rounded-full flex items-center justify-center'>
                              <Image src={vtButton} alt='vt-button' />
                              </div>
                          </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

       </div>
    )
}

export default VirtualToursCarousel;
