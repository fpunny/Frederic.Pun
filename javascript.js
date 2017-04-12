var dropped = false;

function togglemenu() {
    var menu = document.getElementById('nav');
    if(dropped === false) {
        menu.style.top = '0vh';
        dropped = true;
    } else {
        menu.style.top = '-23.5vh';
        dropped = false;
    }
}