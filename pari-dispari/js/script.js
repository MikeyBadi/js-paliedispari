// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.  x
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). x
// Sommiamo i due numeri. x
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).x
// Dichiariamo chi ha vinto.
// Bonus: L’inserimento avviene tramite un campo input.



const oddEven = prompt("Vuoi giocare Pari o Dispari?").toUpperCase();

console.log(oddEven);

let playerNum = parseInt(prompt("inserisci il tuo numero da 1 a 5"));

console.log(playerNum);


let pcNum = compNum(1,5)
console.log(pcNum);

function compNum(min, max){
  return Math.floor(Math.random()*(max - min +1) + min)
};

const somma = (playerNum + pcNum);

console.log (somma);

if (somma % 2 === 0 && oddEven === "PARI" || somma % 2 !== 0 && oddEven === "DISPARI"){
 document.querySelector("#result").innerHTML = `Hai estratto il numero ${playerNum} ed il pc ha estratto il numero ${pcNum} la loro somma è ${somma} ed hai scelto ${oddEven}: Complimenti hai vinto!`;
} else{
  document.querySelector("#result").innerHTML = `Hai estratto il numero ${playerNum} ed il pc ha estratto il numero ${pcNum} la loro somma è ${somma} ed hai scelto ${oddEven}: mi dispiace ma hai perso`;
};




// const btnGo = document.querySelector("button");

// btnGo.addEventListener("click")