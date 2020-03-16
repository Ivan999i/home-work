let money = prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');

let answer1 = prompt('Введите обязательную статью расходов в этом месяце');
let answer2 = prompt('Во сколько обойдется?');

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        answer1 : answer2
    },
    optionalExpenses: {

    },
    income: [

    ],
    savings: false
};

let budgetMonts = (money - answer2) / 30; 

let title = 'Ваш бюджет на день составляет: ';

let result = title + budgetMonts;

alert(result);