const songListReducer = ( state, action) => {

  const songsArray = [
    {
      song: "Spanish moon",
      artist: "Little Feat",
      genre: "American rock",
      rating: "2",
    },
    {
      song: "Get on the good foot",
      artist: "James Brown",
      genre: "Early funk",
      rating: "4",
    },
    {
      song: "Sledgehammer",
      artist: "Peter Gabriel",
      genre: "Pop",
      rating: "3",
    },
    {
      song: "Roadrunner",
      artist: "Junior Walker and the Allstars",
      genre: "Soul",
      rating: "5",
    },
  ];

  if (action.type === "CLEARSONGLIST") {
    return { ...state, songsArray: []}
  }

  if (action.type === "ADDSONGTOLIST") { 
    const newSongsArray = Array.from(state.songsArray);
    newSongsArray.push(action.payload)
    return { ...state, songsArray: newSongsArray}
  }

  return {songsArray};

}

export default songListReducer;
