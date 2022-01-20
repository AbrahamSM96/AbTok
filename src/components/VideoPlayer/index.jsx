import clsx from "clsx";
import React, { useRef, useState } from "react";
import styles from "./styles.module.css";
import VideoDescription from "../VideoDescription";
import VideoPlayerActions from "./VideoPlayerActions";
const SRC =
  "https://v16-webapp.tiktok.com/1d085d13150d5f43290fe00641769ebb/61e5ea39/video/tos/useast2a/tos-useast2a-pve-0068/22d38028952c46c9b64cd5890a4729b6/?a=1988&br=6682&bt=3341&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FRTkag3-I&l=202201171614080102230720350DF9AA18&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3Z4bjQ6ZjdrOTMzNzczM0ApPDdpPGk5ZGU5NzllZzRnNmdgc2YwcjRfc29gLS1kMTZzcy1jMS8vMzQtLzFfYTAyMTA6Yw%3D%3D&vl=&vr=";

export default function VideoPlayer({
  author,
  albumCover,
  description,
  src,
  songTitle,
}) {
  const [playing, setPlaying] = useState(false);
  const video = useRef(null);

  const handlePlay = () => {
    const { current: videoEl } = video;
    playing ? videoEl.pause() : videoEl.play();

    setPlaying(!playing);
  };

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
      <VideoPlayerActions />
      <VideoDescription
        albumCover={albumCover}
        author={author}
        description={description}
        songTitle={songTitle}
      />
    </div>
  );
}
