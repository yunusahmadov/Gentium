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
export class Slider2 extends Component {
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
          <div className="after-text2">
          <h2 className='title'>CAREERS</h2>
          <h3 className='subtitle'>Winning tactics for a new digital agency</h3>
          <i class="fa-solid fa-arrow-right swiper-arrow"></i>
          </div>
          <img src="https://gentium.pixerex.com/wp-content/uploads/2019/01/01-min.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <div className="after-text2">
          <h2 className='title'>Design/UX</h2>  
          <h3 className='subtitle'>How to drive your customer experience</h3>
          <i class="fa-solid fa-arrow-right swiper-arrow"></i>
          </div>
          <img src="https://gentium.pixerex.com/wp-content/uploads/2019/01/03-min.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <div className="after-text2">
          <h2 className='title'>CAREERS</h2>
          <h3 className='subtitle'>Design/Marketing</h3>
          <i class="fa-solid fa-arrow-right swiper-arrow"></i>
          </div>
          <img src="https://gentium.pixerex.com/wp-content/uploads/2019/01/05-min.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <div className="after-text2">
          <h2 className='title'>Product Design</h2>
          <h3 className='subtitle'>Design/Marketing</h3>
          <i class="fa-solid fa-arrow-right swiper-arrow"></i>
          </div>
          <img src="https://gentium.pixerex.com/wp-content/uploads/2019/01/04-min.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <div className="after-text2">
          <h2 className='title'>Product Design</h2>
          <h3 className='subtitle'>Design/Marketing</h3>
          <i class="fa-solid fa-arrow-right swiper-arrow"></i>
          </div>
          <img src="https://gentium.pixerex.com/wp-content/uploads/2019/01/02-min.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
               <div className="after-text2">
          <h2 className='title'>Product Design</h2>
          <h3 className='subtitle'>Design/Marketing</h3>
          <i class="fa-solid fa-arrow-right swiper-arrow"></i>
          </div>
          <img src="https://gentium.pixerex.com/wp-content/uploads/2019/01/08-min-683x1024.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
    )
  }
}

export default Slider2