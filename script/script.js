// DOM ELEMENTS
const formElm = document.getElementById("form")
const fullNameFieldElm = document.getElementById("fullname-field");
const kmFieldElm = document.getElementById("km-field");
const ageFieldElm = document.getElementById("age-field");
// ELEMENTS
const fullNameCardElm = document.getElementById("fullname")
const kmCardElm = document.getElementById("")
const ageCardElm = document.getElementById("agetype");

// DOM ELEMENTS
formElm.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Submitta")
    fullNameCardElm.innerHTML = fullNameFieldElm.value;
})

formElm.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Submitta")
    ageCardElm.innerHTML = ageFieldElm.value;
})


//const adultPrice = (kmFieldElm * 0.21);
//const kidsPrice = (kmFieldElm * 0.21) - ((kmFieldElm * 0.21) * 0.20);
//const seniorPrice = (kmFieldElm * 0.21) - ((kmFieldElm * 0.21) * 0.40);