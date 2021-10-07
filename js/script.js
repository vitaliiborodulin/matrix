document.addEventListener('DOMContentLoaded', function() {

    const dateInput = document.getElementById('date'),
        error = document.querySelector('.area-error'),
        box1 = document.querySelector('.box1'),
        box2 = document.querySelector('.box2'),
        box3 = document.querySelector('.box3'),
        box4 = document.querySelector('.box4'),
        box5 = document.querySelector('.box5'),
        box6 = document.querySelector('.box6'),
        box7 = document.querySelector('.box7'),
        box8 = document.querySelector('.box8'),
        box9 = document.querySelector('.box9');

    const type = document.getElementById('type'),
        maleFlow = document.getElementById('male-flow'),
        femaleFlow = document.getElementById('female-flow'),
        endNum = document.getElementById('end-num');

    let firstNumber, secondNumber, thirdNumber, forthNumber, result, resultArr;
    let one, two, three, four, five, six, seven, eight, nine;
    let evenNum, oddNum;

    dateInput.addEventListener('input', function() {
        let date = this.value.split('-');
        year = date[0],
            month = date[1],
            day = date[2];

        age = year.slice(0, 2);

        if (age != 19 && age != 20) {
            error.innerHTML = 'Невалидные данные';
        } else {
            error.innerHTML = '';

            firstNumber = parseInt(sumDigits(year)) + parseInt(sumDigits(month)) + parseInt(sumDigits(day));
            secondNumber = sumDigits(firstNumber);

            age == 20 ? thirdNumber = firstNumber + 19 : thirdNumber = firstNumber - 2;

            forthNumber = sumDigits(thirdNumber);

            result = year + month + day + firstNumber + secondNumber + thirdNumber + forthNumber;
            resultArr = result.split('');


            if (age == 20) {
                one = resultArr.filter(item => item === '1').length + 1;
                two = resultArr.filter(item => item === '2').length;
                nine = resultArr.filter(item => item === '9').length + 1;
            } else {
                one = resultArr.filter(item => item === '1').length;
                two = resultArr.filter(item => item === '2').length + 1;
                nine = resultArr.filter(item => item === '9').length;
            }

            three = resultArr.filter(item => item === '3').length;
            four = resultArr.filter(item => item === '4').length;
            five = resultArr.filter(item => item === '5').length;
            six = resultArr.filter(item => item === '6').length;
            seven = resultArr.filter(item => item === '7').length;
            eight = resultArr.filter(item => item === '8').length;

            box1.innerHTML = '1'.repeat(one);
            box2.innerHTML = '2'.repeat(two);
            box3.innerHTML = '3'.repeat(three);
            box4.innerHTML = '4'.repeat(four);
            box5.innerHTML = '5'.repeat(five);
            box6.innerHTML = '6'.repeat(six);
            box7.innerHTML = '7'.repeat(seven);
            box8.innerHTML = '8'.repeat(eight);
            box9.innerHTML = '9'.repeat(nine);

            // тип личности
            if (one > two) {
                type.innerHTML = '1';
            } else if (one < two) {
                type.innerHTML = '2';
            } else {
                type.innerHTML = '3';
            }

            // Мужской-женский поток - считаем количество чет-нечет в квадратах
            evenNum = two + four + six + eight;
            oddNum = one + three + five + seven + nine;
            maleFlow.innerHTML = evenNum;
            femaleFlow.innerHTML = oddNum;

            // Итоговое число
            endNum.innerHTML = sumDigits(secondNumber);
        }

    });
});

function sumDigits(number) {
    let sum = 0;
    number = number.toString();
    for (let i = 0; i < number.length; i++) {
        sum += parseInt(number[i]);
    }
    return sum;
}