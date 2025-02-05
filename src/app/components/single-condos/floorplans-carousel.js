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


function SlideWidth(imagelength){
    if(imagelength == 1){
        return 'img-base-1';
    }else if(imagelength == 2 ){
        return 'img-base-2';
    }else{
        return 'img-base-3';
    }

}
const FloorPlansCarousel=()=>{

    const floorPlanImages=[
            {"title": "1 bedroom", images: [floorPlanImage, floorPlanImage, floorPlanImage,floorPlanImage,floorPlanImage]},
            {"title": "1 bedroom + Study", images: [floorPlanImage ]},
            {"title": "2 Bedroom", images: [floorPlanImage, floorPlanImage]},
            {"title": "2 bedroom + Study", images: [floorPlanImage, floorPlanImage, floorPlanImage]},
            {"title": "3 bedroom + Study", images: [floorPlanImage, floorPlanImage, floorPlanImage]},
    ];


    const [moreImg, setMoreImg]=useState(false);    

    const handleSeeMoreImage=()=>{
        setMoreImg(true);
    }
    
    return(
       <div className='testimonial-slider relative'>
  <Swiper
      slidesPerView={"auto"}
      spaceBetween={15}
      navigation={{
        nextEl: '.floorPlansNext',
        prevEl: '.floorPlansPrev',
      }}
      modules={[Navigation]}
      className="mySwiper fp-Swiper"
    >
      {floorPlanImages.map((plan, index) => (
        <SwiperSlide key={index} className={`fp-slide rounded-[20px] py-[18px] px-5 ${SlideWidth(plan.images.length)} `}>
          <p className='mb-[15px] text-base font-normal leading-[100%] -tracking-[0.32px]'>{plan.title}</p>
          <div className={`floorPlans-Gallery flex flex-wrap ${plan.images.length > 4 ? 'moreimage' : ''} ${moreImg ? 'imageviewed' : 'imagehidden'}  `}>
            {plan.images.map((image, imgIndex) => (
              <div key={imgIndex} className='gal-image transition duration-300 ease-in-out relative'>
                <Image src={image} alt='floor plan' />
                {
                    plan.images.length > 4 && imgIndex == 2 ? 
                    (
                        <button onClick={handleSeeMoreImage} className='moreimglabel absolute left-0 top-0 w-full h-full z-10 flex items-center justify-center'>
                    +3
                </button>
                    ) : ''

                }
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

       </div>
    )
}

export default FloorPlansCarousel;
