#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your first number", type: "number", name: "firstnumber" },
    { message: "Enter Your Second Number", type: "number", name: "secondNumber" },
    {
        message: "select one opertors to perform action",
        type: "list",
        name: "operator",
        choices: ["addition", "substraction", "multipilication", "division"],
    },
]);
//condition statment
if (answer.operator === "addition") {
    console.log(answer.firstnumber + answer.secondNumber);
}
else if (answer.operator === "substraction") {
    console.log(answer.firstnumber - answer.secondNumber);
}
else if (answer.operator === "multipilication") {
    console.log(answer.firstnumber * answer.secondNumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstnumber / answer.secondNumber);
}
else {
    ("please select correct operator");
}
