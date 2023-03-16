/* Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

const world = document.getElementById("world");
const checkButton = document.getElementById("check-world");

world.addEventListener("keyup", checkValidity)

function checkValidity() { //Controlla che l'input non sia una stringa vuota o un numero
    if (!isNaN(world.value) || (!world.value)) {
        checkButton.classList.add("disabled");
    }

    else {
        checkButton.disabled = false;
        checkButton.classList.remove("disabled");

    }

}

function reverseString(str) {//Data una stringa la restituisce al contrario
    return str.split('') // Separa ogni lettera della parola
    .reverse()  //Inverti l'ordine delle lettere
    .join('');;// Riuniscile assieme
}


function checkPalindrome() {//Controlla se è palindroma
    const reverseWorld = reverseString(world.value);//Prendi il valore dell'input e manipolalo con la funzione
    if (world.value === reverseWorld) {//Se il risultato coincide con la parola inserita = palindroma
        console.log("è palindroma")
    }
    else {
        console.log("non è palindroma")//Altrimenti non palindroma
    }
}

