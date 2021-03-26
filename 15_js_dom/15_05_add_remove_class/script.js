// Event listeners
// syntax: element.addEventListener( event, function, useCapture);

myP.addEventListener("click", function() { 
    myP.style.background = "lightblue"
})

// het kan ook met onclick
myP.onclick = function() { myDiv.style.background = "ligthblue" };
// MAAR:
// in onclick kun je maar één ding doen, dat is gewoon een property
// een volgende onclick event-handler zal de eerste overrulen
// en je kunt useCapture niet gebruiken
// maar aan de andere kant
// onclick werkt in alle browsers, addEventHandler niet in vroege IE

// stapje verder
myP.addEventListener("click", changeText);

function changeText() {
    myP2.textContent = "According to a Cornell publication, the answer = ~700 punds."
}

myDiv.addEventListener("mouseover", function(){ 
    myDiv2.style.background = "darkkhaki"
});

// useCapture op true zetten:
// eerst de outer-eventListener, dan de inner
// bijvoorbeeld als je een p in een div hebt en op allebei een eventListener
// als je dan op de p klikt, gaat ook de el van de div af
// wat moet dan de volgorde zijn
// als je useCapture op false zet, gaat eerst de inner af, dan de outer

//verwijderen
myP.removeEventListener("click", changeText, false);
// parameters moeten exact hetzelfde zijn
// en kan alleen als je een functie-aanroep hebt
// dus niet als de functie uitgeschreven is
