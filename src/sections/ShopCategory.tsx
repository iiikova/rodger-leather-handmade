import React from "react";
import { useNavigate } from "react-router-dom";

const ShopCategory = () => {
  // grid category
  const colImg = "object-cover w-full h-80 lg:h-96 bg-slate-300";
  const colDiv1 = "md:col-span-1 relative";
  const colDiv2 = "md:col-span-2 relative";
  const colMain = " md:col-span-3 relative";
  const div =
    "absolute flex items-center justify-center inset-y-3/4 -translate-y-3/4 -translate-x-2/4 inset-x-2/4 bg-slate-100";
  const btn = "bg-slate-100 hover:bg-slate-50 rounded-md py-4 px-10 uppercase";


  // hooks
  const navigate = useNavigate();

  return (
    <div className=" grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-2 py-6">
      <div className={colDiv1}>
        <img
          className={colImg}
          src={
            "https://media.istockphoto.com/id/477845256/photo/generic-brown-leather-bag.jpg?s=612x612&w=0&k=20&c=OLAGPNJXR9D8kSbPiG9_JLV9ozK1cFtCWZ3bBuewvOI="
          }
          alt="bags"
        />
        <div className={div}>
          <button className={btn} onClick={() => navigate("/bags")}>
            сумки
          </button>
        </div>
      </div>
      <div className={colDiv2}>
        <img
          className={colImg}
          src={
            "https://i.etsystatic.com/24829757/r/il/9bc112/3238327931/il_fullxfull.3238327931_aq5t.jpg"
          }
          alt="belts"
        />
        <div className={div}>
          <button className={btn} onClick={() => navigate("/bags")}>
            ремені
          </button>
        </div>
      </div>
      <div className={colMain}>
        <img
          className={colImg}
          src="https://images.squarespace-cdn.com/content/v1/5b72f6fb8f513093f9160ed1/1534263494823-PKD2X0SIBAZ0PCM99JR4/AdobeStock_162486659.jpeg?format=1500w"
          alt="shop all"
        />
        <div className="absolute  box-content flex items-center rounded-md justify-center inset-y-3/4 -translate-y-3/4 -translate-x-0 inset-x-0    bg-slate-100 ">
          <button
            className=" bg-slate-100 hover:bg-slate-50 rounded-md py-4 px-24 uppercase"
            onClick={() => navigate("/shop_all")}
          >
            каталог
          </button>
        </div>
      </div>
      <div className={colDiv2}>
        <img
          className={colImg}
          src="https://i.etsystatic.com/13457499/r/il/fd46f6/2067637978/il_fullxfull.2067637978_5imi.jpg"
          alt="wallets"
        />
        <div className={div}>
          <button className={btn} onClick={() => navigate("/wallets")}>
            гаманці
          </button>
        </div>
      </div>
      <div className={colDiv1}>
        <img
          className={colImg}
          src="https://cdn.shopify.com/s/files/1/0653/3919/files/AirTag-Accessories_1000x.jpg"
          alt="accessories"
        />
        <div className={div}>
          <button className={btn} onClick={() => navigate("/accessories")}>
            Аксесуари
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
