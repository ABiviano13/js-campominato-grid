/// FUNZIONI ///


// CREAZIONE GRIGLIA
//1. Creazione della griglia (essa verrà generata al click sul bottone)
//1.1 Creare una variabile che si prenda il contenitore della griglia dal DOM
const grigliaElement = document.querySelector('.grid-championship');
// console.log(grigliaElement);

//1.2 Creare una variabile che si prenda il bottone PLAY dal DOM
const BtnElement = document.querySelector('.btn');
// console.log(BtnElement);

//1.3 Creare un evento click sulla variabile del bottone
BtnElement.addEventListener('click', function() {
    //1.3.1 Rimuovere dall'elemento griglia la classe 'display-none'
    grigliaElement.classList.remove('display-none');
    // console.log(grigliaElement);
});

//1.4 Creare una variabile con il valore che vogliamo dare al lato della griglia (10)
let latoGriglia = Math.floor(Math.random() * (30 - 10 + 1) + 10);
// console.log(latoGriglia);

//1.5 Creare una variabile con il numero di celle che vogliamo avere
let celle = latoGriglia ** 2;
// console.log(celle);

//1.6 Creare un ciclo for
for (let i = 0; i < celle; i++){
    //1.6.1 Creiamo una variabile numero con l'indice incrementato di uno 
    let indiceIncrementato = i + 1;
    // console.log(indiceIncrementato);
    //1.6.2 Creiamo l'elemento che sarà la cella (createElement)
    const cellaElement = document.createElement('div');
    // console.log(cellaElement);
    cellaElement.style.width = 'calc(100% / 10)';
    // console.log(cellaElement);

    cellaElement.innerHTML += indiceIncrementato;
    //1.6.3 Stampiamo nel DOM (append)
    grigliaElement.append(cellaElement);


    
 //2. Al click su una cella si deve stampare il numero relativo alla cella cliccata sulla console
    cellaElement.addEventListener('click', function(){
        console.log(indiceIncrementato);

        //BONUS Aggiungere una classe per cambiarle il colore di background
        cellaElement.classList.add('cella');
        console.log(cellaElement);
    });
};

