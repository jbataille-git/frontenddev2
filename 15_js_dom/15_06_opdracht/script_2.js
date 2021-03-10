// oplossing van Winc Marjolein
const changeClassBlueBackground = function () {
    const bodyElement = document.body;
    bodyElement.classList.add("red-background");
  };

const attachEventToChangeColorButton = function () {
    const changeColorButton = document.getElementById("mybutton2");
    changeColorButton.addEventListener("click", function () {
      changeClassBlueBackground();
    });
  };


  const attachEventToAlertButton = function () {
    const alertButton = document.getElementById("mybutton");
    alertButton.addEventListener("click", function () {
      alert("Hello World!");
    });
  };
  
  attachEventToAlertButton();
  attachEventToChangeColorButton();
