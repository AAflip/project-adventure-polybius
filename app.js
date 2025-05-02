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
            introReact: "I was unsure of what I was looking at, at first but as I started reading more and more about the ways they stopped androids from having free will I felt",
            corpDecision: "Satisfaction, these things were machines, made by our own hands, why should they have a need for sentience, they just need to do what they’re programmed to do.",
            corpOutreach: "Regardless of how I feel, I still have a job to do, so I delete the file and continue on with my work. As I’m clocking out my boss grabs my shoulder, “Hey there, you’re the one we have cleaning up our servers right? I saw that you had a look at one of our more private files and we would like to offer you a job regarding it.” I almost stumbled from surprise, “This is an opportunity!” I think, and immediately agree to his offer. “Great! Let me take you upstairs to meet your new project lead and give you your first assignment.”",
            corpMentor: "Nearly 30 minutes later, I arrive at the apartment building. I grab my items and prepare to enter, when Daniel’s voice comes through my earpiece, “A little warning before you go in, he’ll probably be expecting you, so when you go in you’re going to have to disarm his traps with your before you can get to him. You can interact with the puzzles by clicking on your screen, and use items by clicking on the item and then where you want to use it.” I nod, then kick down the door to begin my mission.",
            corpBackOut: "As I see the target’s death I can't help but still feel unsure if I still want to do this. I take a moment to gather my thoughts away from the prying eyes of this organization and decide",
            corpStay: "that this organization isn't for me, the thought of sentient beings being treated like this changes everything",
            corpProp: `You: “So what exactly is the goal of this organization Mentor: “It’s obvious isn’t it, why would I not get mad you read a document more confidential than the president’s launch codes? We want to keep these androids under our control. These things, they think they have memories, emotions, how cute. They are simply imitating humans. They are cold and unfeeling on the inside using a human appearance to disguise their intentions of rebelling”`,
            corpAllies: `Mentor: “In order to aid you in stopping these, walking computers, the company and I have decided to allot you a partner. They will assist you in understanding the company’s goals and reasoning, as well as help you in getting to your objective. Though you’ll have to defeat any enemies on your own. Ah, here they are now!” *Ally Walks in to the room* Mentor: “This is Darryl, they will be assisting you in all of your future missions. Speaking of which, you have another mission! This one will require you to eliminate an android that our sensors have perceived as being partially sentient. The GPS locator has determined that this particular bucket of bolts is in the sewers under Main Street.”`,
            corpMissionChoice: `Mentor: “Well, there’s that mission, or you could take this other mission. It’s a recon mission, you will need to follow members of the resistance back to one of their bases, and then get information from them, although you may have a higher chance of running into some of the resistance. You can find the person in the xxSt Diner. Either way, report back to me once you’ve completed the mission”`,
            corpMission2: `Robot: I decided that I would rather terminate the process of that robot. I turn to my new partner and ask them about their opinion, but they just shrug in response. 20 minutes later we’re wading through the city’s main sewer system, looking for a place where a newly sentient robot would hide. Eventually we stumble upon a small raised room, with muttering and electrical buzzing coming from the open doorway. Ally: “There he is!” Darryl barrels into the room in an attempt to capture the stray android and alerting it to our presence. The android easily dodges Darryl as he dives for our objective, and runs through the door at the opposite end of the room. The slamming of the door seems to have activated a kind of security system in the room, barring me from opening the door. Ally: “According to the map that path is a deadend, so all we need to do is open that door and we can finish our mission. Looks like you’ll have to disable the security system first.”`,
            corpAfterPuzzle1: `Ally: “Okay, now that the doors open he should be right there, so be ready to fight” I nod as Darryl reaches over and opens the door, revealing the nervous android. Ally: “You’ve got nowhere to run now!”`,
            corpAfterBattle1: ` Ally: “Good job, now let’s go and report back to the boss before anyone sees-” Rebel: “Sorry, but it’s too late for that. I was watching and broadcasting the whole time! Now everyone will know of your evilness”`
        },
        backImages: [],
        images: [['download', 'test image']],
    },
    choices: {
        1: ['Satisfaction', 'Disgust !DeadEnd!', 'Conflicted !DeadEnd!'],
        2: ['Stay on Corporate Path', 'Seek out the Rebels !DeadEnd!', 'Go Solo !DeadEnd!'],
        3: ['Recon Mission', 'Other Mission']
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
    constructor(name, description, type, effects, value, amount) {
        this.name = name;
        this.description = description;
        this.type = type
        this.effects = effects
        this.value = value
        this.amount = amount
    }
}

class weapon extends item {
    constructor(name, description, type, effects, damage, amount) {
        super(name, description, type, effects, amount);
        this.damage = damage;
    }
}

