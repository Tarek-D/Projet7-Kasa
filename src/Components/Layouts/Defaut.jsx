import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer"

const Default = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Default;