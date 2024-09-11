import Image from "next/image";
import Container from "../Container";
import { MoveLeft, MoveRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper/modules';
import { useRef, useState, useEffect } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import api from "@/helpers/api";
import Link from "next/link";

const Trending = () => {
    const [trendings, setTrendings] = useState([]);

    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)

    const getTrendings = async () => {
        const { list, count } = await api.get('blog:getAll?filter.trend=true');
        if (list) {
            setTrendings(list);
        }
    }

    useEffect(() => {
        getTrendings();
    }, []);

    return (
        <div className="py-6 z-10 hidden lg:block">
            <Container>
                <div className="flex justify-between items-center">
                    <div className="flex gap-x-2.5">
                        <Image
                            src="/svg/trending.svg"
                            alt="Trending"
                            width={12}
                            height={12}
                        />
                        <span className="text-[14px] text-DarkGray font-bold">TRENDING</span>
                    </div>
                    <div>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            loop={true}
                            navigation={{
                                prevEl: navigationPrevRef.current,
                                nextEl: navigationNextRef.current,
                            }}
                            onInit={(swiper) => {
                                swiper.params.navigation.prevEl = navigationPrevRef.current;
                                swiper.params.navigation.nextEl = navigationNextRef.current;
                                swiper.navigation.init();
                                swiper.navigation.update();
                            }}

                            modules={[Autoplay, Navigation]}
                            className="mySwiper max-w-[800px] z-10"
                        >
                            {
                                trendings.map((trending, index) => (
                                    <SwiperSlide key={index} className="block">
                                        <Link href={`/blog/${trending.slug}`}>
                                        <p className="truncate text-ellipsis overflow-hidden hover:text-SoftYellow text-DarkGray transition-all duration-300">
                                            {trending.title}
                                        </p>
                                        </Link>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                    {/* Oklar */}
                    <div className="flex gap-x-2.5">
                        <div
                            ref={navigationPrevRef}
                            className="cursor-pointer">
                            <MoveLeft size={20} />
                        </div>
                        <div
                            ref={navigationNextRef}
                            className="cursor-pointer">
                            <MoveRight size={20} />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Trending;