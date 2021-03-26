// NIET INLEVEREN
const hamburger = document.querySelector('.button-toggle-nav');
const navUl     = document.querySelector('.nav-ul');
// welke classes heeft de body
let bodyClassList = document.body.classList;
// voor in de functie setBackgroundColor
// welke kleurenclasses zijn er allemaal in de ul
const liArray   = document.querySelectorAll('.nav-ul li');

let menuIsOut   = false;


const setBackgroundColor = function (e) {
    
    // welke achtergrondkleur heeft het actuele li, die zit in de tweede toegewezen class
    // dat gaat mis als je op de tekst klikt
    let liColorClass = e.target.classList[1];
    console.log(e.target.classList[1]);

    // even door alle colorClasses van de ul lopen, zonodig wat uitzetten in de body
    for ( j= 0; j < liArray.length; j++) {
        let currentColorClass = liArray[j].classList[1];

        if (bodyClassList.contains(currentColorClass)) {
            bodyClassList.remove(currentColorClass);
        }
    }

    // en dan doen we hier het uiteindelijke werk
    document.body.classList.add(liColorClass);

    navUl.style.visibility = "hidden";
    menuIsOut = false;
}

// dit kan ook met het toekennen van een class, dat doe ik later
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
for ( i = 0; i < colorSelectors.length; i++) {
    colorSelectors[i].addEventListener('click', setBackgroundColor);
}

