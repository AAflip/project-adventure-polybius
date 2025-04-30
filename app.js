//variables
let storyObj = {
    story: {
        text: {
            prologue: 'They say that green was as ever present as the sun on this planet only a couple of years ago. The green or nature was something seen even in the most bustling of cities. Now there is no nature, or what is left has hidden away from the eyes of humans, but humans persist without nature. We keep persisting, we make artificial habitats, desaltinate the sea, all to keep going. But now as I look at this burning city I can’t help but think that there is no future left for us.',
            intro: 'The alarm blares waking me up, and I stare at the alarm clock a bit before I muster the will to get up.',
            introExplore: "I get up and look outside my window to see a narrow alleyway, there’s people working construction on this street again. I hate my job but in comparison to theirs it's not that bad.",
            introShower: "I walk into the bathroom and have to pull out my shower as I put away the toilet as there’s not enough room to actually have a toilet and shower. I get into my shower and wash as quickly as I possibly can so I don’t have to waste precious water. As I get out, I try not to look at my face, it's better not to tell how I look. I quickly brush my teeth and get out of the shower.",
            introEnterance: "I look for the thousandth time at the shabby place I call home. It’s a two room apartment that, if I stretch out my hands, can touch from end to end. Thankfully I lucked out on the government housing and at the very least have my own separate bathroom, every other poor soul has to go all the way down to the foyer.",
            introLeave: "After making sure I have everything I put on a mask so as to not irritate my lungs with the pollutants in the outside air.",
            introWTW: "I walk along the street breathing in what feels like 20 cigarettes at once. With no one to stop them some of the residential areas have been cleared to make way for factories leading to this cloud of smog. While I’m walking I like to imagine that I’m doing something better with my life.",
            introBuilding: "I walked for another 10 minutes and I arrived at my destination, a branch of the cyberlife company.",
            introEnter: "I entered through the door and walked over to the elevator, stopping in the carriage next to a tall bearded man. I press the 34th floor button, a floor consisting of a single work desk and miles of server racks. I walk out of the elevator when I hear the low ding, moving to my desk and booting on the main database’s computer.",

        },
        backImages: [],
        images: [['download', 'test image']],
    },
    choices: {
        1: ['hello', 2],
    },
}
let nextText = ['', ''];
let clickable = false;
let imagesLoaded = false;
let loadingInterval;
let preload = ["./backgrounds/main.avif", "./images/brn.avif"]
let images = [];
let volume = 100;
let textSpeed = 25;
let curPuzzleSize = 0;
let openRoom;
//classes
//
class item {
    constructor(name, description, type, effects) {
        this.name = name;
        this.description = description;
        this.type = type
        this.effects = effects
    }
}

class weapon extends item {
    constructor(name, description, type, effects, damage) {
        super(name, description, type, effects);
        this.damage = damage;
    }
}

class healingItem extends item {
    constructor(name, description, type, healingAmount) {
        super(name, description, type);
        this.healingAmount = healingAmount;
    }
}
const TechnoBlade = new weapon('TechnoBlade', '', 'Weapon/Melee', 'Electric Damage +10', 30)
const stimBoost = new healingItem('Stim-Boost', 'Speeds up cell division to close wound', 'healing', 10)
const roomKey = new item('Key', 'Opens up boss room', 'Item', openRoom)


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
    // updateDialog(storyObj.story.text);
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
function playSound(name) {
    let sound = new Audio("sounds/" + name + ".mp3")
    sound.volume = (volume <= 1) ? volume : 1;
    sound.play();
}

//
function playVideo() {
    movePage('mainView');
    summonDialog('off');
    let mainView = document.getElementById('mainView');
    let background = document.getElementById('body');
    let backImage = background.style.backgroundImage;
    let video = document.getElementById('introVideo');
    background.style.background = 'black';
    mainView.style.display = 'none';
    video.style.left = '50%';
    video.volume = (volume / 100);
    video.play();
    let imgName = [];
    backImage = backImage.split('');
    if (backImage) {
        for (let i = 17; i < backImage.length; i++) {
            if (i < 26) {
                imgName.push(backImage[i]);
            }
        }
        imgName = imgName.join('');
    }
    video.addEventListener('ended', () => {
        video.remove();
        movePage('mainView');
        summonDialog('on');
        updateBackground(imgName);
    });
}

