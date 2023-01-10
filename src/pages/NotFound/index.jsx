import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => (
  <div>
    <div>Page Not Found</div>
    <NavLink to="/" className="selected">
      Go Back
    </NavLink>
  </div>
);

export default NotFound;
