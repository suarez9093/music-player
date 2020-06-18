import React, { useState, createContext } from "react";
import { musixMatchLyrics } from './utils/API';
const AppContext = createContext();

function AppContextProvider(props) {
  const [lyricModal, setLyricModal] = useState(false);
  const [musicModal, setMusicModal] = useState(false);
  const [songLyrics, setSongLyrics] = useState();
  const [captionSource, setCaptionSource] = useState();
  const [defaultPlaylist, setDefaultPlaylist] = useState([
    {
      src: "http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3",
      title: "Despacito",
      artist: "Luis Fonsi",
      lyrics: "Ay Fonsi DY Oh Oh no, oh no Oh yeah Diridiri, dirididi Daddy Go Yes, you know that I've been looking at you for a while I have to dance with you today (DY) I saw that your gaze was already calling me Show me the way I'm going (Oh) You, you are the magnet and I am the metal am getting closer and I am putting together the plan Just thinking about it speeds up the pulse (Oh yeah) Now, I am already liking it more than normal All my senses are asking for more This must be taken without any rush Despacito want to breathe your neck slowly Let me tell you things to your earfor you to remember if you are not with meDespacitowant to undress slowly kissessigned in the walls of your mazeand make your body a whole manuscript (up, up, up)(Up, up)I want to see your hair dance ...')"
    }
  ]);
  const [displaySongLyrics, setDisplaySongLyrics] = useState()
  const [songData, setSongData] = useState({
    title: "",
    artist: "",
    src: "",
    lyrics: "",
    isChecked: false
  });


  function displayLyrics() {
    setDisplaySongLyrics(songLyrics);
    setLyricModal(!lyricModal);
    console.log(songLyrics);
  }
  function searchTrack() {
    console.log('searchTrack', songData);
    setMusicModal(!musicModal);
    setDefaultPlaylist(oldState => [...oldState, songData])
    console.log('defaultPlaylist', defaultPlaylist)
    console.log('songData', songData)
    searchLyrics()
  }

  async function searchLyrics() {
    if (songData.isChecked && songData.song !== "") {
      const artistLyrics = await musixMatchLyrics(songData.artist, songData.title)
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
    console.log(songData)
  }

  function handleLyricChange(e) {
    const { value } = e.target;
    setSongLyrics(value);
    console.log(songLyrics);
  }

  function toggleMusicModal() {

    setMusicModal(!musicModal);

  }
  function toggleLyricModal() {

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
          displayLyrics, defaultPlaylist, captionSource, setCaptionSource
        }}
      >
        {props.children}
      </AppContext.Provider>
    </div>
  );
}

export { AppContextProvider, AppContext };
