import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "components";
import styles from "./styles.scss";

const NotFound = () => (
  <div data-testid="not-found" className={styles.container}>
    <h2>Page Not Found</h2>
    <NavLink to="/" className="selected">
      <Button>Go Back</Button>
    </NavLink>
  </div>
);

export default NotFound;
