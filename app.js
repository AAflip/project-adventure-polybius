//variables
let storyObj = {
    story: {
        text: ['123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890hjbfgkhjdsbkhjfdbhjbfdhjkgbhdsbjghfdsbjghfdjhsbgjhsdbfgjhdfsbgjkshdfgjkhdfsbgjkshdfbgjksdhfbgjhkdfsbgkjsdhfgbjsdkhbgjhdsfbgjhsdfbgjkhsdfgshjdkfbgsjdhkbfghjkdfbgjhskdfgbjhdfsbgjhdsfbgjdsfhgbksdfhjgbskdjhfgbsdkjhfgbsdjkfhbgkdjsfhgbsdjkhfgbsdkfjhgbsdkfhjgbsdkjhfgbsjdkhfgbskdjhfbgskdfjhbgskdfhgbsdfkjgbsdfkjhbgsdfjkhbgsdjfhgbdfgshkbgyukdsfhjdfgshbjdfshbjfgdsbhdfgbhjfghbjfgdfdgsbhjfdgsbhjdfbhjdfbhfdbhkbhdfbhjdfsgbhjfsjbhfgdsbjifgdjfgdsjkbdfgjksbjkgfdbhdfsgbhgfdbhfdgbhjfgdbhjfgdhjbfgdbhjfgdhjfdgbjfgdhjbhjdfgbhjgdfhbjgdrbhdgfbhjdfghjdfrhjbdgfjh'],
        backImages: [],
        images: [['download', 'test image']],
    },
    choices: {
        1: [1, 2, 3],
    },
}
class items {
    constructor(type, health, damage, effects) {
        for (let property of arguments) {
            this[property] = property;
        }
    }
}

let nextText = ['', ''];
let clickable = false;
let imagesLoaded = false;
let loadingInterval;
let preload = ["./backgrounds/main.avif", "./images/brn.avif"]
let images = [];
//classes
//this class handles all the enemies
class enemy {
    constructor(name, health, damage, defense, attacks, special) {
        for (let property of arguments) {
            this[property] = property;
        }
    }
}

//this class handles the player and all stats related to them
class player {
    constructor(health, defense, damage, specials, effects, choicesMade, items) {
        for (let property of arguments) {
            this[property] = property;
        }
    }
}

//functions
//initial function, all functions that should be run on start go in here
function startGame() {
    movePage('mainView');
    summonDialog('on');
}

//movePage function, shifts display of the sections, not the content
function movePage(to) {
    let sections = document.getElementsByClassName('page');
    for (let section of sections) {
        section.style.display = 'none';
    }
    document.getElementById(to).style.display = 'flex';
}

//summonDialog function, makes the dialog box visible/not visible
function summonDialog(state) {
    let box = document.getElementById('dialogBox');
    if (state == 'on') {
        box.style.display = 'flex';
    } else {
        box.style.display = 'none';
    }
}

//playSound function, plays inputted sound
function playSound(name, volume = 1) {
    let sound = new Audio("sounds/" + name + ".mp3")
    sound.volume = (volume <= 1) ? volume : 1;
    sound.play();
}

//this function is the loading animation as well as the loading page cancel
//haven't coded the cancel yet, will soon
async function loadingAnimation() {
    let loadingText = document.createElement('h2');
    loadingText.innerText = 'Loading';
    document.getElementById('loading').appendChild(loadingText);
    loadingInterval = setInterval(interval => {
        if (loadingText.innerText != 'Loading...') {
            loadingText.innerText += '.';
        } else {
            loadingText.innerText = 'Loading';
        }
    }, 1000);
    await preloadImage();
    killInterval();
}

//clears intervals and sets new pages
//only works with loading for now, dont know if expansion needed
function killInterval() {
    clearInterval(loadingInterval);
    movePage('mainMenu');
}

//testing function
function setNone() {
    killInterval();
    startGame();
}

// updateDialog function, updates the dialog in the dialog box
async function updateDialog(dialogData, imgData) {
    let box = document.getElementById('dialogBox');
    box.innerHTML = ``;

    let boxImage = document.createElement('img');
    box.appendChild(boxImage);
    let boxText = document.createElement('p');
    box.appendChild(boxText);

    if (typeof imgData == 'object') {
        boxImage.setAttribute('alt', imgData[1]);
        boxImage.setAttribute('src', '/images/' + imgData[0] + '.png');
        boxImage.setAttribute('id', 'boxImage');
    } else {
        boxImage.remove();
    }

    let displayedText = '';
    nextText = ['', ''];
    clickable = false;
    for (let letter of dialogData) {
        let setHeight = Math.trunc(boxText.offsetHeight / box.offsetHeight * 10);
        if (setHeight < 8) {
            if (letter != ' ') {
                boxText.innerText += letter;
                displayedText += letter;
            } else {
                boxText.append(' ');
            }
            await sleep(1);
        } else {
            boxText.style.height = '160px';
            displayedText = displayedText.split('');
            displayedText.pop();
            for (let i = 0; i < dialogData.length; i++) {
                if (displayedText[i] !== dialogData[i]) {
                    nextText[0] += dialogData[i];
                }
            }
            clickable = true;
            nextText[1] = imgData;
            let boxArrow = document.createElement('img');
            box.appendChild(boxArrow);
            console.log(displayedText.join(''));
            boxArrow.setAttribute('src', '/images/arrow-down.gif');
            boxArrow.setAttribute('alt', 'Clicking Indicator');
            boxArrow.setAttribute('id', 'boxArrow');
        }
    }
}

//this function creates the options for a choice
//doesnt work :)
function createChoice(options) {
    summonDialog('off');
    let optionsDiv = document.createElement('div');
    optionsDiv.setAttribute('id', 'optionsDiv');
    for (let option of options) {
        let optButton = document.createElement('button');
        optButton.innerText = option;
        optionsDiv.appendChild(optButton);
    }
}

//creates puzzle elements
function createPuzzle() {

}

function combatSys() {
    
}

async function preloadImage() {
for (i = 0; i < preload.length; i++) {
    images[i] = new Image();
    images[i].src = preload[i];
}
return new Promise(resolve => {
    setTimeout(function () {
        resolve("\t\t This is second promise");
        console.log("Returned second promise");
    }, 4000);
});
}

//pauses functions
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms || DEF_DELAY));
}

//event listeners
//this listener looks for all clicks done on the page and updates dialog if it's done loading
document.addEventListener('click', event => {
    if (clickable) {
        updateDialog(nextText[0], nextText[1]);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    loadingAnimation()    
});