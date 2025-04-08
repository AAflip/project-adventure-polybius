//variables
let storyObj = {
    
}

//initial function, all functions that should be run on start go in here
function init(){
    movePage('mainView');
    summonDialog('on');
}

//movePage function, shifts display of the sections, not the content
function movePage(to){
    let sections = document.getElementsByClassName('page');
    for(let section of sections){
        section.style.display = 'none';
    }
    document.getElementById(to).style.display = 'flex';
}

//summonDialog function, makes the dialog box visible/not visible
function summonDialog(state){
    let box = document.getElementById('dialogBox');
    if(state == 'on'){
        box.style.display = 'flex';
    }else{
        box.style.display = 'none';
    }
}

//playSound function, plays inputted sound
function playSound(name, volume=1){
    let sound = new Audio("sounds/"+name+".mp3")
    sound.volume = (volume <= 1) ? volume : 1;
    sound.play();
}

// updateDialog function, updates the dialog in the dialog box
function updateDialog(){

}

