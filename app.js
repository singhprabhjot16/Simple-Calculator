const buttons = document.querySelectorAll('.operator, .operand');
const input = document.querySelector('#expression');
const clear = document.querySelector('#clear');
const equalTo = document.querySelector('#equalTo');
const backSpace = document.querySelector('#backSpace');

for (const button of buttons) {
    button.addEventListener('click', function(e) {
        input.value = input.value.concat(button.innerText);
    });
}

clear.addEventListener('click', allClear);

equalTo.addEventListener('click', function(e) {
    compute();
});

backSpace.addEventListener('click', function(e) {
    input.value = input.value.slice(0, input.value.length - 1);
});

//input.addEventListener('keydown', function(e) {
//    if (e.key = 'Enter') {
//        compute();
//    }
//});

function compute() {
    if (input.value == '') return;
    const computation = eval(input.value);
    if (computation == 'Infinity') {
        input.classList.add('division-by-zero');
        input.value = "Can't Divide by Zero";
        const clearInput = setTimeout(() => {
            allClear();
            input.classList.remove('division-by-zero')
        }, 2000);
        return;
    }
    input.value = computation;
}

function allClear() {
    input.value = '';
}