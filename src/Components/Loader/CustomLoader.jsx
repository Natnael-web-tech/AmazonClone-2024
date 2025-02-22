import React from "react";
import styles from "./CustomLoader.module.css";
import amazonLogo from "../../assets/amazon_PNG11.png"; // Add your Amazon logo image

function CustomLoader() {
  return (
    // <div className={styles.loader_container}>
    //   <img
    //     src={amazonLogo}
    //     alt="Amazon Logo"
    //     className={styles.spinning_zooming_logo}
    //   />
    // </div>

     <div className={styles.fade_text}>
      <span className={`${styles.word} ${styles.word1}`}>እየመጣሁ</span>
      
      <span className={`${styles.word} ${styles.word2}`}>ነው</span>
    </div>
  );
}

export default CustomLoader;
