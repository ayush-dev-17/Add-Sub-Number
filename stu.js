var cardvalue = 0;
var add = document.querySelector('#add');
var sub = document.querySelector('#sub');
var countervaluediv = document.querySelector('#cardvalue');

add.addEventListener('click', function(){
    cardvalue++;
     countervaluediv.textContent = cardvalue;
})

sub.addEventListener('click', function(){

    if (cardvalue > 0) {
        cardvalue--;
        countervaluediv.textContent = cardvalue;
            }
})