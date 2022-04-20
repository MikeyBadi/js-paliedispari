// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Bonus: L’inserimento avviene tramite un campo input

const btn = document.querySelector("button");

btn.addEventListener('click', function(){
  const word = document.getElementById("word").value;

  function wordCheck(wordWritten){
   let wordReversed = "";
    for (let i = wordWritten.length; i >= 0; i--) { 
     wordReversed += wordWritten[i];
   }
  
    return wordReversed;
  }

  if( word == wordCheck(word)){
    document.querySelector("#result").innerHTML = `La parola ${word} è palindroma.`
  }else{
     document.querySelector("#result").innerHTML = `La parola ${word} non è una palindroma.`
  } 
})