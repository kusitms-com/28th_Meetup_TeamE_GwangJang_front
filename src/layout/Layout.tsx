import { Outlet } from "react-router-dom";

import Footer from "@/components/organisms/Common/Footer";
import Header from "@/components/organisms/Common/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
