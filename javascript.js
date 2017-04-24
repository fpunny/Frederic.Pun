var dropped = false;

function drop() {
    var nav = document.getElementById('nav');
    if (dropped === false) {
        nav.style.top = '0px';
        dropped = true;
    } else {
        nav.style.top = '-144px';
        dropped = false;
    }
}