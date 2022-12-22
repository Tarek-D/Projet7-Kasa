import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Default = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Default;
