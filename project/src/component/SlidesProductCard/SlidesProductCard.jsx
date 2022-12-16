import React, { useRef, useState } from "react";
import styles from './styles/slidescard.module.scss'
import { NavLink } from "react-router-dom";
import Cart from "../Cart/Cart";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";


const SlidesProductCard = () => {

    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    return (
        <div className={styles.specialPost} >
            <div className={styles.action}>
                <div className={styles.pre} ref={navigationPrevRef} ><i className="fa-solid fa-angle-left" /></div>
                <div className={styles.next} ref={navigationNextRef} > <i className="fa-solid fa-angle-right" /></div>
            </div>

            <Swiper
                slidesPerView={6}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}

                modules={[Navigation]}
                className="mySwiperHotel"
                navigation={{
                    // Both prevEl & nextEl are null at render so this does not work
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                onSwiper={(swiper) => {
                    // Delay execution for the refs to be defined
                    // Override prevEl & nextEl now that refs are defined
                    let a = swiper.params.navigation;
                    a.prevEl = navigationPrevRef.current;
                    a.nextEl = navigationNextRef.current;
                    swiper.navigation.destroy()
                    swiper.navigation.init()
                    swiper.navigation.update()
                }}
            >
                <SwiperSlide><Cart /></SwiperSlide>
                <SwiperSlide><Cart /></SwiperSlide>
                <SwiperSlide><Cart /></SwiperSlide>
                <SwiperSlide><Cart /></SwiperSlide>
                <SwiperSlide><Cart /></SwiperSlide>
                <SwiperSlide><Cart /></SwiperSlide>

            </Swiper>

        </div>
    )
}

export default SlidesProductCard