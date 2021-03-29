// ik ga dit met hooks doen omdat ik al een opdracht met class-based components heb gedaan
// en nu komt redux erbij

// kan ik beide sort-reducers combineren in één bestand? Ja
// is er ergens evennPreventDefault nodig?

import React from "react";
import {useSelector, useDispatch} from "react-redux"

import {  setSortField,
          setReverseSort,
          clearSongList,
          addSongToList,
          editNewSong
        } 
        from "./actions/index.js"

import SongForm from "./components/SongForm.js";
import SongList from "./components/SongList.js";

// --

function App() {

  // redux selectors
  const reduxSortOnField = useSelector( state => state.sortProps.field);
  const reduxReverseSort = useSelector( state => state.sortProps.reverse);
  const reduxSongList    = useSelector( state => state.songList)
  const reduxNewSong     = useSelector( state => state.newSong)
  
  const dispatch = useDispatch();

  const clearList = () => {
    dispatch(clearSongList());
    // hij zet zelf sorteren weer op song en reverse op false, hoe komt dat?
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newSong = { ...reduxNewSong, [name]: value}
    dispatch(editNewSong(newSong));
    event.preventDefault();
  }

  const addSong = () => {
    dispatch(addSongToList(reduxNewSong));
  }

  const handleSort = ((event) => {
    const eventTargetName = event.target.name;
    if (eventTargetName !== reduxSortOnField) {     // er wordt op een ander veld gesorteerd, terugzetten naar asc. dus reverse false
      dispatch(setSortField(eventTargetName));
      dispatch(setReverseSort());
    } else {
      dispatch(setReverseSort(reduxReverseSort))    // de huige waarde omzetten
    }
  })

  return (
    <div>
      <SongForm
        stateData={reduxNewSong}
        handleOnChange={handleChange}
        handleClick={addSong}
      />

      <SongList
        stateData={reduxSongList}
        clearList={clearList}
        handleSortClick={handleSort}
        sortColumn={reduxSortOnField}
        sortReverse={reduxReverseSort}
      />
    </div>
  );
}

export default App;

/*
handleChange(event) {
  // console.log(event);
  // console.log(event.target.nodeName);
  console.log(event.target);
  const {name, value} = event.target;  // DEZE VOORKOMT VEEL BUGS
  this.setState({
    // firstName: event.target.value,
    // lastName: event.target.value
    // event.target.name: event.target.value;
    [name]: value                               // js standaard
  });
  event.preventDefault();
}
*/