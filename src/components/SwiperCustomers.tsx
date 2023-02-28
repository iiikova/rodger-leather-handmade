import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


const SwiperCustomers = () => {
    return (
        <div className=" ">
            <Swiper
                className="swiper"
                modules={[Autoplay]}
                autoplay={true}
                slidesPerView={2}
                spaceBetween={30}
                breakpoints={{
                    425: {
                        width: 425,
                        slidesPerView: 1,
                    },
                    768: {
                        width: 768,
                        slidesPerView: 2,
                    },
                    1024: {
                        width: 1024,
                        slidesPerView: 2,
                    },
                    1440: {
                        width: 1440,
                        slidesPerView: 3,
                    },
                    2560: {
                        width: 2560,
                        slidesPerView: 3,
                    },
                }}
            >
                <SwiperSlide >
                    <div className=" bg-slate-100 ">
                        <img className="customer "
                            src="https://images.businessnewsdaily.com/app/uploads/2022/04/04074357/Stressed-frustrated-customer-call_fizkes.png"
                            alt="customer"
                        />
                    </div>
                    <div className="text-left bg-white p-9">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis similique saepe incidunt porro perferendis enim eligendi earum commodi tenetur molestiae.</p>
                        <h3 className="font-bold pt-6">first name last name</h3>
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className="bg-slate-100">
                        <img className="customer "
                            src="https://assets.keap.com/image/upload/b_rgb:FFFFFF,c_limit,dpr_2,f_auto,h_395,q_95,w_569/v1580581724/customer-service/customer%20experience/GettyImages-1125572460.jpg"
                            alt="customer"
                        />
                    </div>
                    <div className="text-left bg-white p-9">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis similique saepe incidunt porro perferendis enim eligendi earum commodi tenetur molestiae.</p>
                        <h3 className="font-bold pt-6">first name last name</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="bg-slate-100">
                        <img className="customer"
                            src="https://broadly.com/wp-content/uploads/2020/11/difficult-customers-on-the-phone.jpg"
                            alt="customer"
                        />
                    </div>
                    <div className="text-left bg-white p-9">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis similique saepe incidunt porro perferendis enim eligendi earum commodi tenetur molestiae.</p>
                        <h3 className="font-bold pt-6">first name last name</h3>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default SwiperCustomers;
