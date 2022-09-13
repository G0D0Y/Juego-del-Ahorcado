var horca = document.getElementById('horca');
var pincelhorca = horca.getContext('2d');
pincelhorca.fillStyle = 'grey';
pincelhorca.fillRect(0, 0, 600, 400);
var letras = document.getElementById('letras');
var pincelletras = letras.getContext('2d');
pincelletras.fillStyle = 'blue';
pincelletras.fillRect(0, 0, 600, 400);


let listaPalabras = ['ALURA','HTML','JAVA','ORACLE','PROGRAMACION','COMPUTADORA'];

function iniciarJuego(){
    let palabraAleatoria = Math.floor(Math.random()*listaPalabras.length);
    console.log(listaPalabras[palabraAleatoria].length);
    pincelletras.beginPath();
    pincelletras.moveTo(50, 50);
    pincelletras.lineTo(75, 50);
    pincelletras.stroke();
}