class healingItem extends item {
    constructor(name, description, type, healingAmount, effects, amount) {
        super(name, description, type, effects, amount);
        this.healingAmount = healingAmount;
    }
}
const TechnoBlade = new weapon('TechnoBlade', '', 'Weapon/Melee', 'Electric Damage/Slash Damage', 30, 1)
const stimBoost = new healingItem('Stim-Boost', 'Speeds up cell division to close wound', 'Healing', 20, 0, 5, 1)
const nanites = new healingItem('Nanites', `"Nanomachines, son. They harden in response to physical trauma."`, 'Healing', 40, 15, 5)
const pistol = new weapon('Pistol', '', "Weapon/Ranged", 'Piercing Damage', 25, 1)
const bat = new weapon('Bat', '', 'Weapon/Melee', 'Blunt Damage', 15, 1)
const knife = new weapon('Knife', '', 'Weapon/Melee', 'Slash Damage', 10, 1)
const shiv = new weapon('Shiv', '', 'Weapon/Melee', 'None', 10, 1)
let items = [TechnoBlade, stimBoost, nanites, pistol, bat, knife, shiv]

//this class handles all the enemies
class enemy {
    constructor(name, health, damage, defense, attacks = [], special) {
        this.name = name
        this.health = health
        this.damage = damage
        this.defense = defense
        this.attacks = attacks
        this.special = special
    }
}

//this class handles the player and all stats related to them
class player {
    constructor(health, defense, damage, specials, effects, choicesMade = [], items = []) {
        this.health = health
        this.damage = damage
        this.defense = defense
        this.specials = specials
        this.effects = effects
        this.choicesMade = choicesMade
        this.items = items
    }
}

const user = new player(100, 0, 5, '', '', storyObj.choices, items)
const rebelScum1 = new enemy('Rebel Scum 1', 50, 10, 10, '', 'Slash', '')
const rebelScum2 = new enemy('Rebel Scum 2', 50, 20, 20, '', 'Slash', '')
const rebelSolider1 = new enemy('Rebel Soldier 1', 90, 20, 10, '', 'Slash', '')
const rebelSoldier2 = new enemy('Rebel Soldier 2', 90, 25, 20, '', 'Slash', '')
const rebelCommander1 = new enemy('Rebel Commander 1', 130, 30, 30, '', 'Slash', '')
const rebelCommander2 = new enemy('Rebel Commander 2', 160, 50, 40, '', 'Slash', '')
const boss1 = new enemy('Boss 1', 150, 20, 40, '', 'Electric Whirl')
const boss2 = new enemy('Boss 2', 200, 30, 30, '', 'QuickSilver', '')
const boss3 = new enemy('Boss 3', 400, 40, 40, '', 'Electric Whirl')
const boss4 = new enemy('Boss 4', 600, 40, 60, '', 'Electric Whirl')
const finalBoss = new enemy('Final Boss', 1000, 60, 60, '', 'Electric Whirl')


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


function inventoryMake(a) {
    if (a == 1) {
        for (let i = 0; i < items.length; i++) {
            document.getElementById('inv').insertAdjacentHTML('afterbegin',
                `<p>${items[i].name}: ${items[i].type} <br> ${items[i].description}</p> `)
        }
    }
    if (a == 2) {
        for (let i = 0; i < items.length; i++) {
            document.getElementById('inv').insertAdjacentHTML('afterbegin',
                `<button id="${items[i].name}" onclick="getName('${items[i].name}', '${items[i].name}1')">${items[i].name}: ${items[i].type} x${items[i].value}</button>
                 <p id="${items[i].name}1">Description: ${items[i].description}</p>`)
        }
    }
}

function getName(name, pName) {
    itemUsing = items.filter(obj => {
        return Object.values(obj).includes(name)
    })
    let notEquipped = true
    nameID = document.getElementById(name)
    pNameID = document.getElementById(pName)
    if (itemUsing[0].type.includes('Weapon')) {
        if (notEquipped) {
            let weaponDamage = itemUsing[0].damage
            user.damage += weaponDamage
            nameID.outerHTML = `<button id="${name}" onclick="unEquip('${name}')">` + `${itemUsing[0].name}:` + ` ${itemUsing[0].type}` + ' Equiped' + '</button>'
            notEquipped = false
            return weaponDamage
        }
        else {
            user.damage -= weaponDamage
            nameID.outerHTML = `<button id="${name}" onclick="unEquip('${name}')">` + `${itemUsing[0].name}:` + ` ${itemUsing[0].type}` + '</button>'
        }
        // Function isn't put in yet
    }
    if (itemUsing[0].type == 'Item') {
        console.log('true')

        nameID.remove()
        pNameID.remove()
    }
    if (itemUsing[0].type == 'Healing') {
        console.log(itemUsing[0])
        user.health = itemUsing[0].healingAmount
        if (itemUsing[0].value > 0) {
            itemUsing[0].value -= 1
            nameID.innerText
        }
        if (itemUsing[0].value < 1) {
            nameID.remove()
            pNameID.remove()
        }
    }
}

