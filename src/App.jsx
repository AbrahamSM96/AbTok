import "./App.css";
import FeedVideos from "./components/FeedVideos";
import { Route, Router } from "wouter";
import Upload from "./pages/Upload";
function App() {
  return (
    <div className="App">
      <main>
        <Route path="/">
          <FeedVideos />
        </Route>
        <Route path="/upload">
          <Upload />
        </Route>
      </main>
    </div>
  );
}

export default App;
