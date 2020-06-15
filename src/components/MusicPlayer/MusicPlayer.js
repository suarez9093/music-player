import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context";

function MusicPlayer() {
  const { songData } = useContext(AppContext);

  useEffect(() => {
    document.getElementById("audioFile").src = songData.link;
  }, [songData]);
  return (
    <div>
      <div>
        <audio id="audioFile" src={songData.link} controls>
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
}

export default MusicPlayer;
