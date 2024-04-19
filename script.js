let logo =document.querySelector('.top-login img');



function toggleMode() {
    //Toggle Dark/Light Mode
    const html = document.documentElement
    html.classList.toggle("light");

    //Change Logo in Dark/Light Mode

    if (html.classList.contains("light")) {
        logo.setAttribute('src', './assets/logo-light.png');
    }
    else {
        logo.setAttribute('src', './assets/logo.png');
    }
}

//Eye View Password Button
let input = document.querySelector('#passwordId');
let icon = document.querySelector('#eye-button ion-icon');

function eyeButtonClicked() {
    icon.classList.toggle('visible')
    if (icon.classList.contains('visible')) {
        input.type = "text";
        icon.name = "eye-off-outline";
    } else {
        input.type = "password";
        icon.name = "eye-outline";
    }
}