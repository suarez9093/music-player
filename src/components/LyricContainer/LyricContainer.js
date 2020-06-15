import React, { useContext, useEffect } from "react";
import { Jumbotron } from "reactstrap";
import { AppContext } from "../../context";
import LoadLyricsButton from "../Buttons/LoadLyricsButton";
import LoadMusicButton from "../Buttons/LoadMusicButton";
function LyricContainer() {
  const { displaySongLyrics, songData } = useContext(AppContext);


  useEffect(() => {
    document.getElementsByClassName('rabbit-lyrics').innerHTML = displaySongLyrics
  }, [displaySongLyrics])
  return (
    <>
      <Jumbotron>
        <h1 className="display-3">Lyrics</h1>
        <hr className="my-2" />
        <div className="rabbit-lyrics" data-media="#audioFile" data-height="500" data-alignment="center">{displaySongLyrics}</div>

        <LoadMusicButton />
        <br />
        <LoadLyricsButton />
      </Jumbotron>
      <audio id="audioFile" src={songData.link} controls>
        Your browser does not support the audio element.
      </audio>

    </>
  );
}

export default LyricContainer;



// className="rabbit-lyrics" data-media="#audioFile" data-height="500" data-alignment="center"