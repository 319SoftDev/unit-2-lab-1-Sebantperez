// Mild Challenges
/// The three siblings get their allowance once a week.
/// Their current obsession is buying unique card games and collecting shoes.
/// Below is the total money they split weekly, their names, and the price of
///     a card game and a pair of shoes.

let weeklyAllowance = 129;
let sibling1 = "Jordan";
let sibling2 = "Quinn";
let sibling3 = "Ricardo Montoya De La Rosa Ramirez";
let game = 15.99;
let shoes = 89.78;
console.log("Mild Challenges");
// 1. If divided evenly, how much would each sibling get for the week?
let perSiblingAllowance = weeklyAllowance / 3;
console.log(`Each sibling gets: $${perSiblingAllowance.toFixed(2)}`);

// 2. How many games can Jordan buy with their cut?
let jordanGames = Math.floor(perSiblingAllowance / game);
console.log(`Jordan can buy ${jordanGames} games.`);

// 3. The cost of games just went up by a dollar and shoes are on sale at 50% off.
game += 1;
shoes *= 0.5;
console.log(`New game price: $${game.toFixed(2)}, New shoes price: $${shoes.toFixed(2)}`);

// 4. Quinn and Ricardo are twins. If they put their money together, how many on-sale shoes can they buy in a month (4 weeks)?
let combinedAllowance = (perSiblingAllowance * 2) * 4;
let shoesBought = Math.floor(combinedAllowance / shoes);
console.log(`Quinn and Ricardo can buy ${shoesBought} pairs of shoes in 4 weeks.`);

// 5. How many more games can they buy if they put their money together compared to if they had bought games on their own?
let individualGames = Math.floor(perSiblingAllowance / game) * 2;
let combinedGames = Math.floor(combinedAllowance / game);
let extraGames = combinedGames - individualGames;
console.log(`They can buy ${extraGames} more games if they put their money together.`);

// 6. Print out the three siblings' names. "The three siblings are __, __, and ___."
console.log(`The three siblings are ${sibling1}, ${sibling2}, and ${sibling3}.`);

// 7. Use console.log() and a built-in method to count how many characters are in Ricardo's name.
console.log(`Ricardo's name has ${sibling3.length} characters.`);

// 8. Use console.log() and a built-in method to print out the string "RICARDO MONTOYA DE LA ROSA RAMIREZ"
console.log(sibling3.toUpperCase());

// 9. Use console.log() and a built-in method to print out the string "ricardo montoya de la rosa ramirez"
console.log(sibling3.toLowerCase());

// 10. Use console.log() and a built-in method to print out Ricardo's name, but with all the instances of the letter 'a' removed or deleted.
console.log(sibling3.replace(/a/g, ''));

// 11. Use console.log() and a built-in method to print out "De La Rosa"
console.log(sibling3.slice(15, 25));

// Medium Challenges
// 12. Rewrite these functions as an arrow function.
/// Then, call them with different inputs to check the result.

const getRandomNum = () => Math.floor(Math.random() * 100);

const greeting = (name) => `Hello ${name}, I'm glad you can make it!`;

const perfectRoot = (x) => {
    let root = Math.sqrt(x);
    return Math.floor(root) === root ? root : "No perfect root";
};

// 13. Fix/Finish the following functions.
/// Then, call them with at least 2 different inputs to ensure they work.
/// a. Adds 2 numbers and returns the sum

const addNums = (x, y) => x + y;
console.log(addNums(4, 6)); // 10
console.log(addNums(3, 9)); // 12

/// b. Prints a special message if name is "Beyonce"
const isBeyonce = (name) => {
    if (name === "Beyonce") {
        return "Welcome Queen!";
    } else {
        return `Sorry ${name}, you're not Beyonce`;
    }
};
console.log(isBeyonce("Beyonce")); // "Welcome Queen!"
console.log(isBeyonce("Jay-Z")); // "Sorry Jay-Z, you're not Beyonce"

/// c. If the number is even, return the number divided by 2, otherwise return the number
const reduceEvens = (x) => x % 2 === 0 ? x / 2 : x;
console.log(reduceEvens(10)); // 5
console.log(reduceEvens(11)); // 11

// 14. Write a function called shortenString(string) that returns the first 10 characters of a string if it is longer than 10
const shortenString = (string) => string.length > 10 ? string.slice(0, 10) : string;
console.log(shortenString("Hello, World!")); // "Hello, Wor"

// Spicy Challenges
let burger = 5.99;
let fries = 3.99;
let soda = 1.99;

console.log("Spicy Challenges"); 
// 15. Write a function buyBurgers(budget) that takes in a budget amount and returns the number of burgers that can be bought.
/// If no burgers can be bought, return "Sorry, no burgers for you."

const buyBurgers = (budget) => {
    let burgersBought = Math.floor(budget / burger);
    return burgersBought > 0 ? burgersBought : "Sorry, no burgers for you.";
};
console.log(buyBurgers(20)); // 3

// 16. A meal consists of 1 burger, 1 fry, and 1 soda.
/// Write a function called buyMeals(budget) that tells the user how many meals they can buy and how much money they will have left over.
/// Bonus: Round the answer to the nearest penny.

const buyMeals = (budget) => {
    let mealCost = burger + fries + soda;
    let mealsBought = Math.floor(budget / mealCost);
    let moneyLeft = (budget % mealCost).toFixed(2);
    return `You can buy ${mealsBought} meal(s) and will have $${moneyLeft} left.`;
};
console.log(buyMeals(25)); // "You can buy 2 meal(s) and will have $1.04 left."

// 17. [Challenge] Write a function missingLeg(side1, side2) that takes in the length of a hypotenuse and a leg of a right triangle and prints out the missing leg's length.
/// The larger side should be the hypotenuse.

const missingLeg = (hypotenuse, leg) => Math.sqrt(hypotenuse**2 - leg**2);
console.log(missingLeg(5, 3)); // 4

// 18. [Super Challenge] In math, Factorial is the product of an integer and all the integers below it.
/// For example: factorial(3) = 3*2*1 = 6 ---  factorial(5) = 5*4*3*2*1 = 120
/// Write a function factorial(x) that finds the factorial of any integer.

const factorial = (x) => {
        if (x === 1) return 1;
        return x * factorial(x-1);
    };
console.log(factorial(5)); // 120
