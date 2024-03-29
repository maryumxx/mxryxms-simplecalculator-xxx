#! /usr/bin/env node

import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter first number: ", type: "number", name: "firstnum" },
  { message: "Enter second number", type: "number", name: "secondnum" },
  {
    message: "Choose any one of the following operators: ",
    type: "list",
    name: "operators",
    choices: ["Addition", "Subtraction", "Multiplication", "Division", "Modulus"]
  },
]);

if ( answer.operators === "Addition") {
    console.log(`Your value is: ${answer.firstnum + answer.secondnum}`)
}
else if ( answer.operators === "Subtraction") {
    console.log( `Your value is: ${answer.firstnum - answer.secondnum}`)
}
else if ( answer.operators === "Multiplication") {
    console.log( `Your value is: ${answer.firstnum * answer.secondnum}`)
}
else if ( answer.operators === "Division") {
    console.log( `Your value is: ${answer.firstnum / answer.secondnum}`)
}
else if ( answer.operators === "Modulus") {
    console.log( `Your value is: ${answer.firstnum % answer.secondnum}`)
}
else 
 console.log('Invalid Operator')


