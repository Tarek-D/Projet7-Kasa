import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

// Just header and outlet 
const Default = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Default;
