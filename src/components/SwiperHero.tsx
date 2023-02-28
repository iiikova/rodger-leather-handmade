import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

const SwiperHero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <Swiper className="mySwiper pb-6" modules={[Autoplay]} autoplay={true}>
        <SwiperSlide>
          <img
            src="http://www.loveyourclothes.org.uk/sites/default/files/Leather_original_476136478.jpg"
            alt="hero"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://maclaceleather.com.au/wp-content/uploads/2022/09/2200039_211-MacLaceLeather-for-Website.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNuNtN0zKBZgDtvCTU_cCP2p-0x49-ZXKEeQ&usqp=CAU"
            alt="hero"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.shopify.com/s/files/1/0790/3829/products/edit-craftnlore-leather-belt-handmade-durable-rugged-pnw-quality-american-7406424_1000x1000.jpg?v=1654541131"
            alt="hero"
          />
        </SwiperSlide>
      </Swiper>
      <div className="absolute flex items-center justify-center inset-y-3/4 -translate-y-3/4 -translate-x-2/4 inset-x-2/4 bg-slate-100 z-10">
        <button
          className="bg-slate-100 hover:bg-slate-50 rounded-md py-4 px-10 uppercase "
          onClick={() => navigate("/form")}
        >замовити</button>
      </div>
    </div>

  );
};

export default SwiperHero;
