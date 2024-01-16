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
import GetAppButton from "../shared/GetAppButton";


const Slider = () => {
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
    className={"z-0"}
    >
    {
          [1,2,3,4,5,6]?.map((slides, i) => {
            return(
              <SwiperSlide key={i} className={""}>
                <div
                  style={{ backgroundImage : `url("${image}")` }}
                  className={"min-h-96 flex items-end w-full bg-cover bg-no-repeat lg:min-h-[50rem]"
              }
                  >
                  <div className="pb-5 w-full px-3 flex flex-row justify-between lg:pb-10">
                    <div className={"hidden text-white lg:flex lg:flex-row space-x-2 items-center font-montserrat text-[56px] lg:visible"}>
                      <div className="invisible lg:visible">
                        You can Earn Extra - <br/>
                        Become a service provider</div>
                    </div>

                    <div className={"visible text-white flex flex-row space-x-2 items-center font-montserrat text-[36px] lg:hidden"}>
                      <div className="">
                        <GetAppButton name={"Get the App"} url={"llll"}/>
</div>
                    </div>
                    <div className={"text-white flex flex-row space-x-3 lg:mt-20"}>
                      <div className="w-16 h-16 flex justify-center  items-center border-[1px] border-white rounded-full">
                        <ArrowBackIosIcon onClick={() => swiperRef.current?.slidePrev()} />
                      </div>
                      <div className="w-16 h-16 flex justify-center  items-center border-[1px] border-white rounded-full">
                        <ArrowForwardIosIcon onClick={() => swiperRef.current?.slideNext()} />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              )
          })
        }
  </Swiper>);
};

export default Slider;
