import React, { Component,useRef, useState } from 'react'
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../../Styles/style.css"


// import required modules
import { Pagination } from "swiper";

export class Slider extends Component {
  render() {
    return (
      <div className='swiper-container'>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.5": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          "@1.00": {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          "@1.25": {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="after-text">
          <h2 className='title'>Product Design</h2>
          <h3 className='subtitle'>Design/Marketing</h3>
          </div>
          <img src="https://gentium.pixerex.com/wp-content/uploads/2019/01/03-min-1-1024x683.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <div className="after-text">
          <h2 className='title'>Woody</h2>
          <h3 className='subtitle'>Architecture/Design</h3>
          </div>
          <img src="https://gentium.pixerex.com/wp-content/uploads/2019/01/04-min-1-1024x683.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <div className="after-text">
          <h2 className='title'>Product Design</h2>
          <h3 className='subtitle'>Design/Marketing</h3>
          </div>
          <img src="https://gentium.pixerex.com/wp-content/uploads/2019/01/07-min-1024x683.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <div className="after-text">
          <h2 className='title'>Product Design</h2>
          <h3 className='subtitle'>Design/Marketing</h3>
          </div>
          <img src="https://gentium.pixerex.com/wp-content/uploads/2019/01/05-min-1-1024x683.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <div className="after-text">
          <h2 className='title'>Product Design</h2>
          <h3 className='subtitle'>Design/Marketing</h3>
          </div>
          <img src="https://gentium.pixerex.com/wp-content/uploads/2019/01/02-min-1-1024x683.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
               <div className="after-text">
          <h2 className='title'>Product Design</h2>
          <h3 className='subtitle'>Design/Marketing</h3>
          </div>
          <img src="https://gentium.pixerex.com/wp-content/uploads/2019/01/08-min-683x1024.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
    )
  }
}

export default Slider