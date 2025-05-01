//variables
let storyObj = {
    story: {
        text: {
            prologue: 'They say that green was as ever present as the sun on this planet only a couple of years ago. The green or nature was something seen even in the most bustling of cities. Now there is no nature, or what is left has hidden away from the eyes of humans, but humans persist without nature. We keep persisting, we make artificial habitats, desaltinate the sea, all to keep going.',
            prologueDramaticPause: 'But now as I look at this burning city I can’t help but think that there is no future left for us.',
            intro: 'The alarm blares waking me up, and I stare at the alarm clock a bit before I muster the will to get up.',
            introExplore: "I get up and look outside my window to see a narrow alleyway, there’s people working construction on this street again. I hate my job but in comparison to theirs it's not that bad.",
            introShower: "I walk into the bathroom and have to pull out my shower as I put away the toilet as there’s not enough room to actually have a toilet and shower. I get into my shower and wash as quickly as I possibly can so I don’t have to waste precious water. As I get out, I try not to look at my face, it's better not to tell how I look. I quickly brush my teeth and get out of the shower.",
            introEnterance: "I look for the thousandth time at the shabby place I call home. It’s a two room apartment that, if I stretch out my hands, can touch from end to end. Thankfully I lucked out on the government housing and at the very least have my own separate bathroom, every other poor soul has to go all the way down to the foyer.",
            introLeave: "After making sure I have everything I put on a mask so as to not irritate my lungs with the pollutants in the outside air.",
            introWTW: "I walk along the street breathing in what feels like 20 cigarettes at once. With no one to stop them some of the residential areas have been cleared to make way for factories leading to this cloud of smog. While I’m walking I like to imagine that I’m doing something better with my life.",
            introBuilding: "I walked for another 10 minutes and I arrived at my destination, a branch of the cyberlife company.",
            introEnter: "I entered through the door and walked over to the elevator, stopping in the carriage next to a tall bearded man. I press the 34th floor button, a floor consisting of a single work desk and miles of server racks. I walk out of the elevator when I hear the low ding, moving to my desk and booting on the main database’s computer.",
            introWork: "I place my hands on the keyboards and begin to navigate the files, searching for any files or pieces of data that are no longer needed. A few minutes after I began, I stumbled upon a report made to one of the higher ups, ‘Laboratory report on the prevention of android sentience’.",
            introReact: "I was unsure of what I was looking at, at first but as I started reading more and more about the ways they stopped androids from having free will I felt"
        },
        backImages: [],
        images: [['download', 'test image']],
    },
    choices: {
        1: ['Satisfaction', 2],
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
let puzzleInfo = [];
// let savedChoices = [];
//classes
//
class item {
    constructor(name, description, type, effects, value) {
        this.name = name;
        this.description = description;
        this.type = type
        this.effects = effects
        this.value = value
    }
}

class weapon extends item {
    constructor(name, description, type, effects, damage) {
        super(name, description, type, effects);
        this.damage = damage;
    }
}

class healingItem extends item {
    constructor(name, description, type, healingAmount, effects) {
        super(name, description, type, effects);
        this.healingAmount = healingAmount;
    }
}
const TechnoBlade = new weapon('TechnoBlade', '', 'Weapon/Melee', 'Electric Damage/Slash Damage', 70)
const stimBoost = new healingItem('Stim-Boost', 'Speeds up cell division to close wound', 'healing', 10)
const nanites = new healingItem('Nanites', `"Nanomachines, son. They harden in response to physical trauma."`, 30, 15 )
const keyCard = new item('Key', 'Opens up boss room', 'Item', 'Opens Something', 1)
const pistol = new weapon('Pistol', '', "Weapon/Ranged", 'Piercing Damage', 30 )
const bat = new weapon('Bat', '', 'Weapon/Melee', 'Blunt Damage', 15 )
const knife = new weapon('Knife', '', 'Weapon/Melee', 'Slash Damage', 10 )
const shiv = new weapon('Shiv', '', 'Weapon/Melee', 'None', 5)


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
    constructor(health, defense, damage, specials, effects, choicesMade = [], items = []) {
        for (let property of arguments) {
            this[property] = property;
        }
    }
}

let user = new player(100, 0, 10, '', '', storyObj.choices)

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


function inventoryMake() {

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
    user['choicesMade'].push(choice);
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
    puzzleInfo = [];
    switch (puzzleNo) {
        case 1:
            puzzleInfo = [[{image: 'corner.png', posStart: 90, posEnd: 0},{image: 'corner.png', posStart: 0, posEnd: 0},{image: 'corner.png', posStart: 0, posEnd: 0},{image: 'corner.png', posStart: 0, posEnd: 0}]
            ,[{image: 'corner.png', posStart: 90, posEnd: 0},{image: 'corner.png', posStart: 0, posEnd: 0},{image: 'corner.png', posStart: 0, posEnd: 0},{image: 'corner.png', posStart: 0, posEnd: 0}]
            ,[{image: 'corner.png', posStart: 90, posEnd: 0},{image: 'corner.png', posStart: 0, posEnd: 0},{image: 'corner.png', posStart: 0, posEnd: 0},{image: 'corner.png', posStart: 0, posEnd: 0}]
            ,[{image: 'corner.png', posStart: 90, posEnd: 0},{image: 'corner.png', posStart: 0, posEnd: 0},{image: 'corner.png', posStart: 0, posEnd: 0},{image: 'corner.png', posStart: 0, posEnd: 0}]];
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

    let outterIndex = 0;
    for(let row of puzzleInfo){
        let index = 0;
        let puzzleRow = document.createElement('div');
        for(let square of row){
            let tile = document.createElement('button');
            tile.id = `circuitButton${outterIndex}${index}`;
            tile.setAttribute('onclick', `rotateButton(${outterIndex}, ${index})`);

            let tileImg = document.createElement('img');
            tileImg.src = `images/${square.image}`;
            tileImg.id = `circuitButtonImg${outterIndex}${index}`;
            tileImg.style.rotate = `${square.posStart}deg`

            tile.appendChild(tileImg);
            puzzleRow.appendChild(tile);

            index++;
        }
        outterIndex++;
        puzzleBox.appendChild(puzzleRow);
    }
    puzzlePage.appendChild(puzzleBox);
}

function rotateButton(num1, num2){
    let rotation = document.getElementById(`circuitButtonImg${num1}${num2}`);
    let newRotation = parseInt(rotation.style.rotate.match(/\d+/g));
    newRotation += 90;
    if(newRotation != 360){
        rotation.style.rotate = `${newRotation}deg`;
    }else{
        rotation.style.rotate = `0deg`
    }
}

function checkPuzzle(){
    let puzzleBox = document.getElementById('puzzleBox');
    let outterIndex = 0;
    let counter = 0;
    for (let rows of puzzleBox.childNodes){
        let index = 0;
        for(let tiles of rows.childNodes){
            let tileImg = tiles.childNodes[0];
            if(tileImg.style.rotate == `${puzzleInfo[outterIndex][index].posEnd}deg`){
                counter++;
            }
            index++;
        }
        outterIndex++;
    }
    if(counter == (curPuzzleSize**2)){
        if(document.getElementById('notificationDiv')){
            document.getElementById('notificationDiv').remove();
        }
        puzzleBox.remove();
        movePage('mainView');
        summonDialog('on');
        // updateDialog(nextDialog);
    }else{
        let page = document.getElementById('puzzles');
        let notifDiv;
        if(document.getElementById('notificationDiv')){
            notifDiv.remove();
        }
        notifDiv = document.createElement('div');
        notifDiv.id = 'notificationDiv';
        notifDiv.innerHTML = `<h2>Circuit has Failed</h2>`;
        page.appendChild(notifDiv);
    }
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
    // preloadImage();
    // loadingAnimation();
    movePage('puzzles');

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