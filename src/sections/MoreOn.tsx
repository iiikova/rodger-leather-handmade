import React from "react";

const MoreOn = () => {
  return (
    <div className=" ">
      <div className=" text-center">
        <h2 className="uppercase text-1xl pb-2">Більше про</h2>
        <h1 className=" text-2xl font-bold ">Шкіру та Вироби</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
        <div>
          <img
            className="h-80 object-cover mb-6 w-screen hover:grayscale"
            src="https://thumbs.dreamstime.com/b/close-up-shoemaker-working-leather-new-idea-products-small-business-handmade-craft-workshop-156565252.jpg"
            alt="process"
          />
          <p className="font-black text-xl">
            Високоякісна суцільнозерниста шкіра
          </p>
          <p className=" text-gray-500 text-xl">
            Залишайтеся вільними, залишайтеся стильним, залишайтеся зі шкірою.
          </p>
        </div>
        <div>
          <img
            className="h-80 object-cover mb-6 w-screen hover:grayscale"
            src="http://cdn.shopify.com/s/files/1/0609/1636/7523/articles/Handmade-Block-1.jpg?v=1654779316"
            alt="process"
          />
          <p className="font-black text-xl">Дизайнерська винахідлива сумка</p>
          <p className=" text-gray-500 text-xl">
            Винахідлива сумка. Виберіть свою мрію.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoreOn;
