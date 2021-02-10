// callbacks
// asynchroon: er wordt iets gedaan maar je wilt niet wachten tot het klaar is
// synchroon: je doet iets en wacht tot het klaar is voor je verder gaat


function huiswerkMaken ( vak, callback){
  console.log(`Okee, ik ga nu mijn ${vak} huiswerk maken`);
  callback();
}

const klaarMetHuiswerk = function() {
  setTimeout(function(){
    console.log("Kijk meester, ik ben klaar met mijn huiswerk!");
  }, 3000)
};

huiswerkMaken('wiskunde', klaarMetHuiswerk);


// It’s not that JavaScript didn’t execute our functions in the order we wanted it to,
// it’s instead that JavaScript didn’t wait for a response from first() before moving on to execute second().

// So why show you this? 
// Because you can’t just call one function after another and hope they execute in the right order
// Callbacks are a way to make sure certain code doesn’t execute until other code has already finished execution.


