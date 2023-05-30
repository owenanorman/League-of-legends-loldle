// notes math.floor rounds a number down
// math.random selects a random number from 0 to 1 






let randomChampionIndex = -1;
// |||||||||| Champion Properties ||||||||||
function getRandomChampion () {
        // creating a variable that uses math random and math floor so it is giving a random whole number between 0 and 1 and then multiplying it my champions length so itis now between 0 and the amount of champions inside of the array. 
//  Generates a random index to select a random champion
    randomChampionIndex = Math.floor(Math.random() * (champions.length || 0));
}

 // This is making the boxes appear 
    function appear() {
        const squares = document.querySelectorAll('.square-container');
        squares.forEach(square => square.classList.remove('hidden'));
} 
// makes the input tags disappear 
    function hideForm () {
        const formContainer = document.querySelector('.form-container');
        formContainer.style.display = 'none'

}
// changes the color to   when it is correct or incorrect 
    function correct() {
        const correct =document.getElementsByClassName('individual-container')
        for (let i = 0; i < correct.length; i++) {
        correct[i].style.backgroundColor = 'blue';
    } }
    function incorrect () {
        const incorrect =document.getElementsByClassName('individual-container')
        for (let i = 0; i < incorrect.length; i++) {
        incorrect[i].style.backgroundColor = 'red';
    } }

 
const form = document.querySelector('.form-container');
form.addEventListener('submit', function(event) {
    // prevents it from submmiting to the page and refreshing it 
    event.preventDefault(); 
    const userGuess = document.querySelector('.guess-input').value;
    const correctAnswer = getChampionName();
    // Makes it display the information based on correct and incorrect answer  
    if (userGuess.toLowerCase() === correctAnswer.toLowerCase()){
        alert('correct! The champion was indeed ' + correctAnswer + '!!!')
        displayRandomChampionInfo(correctAnswer);
        appear();
        hideForm ();
        correct();
    } else {
        alert('Incorrect. Try again!')
        displaySelectedChampionInfo(getChampionByName(userGuess))
        appear();
        incorrect();    
      }})



function getChampionQuotes () {
    // If randomChampionIndex is not valid, generate one
    // using the || is basically jhust a saftey net to make sure it somehow doesnt go over the amount possible
    // and it is checking to see if RCI is less than 
    if(randomChampionIndex < 0 || randomChampionIndex >= champions.length) {
        getRandomChampion();
    }
    // Retrieve the quotes array for the selected champion
    const quotes = champions[randomChampionIndex].quotes;

    // generate a random index to select a random quote 
    const randomQuoteIndex = Math.floor(Math.random() * quotes.length); 

    // return the randomly selected quote 
    return quotes[randomQuoteIndex];

}
function getChampionName() {
    // If randomChampionIndex is not valid, generate one
    if(randomChampionIndex < 0 || randomChampionIndex >= champions.length) {
        getRandomChampion();
    } 
    const championName = champions[randomChampionIndex].name;
    return championName
}
function getChampionGender() {
    // If randomChampionIndex is not valid, generate one
    if(randomChampionIndex < 0 || randomChampionIndex >= champions.length) {
        getRandomChampion();
    }
    const championGender = champions[randomChampionIndex].gender;
    return championGender;
}

function getChampionRace() {
    // If randomChampionIndex is not valid, generate one
    if(randomChampionIndex < 0 || randomChampionIndex >= champions.length) {
        getRandomChampion();
    }
    const championRace = champions[randomChampionIndex].race;
    return championRace
}

function getChampionClass() {
    // If randomChampionIndex is not valid, generate one
    if(randomChampionIndex < 0 || randomChampionIndex >= champions.length) {
        getRandomChampion();
    }
    const championClass = champions[randomChampionIndex].class;
    return championClass
} 

function getChampionPosition() {
    // If randomChampionIndex is not valid, generate one
    if(randomChampionIndex < 0 || randomChampionIndex >= champions.length) {
        getRandomChampion();
    }
    const championPosition = champions[randomChampionIndex].position
    return championPosition
}

function getChampionResource() {
    // If randomChampionIndex is not valid, generate one
    if(randomChampionIndex < 0 || randomChampionIndex >= champions.length) {
        getRandomChampion();
    }
    const championResource = champions[randomChampionIndex].resource
    return championResource
}

function getChampionRangeType() {
    // If randomChampionIndex is not valid, generate one
    if(randomChampionIndex < 0 || randomChampionIndex >= champions.length) {
        getRandomChampion();
    }
    const ChampionRangeType = champions[randomChampionIndex].rangeType
    return ChampionRangeType
}
function getChampionDamageType() {
    // If randomChampionIndex is not valid, generate one
    if(randomChampionIndex < 0 || randomChampionIndex >= champions.length) {
        getRandomChampion();
    }
    const ChampionDamageType = champions[randomChampionIndex].damageType
    return ChampionDamageType
}
 


function getChampionByName(name) {
    return champions.find(champion => champion.name.toLowerCase() === name.toLowerCase())

}


// |||||||||||||||||||||| GRABBING HTML TEXT BOXES FOR DISPLAY ||||||||||||||||||||||

// This is creating a variable that is grabbing the id of the paragraph element this is now updating the inner text of the element to display the random quote
const quoteParagraph = document.getElementById('quote-paragraph');
quoteParagraph.innerText = getChampionQuotes();



function displayRandomChampionInfo() {
    const nameBox2 = document.querySelector('.square-2-span')
    nameBox2.innerText = getChampionName();
    const genderBox3 = document.querySelector('.square-3-span'); 
    genderBox3.innerText = getChampionGender();
    const raceBox4 = document.querySelector('.square-4-span');
    raceBox4.innerText = getChampionRace();
    const classBox5 = document.querySelector('.square-5-span');
    classBox5.innerText = getChampionClass();
    const positionBox6 = document.querySelector('.square-6-span');
    positionBox6.innerText = getChampionPosition();
    const championResource7 = document.querySelector('.square-7-span');
    championResource7.innerText = getChampionResource();
    const ChampionRangeType8 = document.querySelector('.square-8-span');
    ChampionRangeType8.innerText = getChampionRangeType();
    const ChampionDamageType9 = document.querySelector('.square-9-span');
    ChampionDamageType9.innerText = getChampionDamageType();    
}
 
function displaySelectedChampionInfo(champion) {
    const nameBox2 = document.querySelector('.square-2-span')
    nameBox2.innerText = champion.name;
    const genderBox3 = document.querySelector('.square-3-span'); 
    genderBox3.innerText = champion.gender;
    const raceBox4 = document.querySelector('.square-4-span');
    raceBox4.innerText = champion.race;
    const classBox5 = document.querySelector('.square-5-span');
    classBox5.innerText = champion.class;
    const positionBox6 = document.querySelector('.square-6-span');
    positionBox6.innerText = champion.position;
    const championResource7 = document.querySelector('.square-7-span');
    championResource7.innerText = champion.resource;
    const ChampionRangeType8 = document.querySelector('.square-8-span');
    ChampionRangeType8.innerText = champion.rangeType;
    const ChampionDamageType9 = document.querySelector('.square-9-span');
    ChampionDamageType9.innerText = champion.damageType;   
}



// Assuming you have an existing HTML element with class "square-container"
const originalContainer = document.querySelector('.square-container');

function duplicateContainer(champion) {
  const newContainer = originalContainer.cloneNode(true);
  displaySelectedChampionInfo(newContainer, champion);
  
  // Append the cloned container to the desired container element
  const container = document.getElementById('container');
  container.appendChild(newContainer);
}

 
  