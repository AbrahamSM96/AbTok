import React from "react";
import VideoPlayer from "../VideoPlayer";
import styles from "./styles.module.css";
const VIDEOS = [
  {
    id: 1,
    author: "Abraham",
    description: "lalalalala",
    likes: 111,
    shares: 345,
    comments: 33,
    songTitle: "song-pedrito",
    albumCover:
      "https://i.pinimg.com/originals/aa/22/0d/aa220d9cf0029f53689d030c4aa44a37.jpg",
    src: "https://v16-webapp.tiktok.com/3d0ad4e3073ac3492c66af3f38b78759/61e90963/video/tos/useast2a/tos-useast2a-ve-0068c003/dda3652a0aac4af3a9ed185f55aa5764/?a=1988&br=1632&bt=816&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FRTkag3-I&l=202201200103530102230650220D179F72&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzs6cjY6Zmc6OjMzNzczM0ApPDRnNWdlOztoN2c7OjNmM2draC5gcjRnMmhgLS1kMTZzc15hYTE2LS8tNl5fX2IwNTI6Yw%3D%3D&vl=&vr=",
  },
  {
    id: 2,
    author: "Ana",
    description: "lalalalala",
    likes: 111,
    shares: 345,
    comments: 33,
    songTitle: "song-pedrito",
    albumCover:
      "https://e.snmc.io/i/600/s/1b7f901dc631d6517431f26076abd33a/8937940/panda-amantes-sunt-amentes-Cover-Art.jpg",
    src: "https://v16-webapp.tiktok.com/3d0ad4e3073ac3492c66af3f38b78759/61e90963/video/tos/useast2a/tos-useast2a-ve-0068c003/dda3652a0aac4af3a9ed185f55aa5764/?a=1988&br=1632&bt=816&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FRTkag3-I&l=202201200103530102230650220D179F72&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzs6cjY6Zmc6OjMzNzczM0ApPDRnNWdlOztoN2c7OjNmM2draC5gcjRnMmhgLS1kMTZzc15hYTE2LS8tNl5fX2IwNTI6Yw%3D%3D&vl=&vr=",
  },
  {
    id: 3,
    author: "Juan",
    description: "lalalalala",
    likes: 111,
    shares: 345,
    comments: 33,
    songTitle: "song-pedrito",
    albumCover:
      "https://upload.wikimedia.org/wikipedia/en/9/91/Panda-Para_Ti_Con_Desprecio-Fronta.jpg",
    src: "https://v16-webapp.tiktok.com/3d0ad4e3073ac3492c66af3f38b78759/61e90963/video/tos/useast2a/tos-useast2a-ve-0068c003/dda3652a0aac4af3a9ed185f55aa5764/?a=1988&br=1632&bt=816&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FRTkag3-I&l=202201200103530102230650220D179F72&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzs6cjY6Zmc6OjMzNzczM0ApPDRnNWdlOztoN2c7OjNmM2draC5gcjRnMmhgLS1kMTZzc15hYTE2LS8tNl5fX2IwNTI6Yw%3D%3D&vl=&vr=",
  },
];

export default function FeedVideos() {
  return VIDEOS.map((video) => {
    return (
      <div key={video.id} className={styles.item}>
        <VideoPlayer {...video} />;
      </div>
    );
  });
}
