import React, { useState, createContext } from "react";
const AppContext = createContext();

function AppContextProvider(props) {
  const [lyricModal, setLyricModal] = useState(false);
  const [musicModal, setMusicModal] = useState(false);
  const [songLyrics, setSongLyrics] = useState();
  const [displaySongLyrics, setDisplaySongLyrics] = useState(" [00:15:00] Spending all my nights, all my money going out on the town Doing anything just to get you off of my mind But when the morning comes, I'm right back where I started again Trying to forget you is just a waste of time Baby come back, any kind of fool could see There was something in everything about you Baby come back, [00:30:00] you can blame it all on me I was wrong, and I just can't live without you All day long, wearing a mask of false bravado Trying to keep up the smile that hides a tear But as the sun goes down, I get that empty feeling again How I wish to God that you were here [00: 50: 00] Baby come back, any kind of fool could see There was something in everything about you Baby come back, you can blame it all on me I was wrong, and I just can't live without you Now that I put it all together [01:00:00] Give me the chance to make you see Have you used up all the love in your heart Nothing left for me, ain't there nothing left for me Baby come back, any kind of fool could see There was something in everything about you Baby come back, listen, you can blame it all on me I was wrong, and I just can't live without you I was wrong, and I just can't live");
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
