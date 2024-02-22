function brewCoffee(coffeeBeans, water) {
    // Perform the task of brewing coffee using the provided inputs
    return  `coffee is ready! Enjoy your ${coffeeBeans} coffee with ${water}ml of water.`;
}

// Call the function and store the return value in a variable
const coffee = brewCoffee("java delight", 200);

// Print the result to the console
console.log(coffee);