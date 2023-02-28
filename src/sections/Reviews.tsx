import React from "react";
import SwiperCustomers from "../components/SwiperCustomers";

const Reviews = () => {
  return (
    <div>
      <div className=" text-center py-6">
        <h2 className="uppercase text-1xl pb-2">ВІДГУКИ</h2>
        <h1 className=" text-2xl font-black ">Клієнти люблять нас</h1>
      </div>
      <SwiperCustomers/>

    </div>
  );
};

export default Reviews;
