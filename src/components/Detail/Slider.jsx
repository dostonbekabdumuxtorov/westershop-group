import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './slider.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function Slider({pics}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className='big-slider'>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {
          pics?.map((item,index)=>(
            <SwiperSlide>
              <img src={"https://backoffice.samarashop.uz" + item.photo} />
            </SwiperSlide>
          ))
        }
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {
          pics?.map((item,index)=>(
            <SwiperSlide style={{border:'1px solid gainsboro'}}>
              <img src={"https://backoffice.samarashop.uz" + item.photo} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
}
