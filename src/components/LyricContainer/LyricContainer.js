import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context";
import LoadLyricsButton from "../Buttons/LoadLyricsButton";
import LoadMusicButton from "../Buttons/LoadMusicButton";
import cations from './captions.vtt'
import AudioPlayer from 'react-modular-audio-player';
import truth from './truth.mp3'

function LyricContainer() {
  const { displaySongLyrics, songData, songLyrics } = useContext(AppContext);

  function addTrack() {
    let video = document.getElementById('video'), track;
    video.addEventListener("loadedmetadata", function () {
      track = document.createElement("track");
      track.kind = "captions";
      track.label = "English";
      track.srclang = "en";
      track.src = { displaySongLyrics };
      console.log(track.src)
      track.addEventListener("load", function () {
        this.mode = "showing";
        video.textTracks[0].mode = "showing"; // thanks Firefox
      });
      this.appendChild(track);
    });
  };
  return (
    <div>

      <video poster="https://image.shutterstock.com/image-photo/black-background-texture-pattern-all-260nw-425112010.jpg" src={songData.link} id="video" controls>
        <source type="audio/mpeg" src={songData.link}></source>
      </video>
      <button onClick={addTrack}>Change track</button>
      <LoadLyricsButton />
      <LoadMusicButton />
    </div>


  )
}

export default LyricContainer;