import React from "react";
import Nav from "./NavBarResponsive/Nav";
import Footer from "./Footer";

const PageContainer = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>

  );
};

export default PageContainer;