import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import ImageContainer from "@/layouts/ImageContainer";
import { useState } from "react";

const LatestRightSlider = ({ choiceProduct }) => {
    const [swiper, setSwiper] = useState(null);
    return (
        <div className="relative">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                loop={true}
                onSwiper={(swiper) => {
                    setSwiper(swiper);
                }}
                pagination={{
                    el: '.swiper-pagination',
                    clickable: true,
                    renderBullet: (index, className) => {
                        return '<span class="' + className + '">' + " " + '</span>';
                    }
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper max-w-[800px] z-10"
            >
                {
                    choiceProduct.map((product, index) => (
                        <SwiperSlide key={index} className="block relative">
                            <Link href={`/product/${product.slug}`}>
                                <ImageContainer image={product.image} height={460} />
                            </Link>
                            <div className="absolute bottom-0 left-0  w-full p-5 flex flex-col gap-y-5 justify-end items-center mb-10">
                                <Link href={`/category/${product?.category.slug}`}>
                                    <p className="text-SoftWhite uppercase font-semibold text-xs w-fit px-3 py-1 rounded-full bg-DarkGray hover:bg-SoftYellow hover:text-DarkGray transition-all duration-300">
                                        {product?.category.name}
                                    </p>
                                </Link>
                                <Link href={`/product/${product.slug}`}>
                                    <p className="truncate text-wrap text-center overflow-hidden text-2xl hover:text-SoftYellow text-SoftWhite transition-all duration-300">
                                        {product.name}
                                    </p>
                                </Link>
                                <p className="text-SoftWhite text-xs hover:text-SoftYellow transition-all duration-300">
                                    {new Date(product.createdAt).toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                        year: "numeric",
                                    })}
                                </p>
                            </div>

                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className="swiper-pagination bottom-0 absolute z-50 left-1/2 transform -translate-x-1/2 pb-5"
            ></div>
        </div>
    );
}

export default LatestRightSlider;