import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context";
import LoadLyricsButton from "../Buttons/LoadLyricsButton";
import LoadMusicButton from "../Buttons/LoadMusicButton";
import './style.css';

function LyricContainer() {
  const { displaySongLyrics, songData } = useContext(AppContext);


  useEffect(() => {
    document.getElementById('rabbit-lyrics').innerHTML = displaySongLyrics
  }, [displaySongLyrics])
  return (
    <>
      <div className="lyric-grid-container">
        <h1 className="display-3">{songData.title}</h1>
        <hr className="my-2" />
        <div id="rabbit-lyrics" className="rabbit-lyrics" data-media="#audioFile" data-height="500" data-alignment="center">{displaySongLyrics}</div>

        <h6>{songData.artist}</h6>
      </div>
      <br></br>
      <audio id="audioFile" src={songData.link} controls>
        Your browser does not support the audio element.
      </audio>

    </>
  );
}

export default LyricContainer;



// className="rabbit-lyrics" data-media="#audioFile" data-height="500" data-alignment="center"