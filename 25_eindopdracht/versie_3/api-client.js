let baseUrl = "http://localhost:3000"; // commentaar Ben Linnebank BL dit had const moeten zijn

// ----------------------------------------------------------------------------
async function getTodoList() {            // moderener en beter volgens BL const getTodoList = async () => {
  try {

    const response = await fetch(baseUrl, {
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {

      let result = await response.json();  // BL hier ook een const ipv let
      return result;
    } else {

        console.log(`Er is een fout opgetreden: ${error}`);
    }

  } catch (err) {
      console.log(err);
  }
}

// ----------------------------------------------------------------------------
async function putOnTodoList(todoItem) {            // BL zou postTodoList moeten heten
  try {
  
    const response = await fetch(baseUrl, {
      method: "POST",
      body: JSON.stringify(todoItem),
      headers: {
        "Content-Type": "application/json",
      },
    });

    let result = await response.json();
    return result;

  } catch (err) {
      console.log(err);
  }

};

// ----------------------------------------------------------------------------
async function deleteFromTodoList(itemId) {
  try {
    const deleteUrl = baseUrl + "/" + itemId;
    const response = await fetch(deleteUrl, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (err) {
      console.log(err);
  }
};

// ----------------------------------------------------------------------------
async function updateAsDone(todoItemId) {
  try {
    const updateUrl = baseUrl + "/" + todoItemId;  // BL dit is ouderwets, moet zijn `${baseUrl/$todoItemId}`
    const bodyData = { done: true };
    const response = await fetch(updateUrl, {
      method: "PUT",
      body: JSON.stringify(bodyData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (err) {
      console.log(err);
  }
}
