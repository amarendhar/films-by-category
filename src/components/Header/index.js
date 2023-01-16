import React from "react";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "store/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { selectWishlist } from "store/slices/wishlistSlice";
import styles from "./styles.scss";

const Header = () => {
  const { wishlistItems } = useAppSelector(selectWishlist);

  return (
    <header className={styles.container}>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/wishlist"}>
        <FontAwesomeIcon
          icon={faHeart}
          size="lg"
          color="white"
          title="wishlist"
        />
        {wishlistItems.length > 0 && <span>&nbsp;({wishlistItems.length})</span>}
      </NavLink>
    </header>
  );
};

export default Header;
