// This function calculates the ingredients needed for a given number of cups of Kenyan Chai
function calculateChaiIngredients(numberOfCups) {
    // Ingredient quantities per cup
    const waterPerCup = 200;          // in ml
    const milkPerCup = 50;            // in ml
    const teaLeavesPerCup = 1;        // in tablespoons
    const sugarPerCup = 2;            // in teaspoons

    // Total quantities based on number of cups
    const totalWater = numberOfCups * waterPerCup;
    const totalMilk = numberOfCups * milkPerCup;
    const totalTeaLeaves = numberOfCups * teaLeavesPerCup;
    const totalSugar = numberOfCups * sugarPerCup;

    // Display the calculated ingredients in a readable format
    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
    console.log(`Water: ${totalWater} ml`);
    console.log(`Milk: ${totalMilk} ml`);
    console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoon${totalTeaLeaves > 1 ? 's' : ''}`);
    console.log(`Sugar (Sukari): ${totalSugar} teaspoon${totalSugar > 1 ? 's' : ''}`);
    console.log("\nEnjoy your Chai Bora!");
}

// Prompt the user to input the number of cups
const input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const numberOfCups = parseInt(input); // Convert input to an integer

// Validate the input and call the function
if (!isNaN(numberOfCups) && numberOfCups > 0) {
    calculateChaiIngredients(numberOfCups);
} else {
    console.log("Tafadhali ingiza idadi halali ya vikombe.");
}
