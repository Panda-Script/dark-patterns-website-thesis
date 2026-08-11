//app layout of the pages
//navbar
//footer
import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import './uicomponents.css';

const AppLayout = ({ children }) => {
  return (
    <div className="app-layout">
      <Navbar/>

      <main className="app-content">
        {children}
      </main>

      <Footer />
    </div>
    );
};

export default AppLayout;