import React from "react";
import styles from "./styles.scss";

const Loader = ({ loading, error }) => {
  if (!loading && !error) {
    return null;
  }

  return (
    <div className={styles.container}>
      {loading ? (
        <div data-testid="loading" className={styles.loading} />
      ) : (
        <div data-testid="error" className={styles.error}>
          {error}
        </div>
      )}
    </div>
  );
};

export default Loader;
