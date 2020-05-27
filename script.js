'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?" , '');
    time = prompt("Введите дату  в формате YYY-MM-DD", '');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?" , '');
    }
};

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};


function chooseExpenses() {
    for (let i = 0; i < 2; i++) {

        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');
        
        if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 ) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            console.log("Bad resault");
            i--;
        }
    }
}
chooseExpenses();


function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}
detectDayBudget();


function detectLevel () {
    if (appData.moneyPerDay < 200) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 200 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}
detectLevel();


function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            persent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*persent;
    }
    alert("Доход в месяц с вашего депозита: " + appData.monthIncome)
}
checkSavings();


function chooseOptExpenses() {
    for (let i = 1; i <= 3; i++) {

        let questionOptExpenses = prompt("Статья необязательных расходов");

        if ( (typeof(questionOptExpenses)) === 'string' && (typeof(questionOptExpenses)) != null && questionOptExpenses != '' && questionOptExpenses.length < 100) {
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        } else {
            i--;
        }
    }
}
chooseOptExpenses();
