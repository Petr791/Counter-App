const counterValue = document.querySelector('#counter-value');
const btnIncreaseOne = document.querySelector('#btnIncreaseOne');
const btnIncreaseTwo = document.querySelector('#btnIncreaseTwo');
const btnReset = document.querySelector('#btn-reset');

const btns = document.querySelectorAll('.counter__btn--increase');
//console.log(btns);



const COUNTER_INITIAL_VALUE = 0;
let counter = COUNTER_INITIAL_VALUE;

counterValue.innerText = counter;


/*Вариант 1 */
// Событие по клику установлено отдельно на каждую кнопку

//  btnIncreaseOne.addEventListener('click', function () {
// 	counter = counter + parseInt(btnIncreaseOne.dataset.pools);
// 	counterValue.innerText = counter;
// });

//  btnIncreaseTwo.addEventListener('click', function () {
// 	counter = counter + parseInt(btnIncreaseTwo.dataset.pools);
// 	counterValue.innerText = counter;
// }); 



/*Вариант 2 */
// Событие по клику установлено на любую из группы кнопок

btns.forEach((btn) => {

    btn.addEventListener('click', function() {
        counter = counter + parseInt(btn.dataset.pools);
        counterValue.innerText = counter;
    });

});

// сброс
btnReset.addEventListener('click', function() {
    counter = COUNTER_INITIAL_VALUE;
    counterValue.innerText = counter;
});




/*Вариант 3 */

// Используется jQuery

// $(document).ready(function() {
//     //console.log('Готово!');
//     var counterValueJquery = $("#counter-value");

//     var COUNTER_INITIAL_VALUE_Jquery = 0;
//     var counterJquery = COUNTER_INITIAL_VALUE_Jquery;
//     counterValueJquery.text(counterJquery);

//     $('.counter__btn--increase').on('click', function() {
//         counterJquery = counterJquery + parseInt($(this).attr('data-pools'));
//         counterValueJquery.text(counterJquery);
//     });

//     // сброс
//     $('#btn-reset').click(function() {
//         counterJquery = COUNTER_INITIAL_VALUE_Jquery;
//         counterValueJquery.text(counterJquery);
//     });

// });