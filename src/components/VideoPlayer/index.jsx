import clsx from "clsx";
import { useRef } from "react";
import styles from "./styles.module.css";
import VideoDescription from "../VideoDescription";
import VideoPlayerActions from "./VideoPlayerActions";
import useIntersectionVideoPlayer from "../../hooks/useIntersectionVideoPlayer";

export default function VideoPlayer({
  username,
  albumCover,
  description,
  src,
  songTitle,
  avatar,
}) {
  const video = useRef(null);
  const { handlePlay, playing } = useIntersectionVideoPlayer({ video });

  const playerClassName = clsx(styles.player, {
    [styles.hidden]: playing,
  });

  return (
    <div className={styles.wrapper}>
      <video
        ref={video}
        className={styles.video}
        src={src}
        controls={false}
        onClick={handlePlay}
        loop
      />
      <i className={playerClassName}></i>
      <VideoPlayerActions avatar={avatar} username={username} />
      <VideoDescription
        albumCover={albumCover}
        username={username}
        description={description}
        songTitle={songTitle}
      />
    </div>
  );
}
