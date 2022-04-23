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


