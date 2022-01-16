console.log('JS OK')
/*
Il programma dovrà mostrare una form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo).
*/
// STEP 1
// SEZIONE FORM
const userField = document.getElementById('user');
const kmField = document.getElementById('km');
const ageField = document.getElementById('age');
const generateButton = document.getElementById('generate-button');
const resetButton = document.getElementById('reset-button');

// ticket section
const ticketSection = document.getElementById('ticket-section');
const userPlaceholder = document.getElementById('passenger-name');
const offerPlaceholder = document.getElementById('offer');
const carrozzaPlaceholder = document.getElementById('carrozza');
const cpPlaceholder = document.getElementById('cp');
const pricePlaceholder = document.getElementById('price');

// STEP 2

generateButton.addEventListener('click', function () {
    // STEP 3 recupero i valori
    const userValue = userField.value;
    const kmValue = parseInt(kmField.value);
    const ageValue = ageField.value;

    // STEP 4 calcolo prezzo base

    let price = 0.21 * kmValue;
    let discountOffer = 'Tariffa ordinaria'
    // STEP 5 CALCOLARE LO SCONTO
    if (ageValue === 'min') {
        price *= 0.8;
        discountOffer = 'Tariffa giovani';
    } else if (ageValue === 'over') {
        price *= 0.6;
        discountOffer = 'Tariffa senior';
    }

    // STEP 6 CARROZZA RANDOM

    const carNum = Math.floor(Math.random() * 12) + 1;

    // STEP 7 CARROZZA RANDOM

    const cpNum = Math.floor(Math.random() * (100000 - 90000)) + 90000;

    // DYSPLAY RESULTS
    userPlaceholder.innerText = userValue;
    pricePlaceholder.innerText = price.toFixed(2) + '€';
    offerPlaceholder.innerText = discountOffer;
    carrozzaPlaceholder.innerText = carNum;
    cpPlaceholder.innerText = cpNum;

})