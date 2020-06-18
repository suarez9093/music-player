import React, { useState, createContext } from "react";
import { musixMatchLyrics } from './utils/API';
const AppContext = createContext();

function AppContextProvider(props) {
  const [musicModal, setMusicModal] = useState(false);
  const [songLyrics, setSongLyrics] = useState();
  const [captionSource, setCaptionSource] = useState();
  const [navisOpen, setNavIsOpen] = useState(false);
  // This piece of state is for the musixMatch api
  const [displaySongLyrics, setDisplaySongLyrics] = useState()
  const [songData, setSongData] = useState({
    title: "",
    artist: "",
    src: "",
    lyrics: "",
    isChecked: false
  });

  function toggleNavbar() {
    setNavIsOpen(!navisOpen);

  }

  function searchTrack() {
    console.log('searchTrack', songData);
    setMusicModal(!musicModal);

    searchLyrics()
  }

  async function searchLyrics() {
    if (songData.isChecked && songData.song !== "") {
      const artistLyrics = await musixMatchLyrics(songData.artist, songData.title)
      setDisplaySongLyrics(artistLyrics)
    } else setDisplaySongLyrics("No Results found")
  }

  function handleChange(e) {
    let url;
    const { name, value, checked, type } = e.target;
    if (type === "checkbox") {
      setSongData(prevState => ({
        ...prevState,
        [name]: checked
      }))
    }
    else if (type === "textarea") {
      let blob = new Blob(
        [value],
        {
          type: 'text/vtt;charset=utf-8'
        }
      )

      if (url) {
        URL.revokeObjectURL(url);
      }
      url = URL.createObjectURL(blob)

      setCaptionSource(url)
      setSongData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }

    else {
      setSongData(prevState => ({
        ...prevState,
        [name]: value
      }));

    }

  }

  function handleLyricChange(e) {
    const { value } = e.target;
    setSongLyrics(value);
    console.log(songLyrics);
  }

  function toggleMusicModal() {
    setMusicModal(!musicModal);
  }

  return (
    <div>
      <AppContext.Provider
        value={{
          musicModal,
          toggleMusicModal,
          setSongLyrics,
          displaySongLyrics,
          handleLyricChange,
          songData,
          handleChange,
          searchTrack,
          captionSource, setCaptionSource, navisOpen, toggleNavbar
        }}
      >
        {props.children}
      </AppContext.Provider>
    </div>
  );
}

export { AppContextProvider, AppContext };
