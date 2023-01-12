import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components";
import styles from "./layoutStyles.scss";

const Layout = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
