import React, { useState, createContext } from "react";
import { musixMatch } from './utils/API';
const AppContext = createContext();

function AppContextProvider(props) {
  const [lyricModal, setLyricModal] = useState(false);
  const [musicModal, setMusicModal] = useState(false);
  const [songLyrics, setSongLyrics] = useState();
  const [displaySongLyrics, setDisplaySongLyrics] = useState("Load lyrics");
  const [songData, setSongData] = useState({
    title: "",
    artist: "",
    link: "",
    isChecked: false
  });

  function displayLyrics() {
    setDisplaySongLyrics(songLyrics);
    setLyricModal(!lyricModal);
    console.log(songLyrics);
  }
  function searchTrack() {
    console.log(songData);
    setMusicModal(!musicModal);
    searchLyrics()
  }

  async function searchLyrics() {
    if (songData.isChecked && songData.song !== "") {
      const artistLyrics = await musixMatch(songData.artist, songData.title)
      setDisplaySongLyrics(artistLyrics)
    } else setDisplaySongLyrics("No Results found")
  }


  function handleChange(e) {
    const { name, value, checked, type } = e.target;
    type === "checkbox"
      ? setSongData(prevState => ({
        ...prevState,
        [name]: checked
      }))
      : setSongData(prevState => ({
        ...prevState,
        [name]: value
      }));
  }

  function handleLyricChange(e) {
    const { value } = e.target;
    setSongLyrics(value);
    console.log(songLyrics);
  }

  function toggleMusicModal() {
    console.log("musicModal:", musicModal);
    setMusicModal(!musicModal);
    console.log("musicModal:", musicModal);
  }
  function toggleLyricModal() {
    console.log("lyricModal:", lyricModal);
    setLyricModal(!lyricModal);
  }


  return (
    <div>
      <AppContext.Provider
        value={{
          musicModal,
          lyricModal,
          toggleLyricModal,
          toggleMusicModal,
          setSongLyrics,
          displaySongLyrics,
          handleLyricChange,
          songData,
          handleChange,
          searchTrack,
          displayLyrics
        }}
      >
        {props.children}
      </AppContext.Provider>
    </div>
  );
}

export { AppContextProvider, AppContext };