function unEquip(name) {
    document.getElementById(name).outerHTML = `<button id="${name}" onclick="getName('${name}')">` + `${itemUsing[0].name}:` + ` ${itemUsing[0].type}` + '</button>';
    user.damage -= itemUsing[0].damage;
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
    movePage('inventory');
}

//clears intervals and sets new pages
//only works with loading for now, dont know if expansion needed
function killInterval() {
    clearInterval(loadingInterval);
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
async function updateDialog(dialogData, imgData = "") {
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
            puzzleInfo = [[{ image: 'node.png', posStart: 0, posEnd: 0 }, { image: 'corner.png', posStart: 0, posEnd: 0 }, { image: 'corner.png', posStart: 0, posEnd: 90 }, { image: 'corner.png', posStart: 0, posEnd: 0 }, { image: 'node.png', posStart: 0, posEnd: 90 }]
                , [{ image: 'line.png', posStart: 0, posEnd: 90 }, { image: 'line.png', posStart: 0, posEnd: 90 }, { image: 'corner.png', posStart: 0, posEnd: 270 }, { image: 'corner.png', posStart: 0, posEnd: 180 }, { image: 'node.png', posStart: 0, posEnd: 0 }]
                , [{ image: 'corner.png', posStart: 0, posEnd: 270 }, { image: 't-shape.png', posStart: 0, posEnd: 0 }, { image: 'battery2.png', posStart: 0, posEnd: 0 }, { image: 'corner.png', posStart: 0, posEnd: 0 }, { image: 'corner.png', posStart: 0, posEnd: 180 }]
                , [{ image: 'corner.png', posStart: 0, posEnd: 0 }, { image: 't-shape.png', posStart: 0, posEnd: 180 }, { image: 't-shape.png', posStart: 0, posEnd: 0 }, { image: 't-shape.png', posStart: 0, posEnd: 270 }, { image: 'node.png', posStart: 0, posEnd: 0 }]
                , [{ image: 'node.png', posStart: 0, posEnd: 180 }, { image: 'node.png', posStart: 0, posEnd: 180 }, { image: 'node.png', posStart: 0, posEnd: 270 }, { image: 't-shape.png', posStart: 0, posEnd: 0 }, { image: 'corner.png', posStart: 0, posEnd: 180 }]];
            curPuzzleSize = 5;
            break
        case 2:
            puzzleInfo = [];
            curPuzzleSize = 7;
            break
        case 3:
            puzzleInfo = [];
            curPuzzleSize = 9;
            break
        case 4:
            puzzleInfo = [];
            curPuzzleSize = 11;
            break
    }

    let outterIndex = 0;
    for (let row of puzzleInfo) {
        let index = 0;
        let puzzleRow = document.createElement('div');
        for (let square of row) {
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

function rotateButton(num1, num2) {
    let rotation = document.getElementById(`circuitButtonImg${num1}${num2}`);
    let newRotation = parseInt(rotation.style.rotate.match(/\d+/g));
    newRotation += 90;
    if (newRotation != 360) {
        rotation.style.rotate = `${newRotation}deg`;
    } else {
        rotation.style.rotate = `0deg`
    }
}

function checkPuzzle() {
    let puzzleBox = document.getElementById('puzzleBox');
    let outterIndex = 0;
    let counter = 0;
    for (let rows of puzzleBox.childNodes) {
        let index = 0;
        for (let tiles of rows.childNodes) {
            let tileImg = tiles.childNodes[0];
            if (tileImg.style.rotate == `${puzzleInfo[outterIndex][index].posEnd}deg`) {
                counter++;
            }
            index++;
        }
        outterIndex++;
    }
    if (counter == (curPuzzleSize ** 2)) {
        if (document.getElementById('notificationDiv')) {
            document.getElementById('notificationDiv').remove();
        }
        puzzleBox.remove();
        movePage('mainView');
        summonDialog('on');
        // updateDialog(nextDialog);
    } else {
        let page = document.getElementById('puzzles');
        let notifDiv;
        if (document.getElementById('notificationDiv')) {
            notifDiv.remove();
        }
        notifDiv = document.createElement('div');
        notifDiv.id = 'notificationDiv';
        notifDiv.innerHTML = `<h2>Circuit has Failed</h2>`;
        page.appendChild(notifDiv);
    }
}

//
function startBattle(enemy) {
    movePage('battle');
    updateBackground('battleBackground.gif');
    let enemyImg = document.createElement('img');
    enemyImg.src = `images/${enemy.image}`;
    document.getElementById('battle').appendChild(enemyImg);
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
        });
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
    movePage('mainMenu')
    inventoryMake(2)
    // let testEnemy = {stuff: 'e,', image: 'node.png'}
    // startBattle(testEnemy);

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


// Object.values(storyObj.story.text).forEach(value => {textArray.push(value)})
// for (i = 1; i < textArray.length; i++ ) {
//     updateDialog(textArray[i])
// }