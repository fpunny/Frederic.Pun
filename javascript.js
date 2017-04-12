var dropped = false;

function togglemenu() {
    var menu = document.getElementById('nav');
    if(dropped === false) {
        menu.style.top = '0px';
        dropped = true;
    } else {
        menu.style.top = '-172px';
        dropped = false;
    }
}