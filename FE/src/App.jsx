import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VideoDetailPage from "./pages/VideoDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/video/:videoID" element={<VideoDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
