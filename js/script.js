// writing in javascript first then convert to jquery

let increment = document.querySelector('#plu');
let decrement = document.querySelector('#min');
let input = document.querySelector('#change');

input.innerText = 0;

increment.addEventListener('click', () => {

    if (input.innerText <= 9)
        input.innerText = parseInt(input.innerText) + 1;
})

decrement.addEventListener('click', () => {
    if (input.innerText > 0) {
        input.innerText = parseInt(input.innerText) - 1;

    } else {
        input.innerText = 0
    }
})

// **********************************************************************************8

let hoodie = document.querySelector('#hoodie');
let cute = document.querySelector('#cute');
let back = document.querySelector('#back');
let current = document.querySelector('#currentImg');

hoodie.addEventListener('click', () => {
    current.src = 'images/hoodie.jpg';
    $('#hoodie').css('border', '3px solid #002b5c');
    $('#cute').css('border', '3px solid #cecece');
    $('#back').css('border', '3px solid #cecece');
})

cute.addEventListener('click', () => {
    current.src = 'images/cutie.jpg';
    $('#cute').css('border', '3px solid #002b5c');
    $('#hoodie').css('border', '3px solid #cecece');
    $('#back').css('border', '3px solid #cecece');
})

back.addEventListener('click', () => {
    current.src = 'images/back.jpg';
    $('#back').css('border', '3px solid #002b5c');
    $('#cute').css('border', '3px solid #cecece');
    $('#hoodie').css('border', '3px solid #cecece');
})

$('#currentImg').elevateZoom();



$('.wish').on('click', () => {
    $('#wish').css('color', 'red');
})





// $('#plu').css("color", "red");
// increment.style.color = 'red';
// $(increment).style.color = 'red';