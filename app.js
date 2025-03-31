//variables

//initial function, all functions that should be run on start go in here
function init(){

}

//movePage function, shifts display of the sections, not the content
function movePage(to){
    let sections = document.getElementsByClassName('page');
    for(let section of sections){
        section.style.display = 'none';
    }
    document.getElementById(to).style.display = 'flex';
}