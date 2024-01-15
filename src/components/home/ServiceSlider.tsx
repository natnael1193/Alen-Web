"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from 'next/Link'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const ServiceSlider = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0)
    const swiperRef = React.useRef();

    React.useEffect(() => {
        const timer = setInterval(() => {
            swiperRef.current?.slideNext()
        }, 5000);
        return () => clearTimeout(timer);
        }, []);

    console.log("currentIndex", currentIndex)

    const imageUrl =
    "bg-[url('https://cdn.pixabay.com/photo/2023/11/22/15/20/books-8405721_1280.jpg')]";
    const image = 'https://cdn.pixabay.com/photo/2023/11/22/15/20/books-8405721_1280.jpg'
    
    return(
        <Swiper
            slidesPerView={1}
            onSlideChange={(state) => setCurrentIndex(state.realIndex)}
            onBeforeInit={(swiper: any) => {
            swiperRef.current = swiper;
        }}
            loop={true}
            effect={'fade'}
            className={"-mt-10 rounded-2xl"}
            >
            {
          [1,2,3,4,5,6]?.map((slides, i) => {
              return(
                  <SwiperSlide key={i} className={"rounded-2xl"}>
                      <div
                          style={{ backgroundImage : `url("${image}")` }}
                          className={"min-h-96 flex items-end w-full bg-cover lg:min-h-48 rounded-2xl z-90"
              }
                          >
                          <div className="w-full px-3 flex flex-row justify-between pb-2">
                              <div className={"text-white flex flex-row space-x-2 items-center"}>
                                  {
                    [1,2,3,4,5,6]?.map((item, index) => {
                        return(
                            <div key={index} className={`bg-white ${index === currentIndex ? 'w-[23px] ' : 'w-[7px] '} h-[7px] rounded-full`}></div>
                            )
                    })}
                              </div>
                              <div className={"text-white flex flex-row"}>
                                  <ArrowBackIosIcon onClick={() => swiperRef.current?.slidePrev()} />
                                  <ArrowForwardIosIcon onClick={() => swiperRef.current?.slideNext()} />
                              </div>
                          </div>
                      </div>
                  </SwiperSlide>
                  )
          })
        }
        </Swiper>
    )
}

export default ServiceSlider