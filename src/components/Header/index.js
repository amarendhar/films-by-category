import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles";

const Header = () => {
  return (
    <header className={styles.container}>
      <NavLink to={"/"}>Home</NavLink>
    </header>
  );
};

export default Header;