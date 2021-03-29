// ik ga dit met hooks doen omdat ik al een opdracht met class-based components heb gedaan
import React, { useState } from "react";
import SongForm from "./components/SongForm.js";
import SongList from "./components/SongList.js";
import "./reset.css";
import "./style.css";

function SongOverview() {
  const [newSong, setNewSong] = useState({
    song: "Gijzelaar",
    artist: "Het Goede Doel",
    genre: "Nederlandstalig",
    rating: "3",
  });

  let songsArray = [
    {
      song: "Wat ben je lelijk van dichtbij",
      artist: "Huub Hangop",
      genre: "Nederlandstalig",
      rating: "3",
    },
    {
      song: "Ik kan het niet uitstaan/Geslachtsdrift",
      artist: "Tedje en de Flikkers",
      genre: "Nederlandstalig",
      rating: "4",
    },
    {
      song: "Poep in je hoofd",
      artist: "De Raggende Manne",
      genre: "Nederlandstalig",
      rating: "5",
    },
    {
      song: "Houd je bek en bef me",
      artist: "Merol",
      genre: "Nederlandstalig",
      rating: "2",
    },
    {
      song: "No sleep till Brooklyn",
      artist: "Beastie Boys",
      genre: "Rap",
      rating: "4",
    },
  ];

  const [songList, setSongList] = useState({ songsArray });
  const [sortOn, setSortOn] = useState("song");
  const [sortReverse, setSortReverse] = useState(false);

  const addSong = () => {
    setSongList((prevState) => {
      const newSongsArray = Array.from(songList.songsArray);
      newSongsArray.push(newSong);
      const newState = { ...prevState, songsArray: newSongsArray };
      return newState;
    });
  };

  const clearList = () => {
    setSongList((prevState) => {
      const newState = { ...prevState, songsArray: [] };
      return newState;
    });
    setSortOn("song");
  };

  const handleChange = (event) => {
    const {name, value} = event.target;  // DEZE VOORKOMT VEEL BUGS volgens Bob Ziroll
    setNewSong((prevState) => {
      const newState = {
        ...prevState,
        [name]: value
      };
      return newState;
    });
  };


  const handleSort = (event) => {
    const eventTargetName = event.target.name;
    if (event.target.name !== sortOn) {
      setSortReverse(false);
      setSortOn(eventTargetName);
    } else {
      setSortReverse(!sortReverse);
    }
  };

  return (
    <div>
      <SongForm
        stateData={newSong}
        handleOnChange={handleChange}
        handleClick={addSong}
      />

      <SongList
        stateData={songList}
        clearList={clearList}
        handleSortClick={handleSort}
        sortColumn={sortOn}
        sortReverse={sortReverse}
      />
    </div>
  );
}

export default SongOverview;


/*
console.log(event.target);
    const {name, value} = event.target;  // DEZE VOORKOMT VEEL BUGS
    this.setState({
      // firstName: event.target.value,
      // lastName: event.target.value
      // event.target.name: event.target.value;
      [name]: value                               // js standaard
    });
    event.preventDefault();
*/