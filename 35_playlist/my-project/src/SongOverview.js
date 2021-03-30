// ik ga dit met hooks doen omdat ik al een opdracht met class-based components heb gedaan
// namelijk de eindopdracht boodschappenlijkst, level 33
//
// 1 heb App.js achterwege gelaten. Dat was slechts een component om de container SongOverview door te geven
//   dus we kunnen zonder
// 2 branches maken voor de bonuspunten en voor de Redux oplossing

import React, { useState } from "react";
import SongForm from "./components/SongForm.js"
import SongList from "./components/SongList.js"
import "./reset.css"
import "./style.css";

function SongOverview() {

  const [ newSong, setNewSong ] = useState({
    song: "",
    artist: "",
    genre: "",
    rating: ""
  })

  let songsArray = [{ song: "Wat ben je lelijk van dichtbij", artist: "Huub Hangop", genre: "Nederlandstalig", rating: "3"},
                  { song: "Ik kan het niet uitstaan/Geslachtsdrift", artist: "Tedje en de Flikkers", genre: "Nederlandstalig", rating: "4"},
                  { song: "Poep in je hoofd", artist: "De Raggende Manne", genre: "Nederlandstalig", rating: "5"},
                  { song: "Houd je bek en bef me", artist: "Roos", genre: "Nederlandstalig", rating: "2"}
                ]

  const [ songList, setSongList] = useState({songsArray})

  const addSong = () => {
    setSongList( prevState => {
      const newSongsArray = Array.from(songList.songsArray);
      newSongsArray.push(newSong);
      const newState = { ...prevState, songsArray: newSongsArray}
      return newState;
    })
  }

  const handleChange = (event) => {
    setNewSong( prevState => {
      const newState = { ...prevState, [event.target.name]: event.target.value}
      return newState;
    })
  }

  return (
    <div>
      <SongForm stateData={newSong} handleOnChange={handleChange} handleClick={addSong} />
      <SongList stateData={songList}/>
    </div>
  );
}

export default SongOverview;
