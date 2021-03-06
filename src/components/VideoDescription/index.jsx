import React from "react";
import AlbumDisk from "./AlbumDisk";
import styles from "./styles.module.css";
import SongTicker from "../SongTicker/index";
export default function VideoDescription({
  username,
  description,
  albumCover,
  songTitle,
}) {
  return (
    <footer className={styles.description}>
      <div className={styles.textWrapper}>
        <section>
          <strong>
            <a className={styles.author} href={`/user/${username}`}>
              @{username}
            </a>
          </strong>
        </section>
        <section>
          <p className={styles.text}>{description}</p>
          <SongTicker songTitle={songTitle} />
        </section>
      </div>
      <div>
        <AlbumDisk albumCover={albumCover} />
      </div>
    </footer>
  );
}
