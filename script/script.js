// FUNCTION
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
// CONST
const priceForKm = 0.21;
// DOM ELEMENTS
const formElm = document.getElementById("form");
const fullNameFieldElm = document.getElementById("fullname-field");
const kmFieldElm = document.getElementById("km-field");
const ageFieldElm = document.getElementById("age-field");
const btnCreateElm = document.getElementById("btn-create");
const btnResetElm = document.getElementById("btn-reset");
const fullNameCardElm = document.getElementById("fullname")
const ticketPriceCardElm = document.getElementById("ticketprice")
const ageCardElm = document.getElementById("agetype");
const wagonCardElm = document.getElementById("wagon");
const cpCardElm = document.getElementById("cp");
const ticketElm = document.querySelector(".ticket")

// DOM ELEMENTS
formElm.addEventListener("submit", function(event) {
    event.preventDefault();
    const km = Number(kmFieldElm.value);
    const age = ageFieldElm.value;
    let price = km * priceForKm;

    if(ageFieldElm.value === 'Biglietto Ridotto') {
        price = price * 0.8;
    } else if(ageFieldElm.value === 'Biglietto Senior') {
        price = price * 0.6;
    }

    price = price.toFixed(2);
    fullNameCardElm.innerHTML = fullNameFieldElm.value;
    ticketPriceCardElm.innerHTML = price + '€';
    ageCardElm.innerHTML = ageFieldElm.value;
    wagonCardElm.innerHTML = getRndInteger(1, 10);
    cpCardElm.innerHTML = getRndInteger(90000, 99999);
    ticketElm.classList.remove('ticket');

});

btnResetElm.addEventListener("click", function(event){
    ticketElm.classList.add('ticket');

})
