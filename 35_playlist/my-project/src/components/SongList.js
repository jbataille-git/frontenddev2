import React from "react"

function SongList(props) {

  const listOfSongs = props.stateData.songsArray.map((item) => {
    return <tr key={item.song}>
              <td>{item.song}</td>
              <td>{item.artist}</td>
              <td>{item.genre}</td>
              <td>{item.rating}</td>
            </tr>
  })

  return (
    <div>
      <table className="song-list-table">
        <tbody>
          <tr className="song-row">
            <th className="song-row__item">Song</th>
            <th className="song-row__item">Artist</th>
            <th className="song-row__item">Genre</th>
            <th className="song-row__item">Rating</th>
          </tr>
          {listOfSongs}
        </tbody>
      </table>
    </div>
  );
}

export default SongList;
