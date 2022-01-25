import React, { useEffect, useState } from "react";
import { getVideos } from "../../services";
import VideoPlayer from "../VideoPlayer";
import styles from "./styles.module.css";

export default function FeedVideos() {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    getVideos().then(([error, data]) => {
      console.log(data);
      if (error) return setError(error);
      setVideos(data);
    });
  }, []);

  if (error) return <span>{error}</span>;

  return videos.map((video) => {
    const { users = {} } = video;
    const { avatar, username } = users;
    return (
      <div key={video.id} className={styles.item}>
        <VideoPlayer {...video} username={username} avatar={avatar} />
      </div>
    );
  });
}
