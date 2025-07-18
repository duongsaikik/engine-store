"use client";

import { initialProducts } from "@/libs/data";
import { Product } from "@/types";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductItem from "./ProductItem";

const Banner = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const renderProduct = (product: Product) => (
    <SwiperSlide key={product.id} className="!flex justify-center items-center">
      <ProductItem product={product} />
    </SwiperSlide>
  );

  return (
    <div className="mb-[32px]">
      <Image src="/banner.jpg" width={1536} height={500} alt="banner" />
      <div className="bg-buttonBg rounded-br-[12px] rounded-bl-[12px] sm:p-[48px] p-[12px] relative">
        {domLoaded && (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
              1540: { slidesPerView: 5 },
            }}
            autoplay={{ delay: 3000, stopOnLastSlide: false }}
            className="mx-auto"
          >
            {initialProducts.map(renderProduct)}
          </Swiper>
        )}
        <div>
          <button
            className="absolute text-red-400 top-1/2 left-[25px] -translate-y-1/2 size-[40px] bg-bannerNavBg rounded-full row z-[9]"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <SlArrowLeft size={16} color="#013065" />
          </button>
          <button
            className="absolute top-1/2 right-[25px] -translate-y-1/2 text-red-400 size-[40px] bg-bannerNavBg rounded-full row z-[9]"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <SlArrowRight size={16} color="#013065" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Banner;
