//Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
function arithmetic_mean_number(massif) {
    const numbers = massif.filter(element => typeof element === 'number');
    
    if (numbers.length === 0) {
      return null;
    }
    
    const sum = numbers.reduce((sum, numeric) => sum + numeric, 0);
    
    const average = sum / numbers.length;
    
    return average;
  }
  
const massif = [1, 'a', 2, 3, 'x', 4, 7,'f', 's', 6];
const result = arithmetic_mean_number(massif);
console.log(result);

//Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.
function doMath(x, znak, y) {
    let answer;
    
    switch (znak) {
        case '+':
        answer = x + y;
        break;
        case '-':
        answer = x - y;
        break;
        case '*':
        answer = x * y;
        break;
        case '/':
        if (y !== 0) {
            answer = x / y;
        } else {
            answer = 'Ділення на нуль неможливе';
        }
        break;
        case '%':
        answer = x % y;
        break;
        case '^':
        answer = Math.pow(x, y);
        break;
        default:
        answer = 'Невідома операція';
    }
    
    return answer;
    }

const x = parseFloat(prompt('Введіть перше число:'));
const znak = prompt('Введіть операцію (+, -, *, /, %, ^):');
const y = parseFloat(prompt('Введіть друге число:'));
  
const answer = doMath(x, znak, y);
console.log(`Результат: ${answer}`);

//Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.
function fillTwoDArray() {
    const lines = parseInt(prompt('Введіть кількість рядків:'));
    const columns = parseInt(prompt('Введіть кількість стовпців:'));
  
    const a = [];
  
    for (let i = 0; i < lines; i++) {
      const line = [];
      for (let j = 0; j < columns; j++) {
        const value = prompt(`Введіть значення для елементу [${i}][${j}]:`);
        line.push(value);
      }
      a.push(line);
    }
  
    return a;
  }
  
const two_dimensional_array = fillTwoDArray();
  
console.log(two_dimensional_array);

//Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.
function func(rud, charactersToDelete) {
    const regularExpression = new RegExp(`[${charactersToDelete.join('')}]`, 'g');
  
    const res = rud.replace(regularExpression, '');
  
    return res;
  }
  
const rud = prompt('Введіть рядок (наприклад, hello world):');
const symbols = prompt('Введіть символи для видалення (без пробілу, наприклад, ld):').split('');
  
const res = func(rud, symbols);
console.log(`Результат: ${res}`);