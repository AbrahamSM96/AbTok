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
    src: "https://v16-webapp.tiktok.com/46754d584e8e56a9a48e946888bf15ac/61e909a7/video/tos/maliva/tos-maliva-ve-0068c799-us/798f2f0087a24cb1a89181bb647d6372/?a=1988&br=2588&bt=1294&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FRTkag3-I&l=202201200103530102230650220D179F72&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzs7eTs6ZndnOTMzZzczNEApOTg2Ozo4N2U1NzYzZzU4Z2dmYTVlcjQwYjJgLS1kMS9zcy1iMF9hXmE0MDYuMC9fMWI6Yw%3D%3D&vl=&vr=",
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
    src: "https://v16-webapp.tiktok.com/46754d584e8e56a9a48e946888bf15ac/61e909a7/video/tos/maliva/tos-maliva-ve-0068c799-us/798f2f0087a24cb1a89181bb647d6372/?a=1988&br=2588&bt=1294&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FRTkag3-I&l=202201200103530102230650220D179F72&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzs7eTs6ZndnOTMzZzczNEApOTg2Ozo4N2U1NzYzZzU4Z2dmYTVlcjQwYjJgLS1kMS9zcy1iMF9hXmE0MDYuMC9fMWI6Yw%3D%3D&vl=&vr=",
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
    src: "https://v16-webapp.tiktok.com/46754d584e8e56a9a48e946888bf15ac/61e909a7/video/tos/maliva/tos-maliva-ve-0068c799-us/798f2f0087a24cb1a89181bb647d6372/?a=1988&br=2588&bt=1294&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FRTkag3-I&l=202201200103530102230650220D179F72&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzs7eTs6ZndnOTMzZzczNEApOTg2Ozo4N2U1NzYzZzU4Z2dmYTVlcjQwYjJgLS1kMS9zcy1iMF9hXmE0MDYuMC9fMWI6Yw%3D%3D&vl=&vr=",
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
