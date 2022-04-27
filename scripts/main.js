const path = require("path");

let miFoto = document.querySelector('img');

miFoto.onclick = function(){
    let miSource = miFoto.getAttribute('src');
    if(miSource === 'images/foto-de-perfil.JPG') {
        miFoto.setAttribute('src', 'images/foto-de-perfil-2.jpeg');
    }else{
        miFoto.setAttribute('src','images/foto-de-perfil.JPG')
    }
}


// Customize welcome
let mybtn = document.getElementById('changeUser');
let myHeading = document.querySelector('h2');

function setUserName() {
    let myName = prompt('¡Hola! ¿Cómo te llamas?');
    if(!myName) {
        setUserName();
    } else{
        localStorage.setItem('name', myName);
        myHeading.textContent = `¡Bienvenidx, ${myName}!`;
    }
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = `¡Bienvenidx, ${storedName}!`;
}

mybtn.onclick = function() {
    setUserName();
  }


//Dark and light theme
const select = document.querySelector('select');
const body = document.querySelector('body');

function actualizarColor (fondo, letra){
    body.style.backgroundColor = fondo;
    body.style.color = letra;
}

select.addEventListener('change', () => ( select.value === 'oscuro') ? actualizarColor('rgb(26, 36, 71)','#FCEFC2') : actualizarColor('rgb(252,239,194, 0.5','rgb(26, 36, 71)'));

alert('bitch')

// const paths = document.getElementsByTagName('path');
// for(let i=0; i<paths.length; i++){
//     paths[i].addEventListener('click', cambiarClase);
// }

// function cambiarClase(){
//     this.classList.toggle('clicked');
// }

