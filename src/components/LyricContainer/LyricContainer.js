import React, { useContext } from "react";
import { AppContext } from "../../context";
import './style.css';

function LyricContainer() {
  const { songData, displaySongLyrics } = useContext(AppContext);
  return (
    <div></div>
    // <div className="lyric-grid-container">
    //   {!songData.lyrics ? displaySongLyrics : songData.lyrics}

    // </div>
  )
}

export default LyricContainer;