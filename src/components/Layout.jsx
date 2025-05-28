import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import TopHeader from "./TopHeader";
import PopupForm from "./PopUpForm";

export const Layout = ({ children }) => {

  return (
    
    <div className="flex flex-col min-h-screen ">
      <PopupForm/>
      <TopHeader/>
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