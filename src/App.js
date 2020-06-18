import React from "react";
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import NavbarComponent from './components/Navbar/NavbarComponent'
import "../node_modules/video-react/dist/video-react.css"

function App() {
  return (
    <>
      <NavbarComponent />
      <div className="app-grid-container">

        <div className="music-player">

          <MusicPlayer />
        </div>

      </div>
    </>
  )
}

export default App;
