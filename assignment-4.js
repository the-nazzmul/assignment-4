// FUNCTION - 1

function mindGame(number) {

    // Checking if the input type is a number. If it's not a number then the error message will be shown and the function will stop. If it's a number then the function will move forward to the next step and return the result.

    if (typeof number !== 'number') {
        return 'Please enter a number..'
    }
    const result = ((number * 3 + 10) / 2) - 5;
    return result;
}


// FUNCTION - 2

function evenOdd(string) {
    // Making sure the input type is as required. Otherwise an error message will be shown and the function will stop.
    if (typeof string !== "string") {
        return 'Please enter a string..'
    }

    // If the input type is string then the conditions below will work. First, the length of the string has to be measured. If the length is completely divisible by 2, then it's an even number. Otherwise it's an odd number.

    const lengthOfString = string.length;
    if (lengthOfString % 2 === 0) {
        return "even";
    }

    else {
        return "odd";
    }
}

// FUNCTION - 3

function isLGSeven(number) {
    // If the input type is not a number then a error message will be shown and the function will stop.
    if (typeof number !== 'number') {
        return 'Please enter a number..'
    }

    const difference = number - 7;

    if (difference < 7) {
        return difference;
    }

    else {
        return number * 2;
    }
}


// FUNCTION -4

function findingBadData(array) {
    // Making sure the input is an array.
    if (Array.isArray(array) === false) {
        return "The input must be an array. Please enter an array..."
    }

    // There should be an empty array "badData" which will contain the bad data and return as a new string. A for loop is to be run on each element of the input array. If any element is less than 0, then the element will be pushed to "badData". After the loop is complete, the length of bad.Data is to be returned.

    let badData = [];

    for (let i = 0; i < array.length; i++) {
        const data = array[i];
        if (data < 0) {
            badData.push(data)
        }
    }

    return badData.length;
}


// FUNCTION - 5

function gemsToDiamond(friend1Gem, friend2Gem, friend3Gem) {

    // Making sure all the input type are numbers
    if (typeof friend1Gem !== 'number' || typeof friend2Gem !== 'number' || typeof friend3Gem !== 'number') {
        return "There must be three inputs and all the inputs must be numbers. Please try again.."
    }

    // All the input (friends' gem) values is to be multiplied by their powers respectively. Then the total is to be calculated my adding up the results of multiplications. If the total is less than 2000, then it is to be returned as it is. But if the total is more than 2000, them 2000 has to be subtracted from the total and the rest is to be returned. 

    const firstFriendPower = 21;
    const secondFriendPower = 32;
    const thirdFriendPower = 43;

    const totalDiamond = (friend1Gem * firstFriendPower) + (friend2Gem * secondFriendPower) + (friend3Gem * thirdFriendPower);

    if (totalDiamond > 2000) {
        return totalDiamond - 2000;
    }

    else {
        return totalDiamond;
    }
}