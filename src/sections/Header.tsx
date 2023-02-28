import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CgMenu } from 'react-icons/cg';
// images
import logo from '../assets/images/logo.png';
import { GrFavorite, GrShop } from 'react-icons/gr';

// styles
import '../index.scss';


const Header = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center  py-4  uppercase ">
      <div className=" flex  items-center">
        <div className="flex items-center  gap-4">
          <NavLink to="/">
            <img
              className="h-8"
              src={logo}
              alt="logo"
            />
          </NavLink>
          <div className={"flex md:hidden"}>
            <CgMenu className="text-3xl" />
          </div>
        </div>
      </div>

      <nav className={"hidden md:flex"}>
        <div className="flex gap-6  ">
          <NavLink to="/shop_all">каталог</NavLink>
          <NavLink to="/bags">сумки</NavLink>
          <NavLink to="/wallets">гаманці</NavLink>
          <NavLink to="/belts">ремені</NavLink>
          <NavLink to="/accessories">Аксесуари</NavLink>
        </div>
      </nav>

      <div className="flex items-center gap-4 text-xl">
        <GrFavorite onClick={() => navigate("/favorite")} />
        <GrShop onClick={() => navigate("/cart")} />
      </div>
    </div>
  );
};

export default Header;
