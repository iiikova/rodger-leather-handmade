import React from "react";

const NewFeatures = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  py-6 ">
      <div className=" bg-[#4a3d35] text-[#fff] p-9 text-xl grid place-content-center h-80">
        <h2 className="pb-2 uppercase">ПРЕДСТАВЛЯЄМО НОВІ ОСОБЛИВОСТІ</h2>
        <p className="pb-6 font-black">Утилітарне взуття</p>
        <p>
          Персоналізований шкіряний гаманець ретельно розроблений з
          використанням єдиного відрізу складеної італійської шкіри.
        </p>
      </div>
      <div>
        <img
          className=" object-cover h-80 w-screen"
          src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2016/1/26/1/iStock_000040409044_Cleaning-Mens-Leather-Boots.jpg.rend.hgtvcom.1280.960.suffix/1453854902157.jpeg"
          alt="shoes"
        />
      </div>
    </div>
  );
};

export default NewFeatures;
