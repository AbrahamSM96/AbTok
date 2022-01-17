import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
const SRC =
  "https://v16-webapp.tiktok.com/d90971ecc0eb99c4a3d55f9770f910ae/61e55be2/video/tos/useast2a/tos-useast2a-ve-0068c003/88dd3f3bf15e4f7d8242d29cf5379242/?a=1988&br=5120&bt=2560&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FRTkag3-I&l=2022011706053001019216203824BEBB3A&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anBrcTQ6ZnBmOjMzNzczM0ApZTxkaWU6OGRpNzU3ZWg7PGdtcTItcjRvMzVgLS1kMTZzczRfMjBeYmAtYGEuLjAwYWM6Yw%3D%3D&vl=&vr=";

export default function index() {
  const [playing, setPlaying] = useState(false);
  const video = useRef();
  const handlePlay = () => {
    if (playing) {
      video.current.pause();
    } else {
      video.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div>
      <video
        ref={video}
        className={styles.video}
        src={SRC}
        controls={false}
      ></video>
      <button className={styles.player} onClick={handlePlay}></button>
    </div>
  );
}
