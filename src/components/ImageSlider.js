import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import imgSlide from "../assets/images/image.jpg"
import { Pagination } from "swiper";
const ImageSlider = () => {
  return (
    
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
            <img style={{width:"100%",height:"450px",objectFit:"cover"}} src={imgSlide}/>
        </SwiperSlide>
        <SwiperSlide>
            <img style={{width:"100%",height:"450px",objectFit:"cover"}} src={imgSlide}/>
        </SwiperSlide>
      </Swiper>
  );
};

export default ImageSlider;
