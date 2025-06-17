import React, { Suspense } from "react";
import { Outlet } from "react-router";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import Loading from "../Pages/Loading";

const RootLayout = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      
        <Suspense fallback={<Loading />}>
          <Outlet></Outlet>
        </Suspense>
        
      
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
