import React from "react";
import styles from "./styles.module.css";
import { Heart } from "../../components/icons/Heart.jsx";
import { Share } from "../../components/icons/Share.jsx";
import { Comment } from "../../components/icons/Comment.jsx";
export default function VideoPlayerActions({
  likes = 2041,
  comments = 333,
  shares = 13,
  hearted = false,
}) {
  return (
    <aside className={styles.actions}>
      <div className={styles.action}>
        <Heart />
        <strong title="like">{likes}</strong>
      </div>
      <div className={styles.action}>
        <Comment />
        <strong title="comments">{comments}</strong>
      </div>
      <div className={styles.action}>
        <Share />
        <strong title="shares">{shares}</strong>
      </div>
    </aside>
  );
}
