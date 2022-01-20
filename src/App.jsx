import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import VideoPlayer from "./components/VideoPlayer/index.jsx";
import FeedVideos from "./components/FeedVideos";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <main>
        TikTok Clone
        <FeedVideos />
      </main>
    </div>
  );
}

export default App;
