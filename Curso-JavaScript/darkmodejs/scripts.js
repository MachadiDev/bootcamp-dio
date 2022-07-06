const button = document.getElementById('mode-selector');
const titulo = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

const darkModeClass = 'dark-mode';

function changeMode() {
    changeClasses();
    changeText();
}

function changeClasses() {
    button.classList.toggle(darkModeClass);
    titulo.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}  

function changeText() {
    const lightMode = 'Light Mode';
    const darkMode = 'Dark Mode';
    if (body.classList.contains(darkModeClass)) {
        button.innerHTML = lightMode;
        titulo.innerHTML = darkMode + " ON";

        return;
    }
    button.innerHTML = darkMode;
    titulo.innerHTML = lightMode + " ON";
}

button.addEventListener('click', changeMode);