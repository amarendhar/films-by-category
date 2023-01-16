import React, { useState } from "react";
import styles from "./styles.scss";

const Tooltip = ({ children, content }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div
      className={styles.container}
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
    >
      {children}
      {isShow && (
        <div className={styles.content}>
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
