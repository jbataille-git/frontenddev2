// versie 2
// werken met een bodyIntialClassList
// om oorspronkelijke classlist in op te slaan en die later terug te kunnen zetten
// maar dat werkt niet omdat document.body.classList een read-only ding is
// die je alleen maar met de .add en .remove methods te lijf kunt
const initialBodyClassList = document.body.classList;

console.log('voorin: ', initialBodyClassList);

const hamburger = document.querySelector('.button-toggle-nav');
const navUl     = document.querySelector('.nav-ul');
// voor in de functie setBackgroundColor
// welke kleurenclasses zijn er allemaal in de ul
const liArray   = document.querySelectorAll('.nav-ul li');
let menuIsOut = false;

const setBackgroundColor = function (e) {
    
    // welke achtergrondkleur heeft het actuele li, die zit in de tweede class die in de html toegewezen is
    let liColorClass = e.target.classList[1];

    // de bodyClassList terugzetten naar zijn oorspronkelijke waarde
    // is eigenlijk weghalen van toegewezen classes met een achtergrondkleur
    // KAN NIET
    document.body.classList = initialBodyClassList;
    console.log("na toekennen initial: ", document.body.classList);

    //liArray.forEach( (li) => document.body.classList.remove(li.classList[1]));
    liArray.forEach( function(li) {
        document.body.classList.remove(li.classList[1]);
    });
    
    console.log('na removes: ', document.body.classList)

    // en dan doen we hier het uiteindelijke werk
    document.body.classList.add(liColorClass);

    console.log('na nieuwe toekenning: ', document.body.classList)

    navUl.style.visibility = "hidden";
    menuIsOut = false;
}

const toggleMenuVisibility = function () {
    if ( !menuIsOut) {
        navUl.style.visibility = "visible";
        menuIsOut = true;
    }  else {
        navUl.style.visibility = "hidden";
        menuIsOut = false;
    }
}

hamburger.addEventListener('click', toggleMenuVisibility);

let colorSelectors = document.querySelectorAll('.color-selector');
// colorSelectors.forEach((colorSelector) => colorSelector.addEventListener('click', setBackgroundColor));
colorSelectors.forEach( function(colorSelector) {
    colorSelector.addEventListener('click', setBackgroundColor);
});