//this function is the loading animation as well as the loading page cancel
async function loadingAnimation() {
    let loadingText = document.createElement('h2');
    loadingText.innerText = 'Loading';
    document.getElementById('loading').appendChild(loadingText);
    loadingInterval = setInterval(() => {
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

function fullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    }
    else if (document.exitFullscreen) {
        document.exitFullscreen()
    }
}

//
async function updateBackground(imageUrl) {
    document.getElementById('body').style.backgroundImage = '';
    document.getElementById('body').style.background = '';
    if (imageUrl) {
        document.getElementById('body').style.backgroundImage = `url(backgrounds/${imageUrl})`
    } else {
        document.getElementById('body').style.background = 'black';
    }
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
    let moreText = false;
    for (let letter of dialogData) {
        let setHeight = Math.trunc(boxText.offsetHeight / box.offsetHeight * 10);
        if (setHeight < 8) {
            boxText.innerHTML += letter;
            displayedText += letter;
            await sleep(textSpeed);
        } else {
            moreText = true;
        }
    }
    if (moreText) {
        displayedText = displayedText.split('');
        displayedText.pop();
        displayedText = displayedText.join('');
        boxText.innerHTML = displayedText;
        clickable = true;
        nextText[1] = imgData;
        let boxArrow = document.createElement('img');
        box.appendChild(boxArrow);
        boxArrow.setAttribute('src', '/images/arrow-down.gif');
        boxArrow.setAttribute('alt', 'Clicking Indicator');
        boxArrow.setAttribute('id', 'boxArrow');
    }
    for (let i = 0; i < dialogData.length; i++) {
        if (displayedText[i] !== dialogData[i]) {
            nextText[0] += dialogData[i];
        }
    }
}

//
function chooseOption(choice) {
    document.getElementById('body').style.backdropFilter = ``;
    document.getElementById('optionsDiv').remove();
    summonDialog('on');
}

//this function creates the options for a choice
function createChoice(options) {
    summonDialog('off');
    let optionsDiv = document.createElement('div');
    optionsDiv.setAttribute('id', 'optionsDiv');
    for (let option of options) {
        let optButton = document.createElement('button');
        optButton.innerText = `${option}`;
        optButton.setAttribute('onclick', 'chooseOption(this.innerText)');
        optionsDiv.appendChild(optButton);
    }
    let optionsBox = document.getElementById('mainView');
    optionsBox.appendChild(optionsDiv);
    document.getElementById('body').style.backdropFilter = `blur(5px) brightness(0.5)`;
}

//creates puzzle elements
function createPuzzle(puzzleNo) {
    let puzzlePage = document.getElementById('puzzles');
    let puzzleBox = document.createElement('div');
    puzzleBox.id = 'puzzleBox';
    let puzzleInfo = [];
    switch (puzzleNo) {
        case 1:
            puzzleInfo = [[{image: 'corner.png', posStart: 0, posEnd: 0},{image: 'corner.png', posStart: 0, posEnd: 0},{image: 'corner.png', posStart: 0, posEnd: 0}],[],[],[]];
            curPuzzleSize = 4;
            break
        case 2:
            puzzleInfo = [];
            curPuzzleSize = 5;
            break
        case 3:
            puzzleInfo = [];
            curPuzzleSize = 5;
            break
        case 4:
            puzzleInfo = [];
            curPuzzleSize = 7;
            break
    }

    for(let row of puzzleInfo){
        let index = 0;
        for(let square of row){
            let tile = document.createElement('button');
            tile.id = `circuitButton${index}`;
            // tile.onclick = rotateButton();
            //need to write this function

            let tileImg = document.createElement('img');
            tileImg.src = `images/${square.image}`;
            tileImg.style.rotate = `${square.posStart}deg`

            tile.appendChild(tileImg);
            puzzleBox.appendChild(tile);

            index++;
        }
    }
    puzzlePage.appendChild(puzzleBox);
}

//
function startBattle() {
    movePage('battle');
    updateBackground('main.avif');
}

//
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
document.addEventListener('click', () => {
    if (clickable) {
        updateDialog(nextText[0], nextText[1]);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    loadingAnimation();
    preloadImage();
    movePage('mainMenu');
    // startBattle();

    document.getElementById('volumeGroup').addEventListener("input", (e) => {
        if (e.target.id == 'volumeNum') {
            document.getElementById('volumeSlide').value = e.target.value;
        } else {
            document.getElementById('volumeNum').value = e.target.value;
        }
        volume = e.target.value;
    });

    document.getElementById('textSpeedGroup').addEventListener("input", (e) => {
        if (e.target.id == 'textSpeedNum') {
            document.getElementById('textSpeedSlide').value = e.target.value;
        } else {
            document.getElementById('textSpeedNum').value = e.target.value;
        }
        textSpeed = e.target.value;
    });
});