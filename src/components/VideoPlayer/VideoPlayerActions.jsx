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
  username,
  avatar,
}) {
  const handleLike = () => {
    alert("like");
  };
  const handleComment = () => {};
  const handleShare = () => {};
  return (
    <aside className={styles.actions}>
      <div className={styles.user}>
        <img alt={username} src={avatar} />
        <img
          src="https://sf16-scmcdn-va.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/test-2e6dd40439e72f09a8193e27cb3e0c51.svg"
          width="24"
        />
      </div>
      <button className={styles.action} onClick={handleLike}>
        <Heart width="45" />
        <span title="like">{likes}</span>
      </button>
      <button className={styles.action} onClick={handleComment}>
        <Comment width="45" />
        <span title="comments">{comments}</span>
      </button>
      <button className={styles.action} onClick={handleShare}>
        <Share width="45" />
        <span title="shares">{shares}</span>
      </button>
    </aside>
  );
}
