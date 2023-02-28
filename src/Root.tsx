import { Outlet } from "react-router-dom";

// components
import Header from "./sections/Header";
import Footer from "./sections/Footer";

const Root = () => {
  return (
    <div className="mx-auto px-2">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
