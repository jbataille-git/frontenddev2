// in je pagina de styling van een element aanpassen
// 1 niet zo handig
// in de console zeg je, om te kijken of je het goede element te pakken hebt
const par2 = document.querySelector(".p2");

p2.style.color = "blue";
// maar dan komt je styling in de js en dat hebben we liever niet

// 2 class name
const par2 = document.querySelector(".p2");
par2.className // p2
par2.className = "error";
// maar die OVERSCHRIJFT de class in plaats van 'm toe te voegen
// immers: een element kan meerdere classes tegelijkertijd hebben

// je kunt er wel meerdere toeveogen
par2.className = "p2 error big-font" // als je meerdere classes toe wilt kennen
// maar is teveel een botte bijl

// dus beter
// 3 class list, zo moet het
par2.classList // levert een array op

// een class toevoegen
par2.classList.add("italic")  // wonderschoon, gewoon toevoegen

par2.classList.remove("italic")

// aan en uit zetten met toggle
// als ie 'm al heeft, haalt dit 'm weg
// als ie 'm nog niet heeft, voegt ie 'm toe
par2.classList.toggle("error") 

// en dan wordt het geheel zoiets
// samen met een eventListener op een button
const makeParagraph2Bol = () => {
    par2.classList.add("bold");
    // en eventueel ook classes weghalen
    par2.classList.remove("bold");
    par2.classList.remove("big-font");
};
bigButton.addEventListener("click, makeParagraph2Big");

// laatste voorbeeld
const toggleItalicOnParagraph2 = () => {
    par2.classList.toggle("italic");
};

italicButton.addEventListener("click", toggleItalicOnParagraph2);



