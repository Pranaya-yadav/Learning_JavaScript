const term = document.querySelector('.term');
const definition = document.querySelector('.definition');
const checkButton = document.querySelector('.check');
const nextButton = document.querySelector('.next');

// dictionary using key value pair in python but in js we use objects
let cityCapital = {
    India : "New Delhi",
    UK : "London",
    France : "Paris",
    'South Korea' : "Seoul",
    Italy : "Rome",
    USA : "Washington, D.C."
}
// // built in object- it takes its entries and puts it into an array
data = Object.entries(cityCapital);
// console.log(data[0][1]);

function getRandomWord(){
    // to generate a random term from the data object
    randomTerm = data[Math.floor(Math.random() * data.length)];
    term.innerHTML = randomTerm[0];
    definition.innerHTML = randomTerm[1];
}

checkButton.addEventListener('click' , function(){
    definition.style.display = 'block';
});

nextButton.addEventListener('click' , function(){
    getRandomWord();
    definition.style.display = 'none';
    
});

