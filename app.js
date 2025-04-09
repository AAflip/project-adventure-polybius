//variables
let storyObj = {
    story: {
        text: ['123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890hjbfgkhjdsbkhjfdbhjbfdhjkgbhdsbjghfdsbjghfdjhsbgjhsdbfgjhdfsbgjkshdfgjkhdfsbgjkshdfbgjksdhfbgjhkdfsbgkjsdhfgbjsdkhbgjhdsfbgjhsdfbgjkhsdfgshjdkfbgsjdhkbfghjkdfbgjhskdfgbjhdfsbgjhdsfbgjdsfhgbksdfhjgbskdjhfgbsdkjhfgbsdjkfhbgkdjsfhgbsdjkhfgbsdkfjhgbsdkfhjgbsdkjhfgbsjdkhfgbskdjhfbgskdfjhbgskdfhgbsdfkjgbsdfkjhbgsdfjkhbgsdjfhgbdfgshkbgyukdsfhjdfgshbjdfshbjfgdsbhdfgbhjfghbjfgdfdgsbhjfdgsbhjdfbhjdfbhfdbhkbhdfbhjdfsgbhjfsjbhfgdsbjifgdjfgdsjkbdfgjksbjkgfdbhdfsgbhgfdbhfdgbhjfgdbhjfgdhjbfgdbhjfgdhjfdgbjfgdhjbhjdfgbhjgdfhbjgdrbhdgfbhjdfghjdfrhjbdgfjh'],
        backImages: [],
        images: [['download', 'test image']]
    },
    choices: {

    },
    choicesMade: []
}
let nextText = ['',''];
let clickable = false;

//initial function, all functions that should be run on start go in here
function init() {
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
        boxImage.setAttribute('src', '/images/'+imgData[0]+'.png');
    } else {
        boxImage.remove();
    }

    let displayedText = '';
    nextText = ['',''];
    clickable = false;
    for (let letter of dialogData) {
        let setHeight = Math.trunc(boxText.offsetHeight/box.offsetHeight * 10);
        if (setHeight < 8) {
            if (letter != ' ') {
                boxText.innerText += letter;
                displayedText += letter;
            } else {
                boxText.append(' ');
            }
            await sleep(1);
        }else{
            boxText.style.height = '160px';
            displayedText = displayedText.split('');
            displayedText.pop();
            for(let i=0;i<dialogData.length;i++){
                if(displayedText[i] !== dialogData[i]){
                    nextText[0] += dialogData[i];
                }
            }
            clickable = true;
            nextText[1] = imgData;
            let boxArrow = document.createElement('img');
            box.appendChild(boxArrow);
            boxArrow.setAttribute('src', '/images/arrow-down.gif');
            boxImage.setAttribute('alt', 'Clicking Indicator');
        }
    }
}

//pauses functions
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms || DEF_DELAY));
}


//event listeners
document.addEventListener('click', event => {
    if(clickable){
        updateDialog(nextText[0], nextText[1]);
    }
});
