import React from "react";
import styles from "./styles.module.css";
import { Heart } from "../../components/icons/Heart.jsx";
export default function VideoPlayerActions() {
  return (
    <aside className={styles.actions}>
      <div className={styles.action}>
        <Heart />
      </div>
      <div className={styles.action}>
        <Heart />
      </div>
      <div className={styles.action}>
        <Heart />
      </div>
    </aside>
  );
}
