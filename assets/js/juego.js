// 2C = Two of Clubs 
// 2D = Two of Diamonds
// 2H = Two of Hearts
// 2S = Two of Spades

let deck = [];
let tipos = ['C','D','H','S'];
let espaciales = ['A', 'J', 'Q', 'K']

//Esta funcion crea un Deck desordenado
const crearDeck = () => {

    for (let i = 2; i <= 10; i++){
        for(let tipo of tipos){
            deck.push(i + tipo);
        }
    }

    for(let tipo of tipos){
        for(espacial of espaciales){
            deck.push(espacial + tipo);
        }
    }
    deck = _.shuffle(deck)
    //console.log(deck);
}

crearDeck();

//Esta funcion me permite tomar una carta 

const perdirCarta = () => {
    let deckPedir= deck;
        if (deckPedir.length === 0){
            throw 'No hay cartas en el deck'
        }
            let carta = deckPedir.shift()
            //console.log(carta)
           //console.log(deckPedir)
    return carta;
}   
//Perdi Carta valor 

const valorCarta = ( carta ) => {

    const valor  = carta.substring(0, carta.length-1);
    //let puntos = 0;
    return  isNaN(valor) ? puntos = (valor === 'A') ? 11 : 10 : puntos = valor * 1;

}

const pruebaCarta = valorCarta(perdirCarta())
console.log(pruebaCarta)