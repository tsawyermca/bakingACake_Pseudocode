//These Problems are to help get used to pseudocode and notes in code

//Problem 1
//Outline steps to prompt user for 2 numbers, then add them together and display the result

//I can use prompts to obtain both numbers and store them as variables
//Use a function to convert the numbers from strings to numbers
//I can use a new variable to add the first two variables together
//I can use console.log to display the result

let num1 = prompt("Enter the first number");
let num2 = prompt("Enter the second number");
num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10);
let sum = num1 + num2;
console.log(`The sum of both numbers is ${sum}`);


//Problem 2
//Outline steps to prompt user for their name, then greet them

//I can use prompts to obtain the users name and store it as a variable
//I can use console.log to greet them and reference their name

let userName = prompt("What is your name?");
console.log(`Hello, ${userName}, I hope you have a great day today`);


//Problem 3
//Outline steps to prompt user for the temperature in celsius, then convert it to fahrenheit

//I can use prompts to obtain the temperature from user and store that as a variable
//I can then apply the conversion rate F = (C * 9/5) + 32, having C be the temperature variable
//I can use console.log to display the results

let celTemp = prompt("What is the temperature in Celsius?");
let farTemp = (celTemp * 9/5) + 32;
console.log(`${celTemp}° Celsius is equal to ${farTemp}° Fahrenheit`);


//Problem 4
//Outline how to scale the amount of ingredients required to bake multiple cakes

//I can use prompts to have user say how many cakes they are wanting to make and store that number as a variable
//I can have the base amount required in an array and use a loop to multiply the base amount by the number prompted
//I can use console.log to display the results

let cakeAmount = prompt("How many cakes do you want to make");
cakeAmount = parseInt(cakeAmount, 10)
console.log(`${cakeAmount} cake(s) requires the following`)
let ing = [2, 1.5, 3];
let totalFlour;
let totalSugar;
let totalEggs;

for (let i = 0; i < ing.length; i++){
    if(ing[i] === ing[0]){
        totalFlour = ing[0] * cakeAmount;
    }
    else if(ing[i] === ing[1]){
        totalSugar = ing[1] * cakeAmount;
    }
    else if(ing[i] === ing[2]){
        totalEggs = ing[2] * cakeAmount;
    }
    else break;
}
console.log(`${totalFlour} cups of flour`);
console.log(`${totalSugar} cups of sugar`);
console.log(`${totalEggs} eggs`);

//Problem 5
//Plan a bake schedule for a given number of cakes being baked at once

//I can use prompts to have user input how many batches they will make and store as a variable
//I can use a loop with console.logs to show instructions for each batch
//I can use console.log to display when finished

let batchCount = prompt("How many batches will you bake?");

for (let i = 1; i <= batchCount; i++) {
    console.log(`Batch ${i}: Mix ingredients`);
    console.log(`Batch ${i}: Preheat oven to 350°F and bake for 30 minutes`);
    console.log(`Batch ${i}: Let cool for 15 minutes`);
}
console.log("All batches are complete");


//Problem 6
//Have an array of items be checked and the baker informed if he needs to restock any

//I will define the Array with various ingredients
//I will have a minimum threshold set for items
//I can have a loop go through each ingredient and check if it requires restocking
//I can use console.log to show if any ingredients need restocking or an alternate message if none need restocking

const ingredients = [
    { name: "flour", qty: 3 },
    { name: "sugar", qty: 0.5 },
    { name: "eggs", qty: 3 }
  ];
  const minThreshold = 1;
  const lowStock = [];
  
  for (const ingredient of ingredients) {
    if (ingredient.qty < minThreshold) {
      lowStock.push(ingredient.name);
    }
  }
  
  if (lowStock.length > 0) {
    console.log(`Please reorder: ${lowStock.join(", ")}`);
  } else {
    console.log("All ingredients in stock.");
  }