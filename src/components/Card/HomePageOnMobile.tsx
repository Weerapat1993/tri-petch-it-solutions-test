'use client'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/pagination";
import './styles.scss'
import Content01 from '../Content/Content01';
import Content02 from '../Content/Content02';
import Content03 from '../Content/Content03';
import Content04 from '../Content/Content04';
import Content05 from '../Content/Content05';
import Content06 from '../Content/Content06';
import { Fragment } from 'react';

const CardSimple = () => {
  return (
    <div>
      <h1 className="font-header">ATHLETS</h1>
      <div className="h-480">
        <img src="/assets/images/footballer.png" className="footballer-mobile" />
      </div>
      <div className="h-480 w-full bg-secondary pt-50">
        <Swiper
          // install Swiper modules
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <div className="p-8">
              <Content01 isMobile />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-8">
              <Content02 />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-8">
              <Content03 />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <h1 className="font-header">PLAYERS</h1>
      <div className="h-240 relative">
        <img src="/assets/images/bastketballer.png" className="basketballer-mobile" />
      </div>
      <div className="h-360 w-full bg-secondary pt-50">
        <Swiper
          // install Swiper modules
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <div className="p-8">
              <Content04 isMobile />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-8">
              <Content05 />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-8">
              <Content06 />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}


export default CardSimple;



