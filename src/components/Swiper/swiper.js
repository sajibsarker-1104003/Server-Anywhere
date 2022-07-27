import React,{ useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination,Autoplay} from 'swiper';

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import "./styles.css";
const  Slider=props=> {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        
         <SwiperSlide>{props.image}</SwiperSlide>
                   
        
        
      </Swiper>
    </>
  );
}

export default Slider;

