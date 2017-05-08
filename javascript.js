var dropped = false;
var write = true;

function drop() {
    var nav = document.getElementById('nav');
    if (dropped === false) {
        nav.style.top = '0px';
        dropped = true;
    } else {
        nav.style.top = '-176px';
        dropped = false;
    }
}

function check() {
    var email = document.forms['contact']['Email'].value;
    if (email.indexOf('@') === -1) {
        if (write === true) {
            write = false;
            document.getElementById('email').innerHTML += '<h6 class="error">Invalid Email</h6>';
        }
        return false;
    }
}