import React from "react";
import c from "classnames";
import styles from "./AppStyles";

const App = () => {
  return (
    <div>
      <h1 className={c(styles.heading)}>Films by Category</h1>
    </div>
  );
};

export default App;
