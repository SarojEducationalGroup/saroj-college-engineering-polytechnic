import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export const Layout = ({ children }) => {

  return (
    
    <div className="flex flex-col min-h-screen ">
      {/* Navbar */}
      <Header/>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <main>{children}</main>
      </div>

      {/* Footer */}
      <Footer/>
    </div>
  );
};