
var horca = document.getElementById('horca');
var pincelhorca = horca.getContext('2d');
var letras = document.getElementById('letras');
var pincelletras = letras.getContext('2d');
let listaPalabras = ['ALURA','HTML','JAVA','ORACLE','PROGRAMACION','COMPUTADORA'];

function dibujarHorca(){
    pincelhorca.strokeStyle = 'white';
    pincelhorca.lineWidth= 10;
    pincelhorca.beginPath();
    pincelhorca.moveTo(100, 350);
    pincelhorca.lineTo(400, 350);
    pincelhorca.stroke();
    pincelhorca.moveTo(150, 350);
    pincelhorca.lineTo(150, 50);
    pincelhorca.stroke();
    pincelhorca.moveTo(145, 50);
    pincelhorca.lineTo(320, 50);
    pincelhorca.stroke();
    pincelhorca.moveTo(300, 50);
    pincelhorca.lineTo(300, 100);
    pincelhorca.stroke();
}

function cambioVisibilidad(){
    document.getElementById("horca").style.display="initial";
    document.getElementById("botones1").style.display="none";
    document.getElementById("botones3").style.display="block"; 
}

function dibujarEspacios(){
    
    let aux=102;
    let palabraAleatoria = Math.floor(Math.random()*listaPalabras.length);
    let espacioLetras=(400/listaPalabras[palabraAleatoria].length)-4;
    console.log(listaPalabras[palabraAleatoria]);
    pincelletras.strokeStyle = 'white';
    pincelletras.lineWidth= 5;
    pincelletras.beginPath();
    
    for(let i=0;i<listaPalabras[palabraAleatoria].length;i++){
        
        pincelletras.moveTo(aux, 100);
        pincelletras.lineTo(aux+espacioLetras, 100);
        pincelletras.stroke();
        aux=aux+espacioLetras+4;
    }
}

function iniciarJuego(){
    
    dibujarHorca();
    cambioVisibilidad(); 
    dibujarEspacios();   
}