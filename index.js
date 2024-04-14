#! /usr/bin/env node 
import inquirer from "inquirer";
const currency = {
    USD: 1, //baseCurrency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 277,
    JYP: 113,
    AUD: 1.65,
    CAD: 1.3,
};
let user_answer = await inquirer.prompt([
    {
        name: 'from_currency',
        message: "Enter From Currency",
        type: 'list',
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "JYP", "AUD", "CAD"]
    },
    {
        name: 'to_currency',
        message: "Enter To Currency",
        type: 'list',
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "JYP", "AUD", "CAD"]
    },
    {
        name: 'amount',
        message: "Enter the amount to convert:",
        type: "number",
    },
]);
let fromAmount = currency[user_answer.from_currency];
let toAmount = currency[user_answer.to_currency];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
