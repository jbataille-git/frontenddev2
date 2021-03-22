// https://javascript.info/rest-parameters-spread
// .. is korte schrijfwijze voor Object.assign({}, obj) of let arrCopy = Object.assign([], arr)
// https://javascript.info/object-copy
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals

// uit 31_34_1_changing_state
state = {
  count: 0
}

count: prevState.count + 1
// is anders dan
prevState.count++
// omdat dat laatste de prevState wijzigt

// uit 31_34_2_extra_les
this.state = {
  presents: ["wine", "chocolate", "socks"],
  favoriteWords: ["hello", "morning", "zebra"]

const newState = { ...prevState, presents: newPresents};
// wil zeggen: newState is het zelfde als prevState, alleen de presents-array wordt vervangen door de newPresents-array
// is spread-operator

// tweede methode:
// geen functie geven aan setState maar een comleet object
// we start with the complete state-object
// and then modify the favoriteWords key with the new array
// 
// setState is smart and can do the ...this.state copy operation itself
// so we can leave it out
// this.setState ({
//   ...this.state,

this.setState ({
  favoriteWords: [ ...this.state.favoriteWords].concat([word])  /* alleen de property favoriteWords aanpassen van het object state */
  })

// uit 31_35_todo_list_6
handleChange(id) {
  this.setState( prevState => {
    const updatedTodos = prevState.todos.map(todo => {
      if (todo.id === id ) {
        return { ...todo, completed: !todo.completed }        /* een property veranderen */
      } else {
      return todo;
      }

      })
    return { todos: updatedTodos};                           /* een nieuwe array toewijzen */
    }
  )
}

