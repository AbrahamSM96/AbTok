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
    albumCover: "",
    src: "https://v16-webapp.tiktok.com/1d085d13150d5f43290fe00641769ebb/61e5ea39/video/tos/useast2a/tos-useast2a-pve-0068/22d38028952c46c9b64cd5890a4729b6/?a=1988&br=6682&bt=3341&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FRTkag3-I&l=202201171614080102230720350DF9AA18&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3Z4bjQ6ZjdrOTMzNzczM0ApPDdpPGk5ZGU5NzllZzRnNmdgc2YwcjRfc29gLS1kMTZzcy1jMS8vMzQtLzFfYTAyMTA6Yw%3D%3D&vl=&vr=",
  },
  {
    id: 2,
    author: "Ana",
    description: "lalalalala",
    likes: 111,
    shares: 345,
    comments: 33,
    songTitle: "song-pedrito",
    albumCover: "",
    src: "https://v16-webapp.tiktok.com/1d085d13150d5f43290fe00641769ebb/61e5ea39/video/tos/useast2a/tos-useast2a-pve-0068/22d38028952c46c9b64cd5890a4729b6/?a=1988&br=6682&bt=3341&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FRTkag3-I&l=202201171614080102230720350DF9AA18&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3Z4bjQ6ZjdrOTMzNzczM0ApPDdpPGk5ZGU5NzllZzRnNmdgc2YwcjRfc29gLS1kMTZzcy1jMS8vMzQtLzFfYTAyMTA6Yw%3D%3D&vl=&vr=",
  },
  {
    id: 3,
    author: "Juan",
    description: "lalalalala",
    likes: 111,
    shares: 345,
    comments: 33,
    songTitle: "song-pedrito",
    albumCover: "",
    src: "https://v16-webapp.tiktok.com/1d085d13150d5f43290fe00641769ebb/61e5ea39/video/tos/useast2a/tos-useast2a-pve-0068/22d38028952c46c9b64cd5890a4729b6/?a=1988&br=6682&bt=3341&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FRTkag3-I&l=202201171614080102230720350DF9AA18&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3Z4bjQ6ZjdrOTMzNzczM0ApPDdpPGk5ZGU5NzllZzRnNmdgc2YwcjRfc29gLS1kMTZzcy1jMS8vMzQtLzFfYTAyMTA6Yw%3D%3D&vl=&vr=",
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
