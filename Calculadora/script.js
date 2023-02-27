let inputsValues = document.querySelectorAll('input');
let display = document.querySelector('#display');

calc = (x) => {
    display.value = eval(x);
};


inputsValues.forEach(input => {
    
    input.addEventListener('click', () => {
        if(display.value.length <= 11) {

            if(input.value != 'AC' && input.value != 'DE' && input.value != '='){
                display.value += input.value;

            }else if(input.value == 'AC') {
                display.value = '';

            } else if( input.value == 'DE') {
                display.value = display.value.slice(0, -1)

            } else if( input.value == '=') {
                calc(display.value);
            } 
        } else {
            alert('Você ultrapassou o limite da calculadora')
            display.value = '';
        }

    });

});