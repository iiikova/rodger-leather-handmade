import React, { Suspense } from "react";
import Hero from "../sections/Hero";
import ShopCategory from "../sections/ShopCategory";
import SwiperHero from "../components/SwiperHero";
import Loading from "../components/Loading";
import MoreOn from "../sections/MoreOn";
import NewFeatures from "../sections/NewFeatures";
import Reviews from "../sections/Reviews";

const Main = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <SwiperHero />
        <ShopCategory />
        <MoreOn />
        <NewFeatures />
        <Reviews />
      </Suspense>
    </>
  );
};

export default Main;
