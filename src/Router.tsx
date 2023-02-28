// INDEPENDENTS
import { lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
// PAGES ==>
import Root from "./Root";
import Main from "./pages/Main";
import Admin from "./pages/Admin/Admin";
import Login from "./components/Login";
import Form from "./components/Form";
// PAGES children lazy loading routes
const Bags = lazy(() => import("./pages/Shop/Bags"));
const Wallets = lazy(() => import("./pages/Shop/Wallets"));
const Belts = lazy(() => import("./pages/Shop/Belts"));
const Accessories = lazy(() => import("./pages/Shop/Accessories"));
const Favorite = lazy(() => import("./pages/Favorite"));
const Cart = lazy(() => import("./pages/Cart"));
const ShopAll = lazy(() => import("./pages/Shop/ShopAll/ShopAll"));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Main />} />
      <Route path="/shop_all" element={<ShopAll />} />
      <Route path="/bags" element={<Bags />} />
      <Route path="/wallets" element={<Wallets />} />
      <Route path="/belts" element={<Belts />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/favorite" element={<Favorite />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/form" element={<Form />} />
    </Route>
  )
);
