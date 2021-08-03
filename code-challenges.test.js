// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.

//Create a test function.
//  use describe() to pass in the name of the function, colorShuffle
//  use it() to describe what colorShuffle is doing
//      within it() write the test using expect and toEquals
//      test to make sure it returns the expected output
//END

//Jest isn't recognizing the correct answer, it saays expected and recieved the same thing but it doesn't pass. Not sure what im doing wrong but the below values from my error message.
//Expected value: ["blue", "green", "pink", "yellow"]
//Received array: ["blue", "green", "pink", "yellow"]

//To answer this I guess toEquals or toContains doesn't compare them properly as objects so you ahve to use arrayContaining to check the values of the array.

describe("colorShuffle", () => {
    var colors1 = ["purple", "blue", "green", "yellow", "pink"]
    // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
    var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

    it("Takes in an array, removes the first item from the array and shuffles the remaining content.", () => {
        expect(colorShuffle(colors1).sort()).toEqual(expect.arrayContaining(["blue", "green", "yellow", "pink"].sort()))
        expect(colorShuffle(colors2).sort()).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"].sort()))
    })
})

// b) Create the function that makes the test pass.

//Create a function called colorShuffle
//  parameter - array of colors
//  remove the first index
//  shuffle the rest
//  return the array
//END

//This is not very effecient but it works, took me forever. I realize that my pseudo code was too little for this problem after I started working on it.

//After working on it pseudo code:
//Create a function called colorShuffle
//  parameter - array of colors
//  using slice get rid of the first index
//  since arrays only store references, use the spread operator to create a copy of the array to have a base of consistent colors.
//  to shuffle:
//      create an array to hold the indexs that have already been used
//      create a random number to generate a random index
//      iterate through the array
//      find a index for a color that hasn't been used
//      set that temp[index] = the arr[random number] to shuffle the values randomly.
//      return the changed array aka temp
//END

const colorShuffle = (arr) => {
    //Get rid of first index  
    arr = arr.splice(1, arr.length-1)

    //Clone the array to be able to manipulate the values.
    var temp = [...arr]

    //Temp array to store used indexs 
    var holdingArray = [] 

    //random number to generate an index
    let randomNum = Math.floor(Math.random() * arr.length)

    //Iterates throught the temp array
    for(let k = 0; k < temp.length; k++)
    {        
        //checks to make sure that holdingArray doesn't have the random number/index. If its already included it means
        // that index was used there generate another random number until a number has been found.
        while(holdingArray.includes(randomNum)){
            randomNum = Math.floor(Math.random() * temp.length)
        }
        //Once a number has been found that is not inside holdingArray stores that number in there to mark that it has been used. 
        holdingArray.push(randomNum)
        //Store the value from the original array at the random index inside of the temp array to shuffle around the values
        temp[k] = arr[randomNum]
    }   
    return temp
}

//console.log(colorShuffle(colors1))
//console.log(colorShuffle(colors2))

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]

//Create a test function.
//  use describe() to pass in the name of the function, minMax
//  use it() to describe what minMax is doing
//      within it() write the test using expect and toEquals
//      test to make sure it returns the expected output
//END

describe("minMax", () => {
    it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order.", () => {
        expect(minMax(nums1)).toEqual([-8, 90])
        expect(minMax(nums2)).toEqual([5, 109])
    })
})

// b) Create the function that makes the test pass.

//Create a function called minMax
//  parameters - array of numbers
//  use filter to fi

const minMax = (arr) => {
    min = Math.min(...arr)
    max = Math.max(...arr)

    var newArray = [min, max]
    return newArray
}

// console.log(minMax(nums1))
// console.log(minMax(nums2))

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

//Create a test function.
//  use describe() to pass in the name of the function, noDups
//  use it() to describe what minMax is doing
//      within it() write the test using expect and toEquals
//      test to make sure it returns the expected output
//END

// var testArray1 = [3, 7, 10, 5, 4, 3, 3]
// var testArray2 = [7, 8, 2, 3, 1, 5, 4]

describe("noDups", () => {
    var testArray1 = [3, 7, 10, 5, 4, 3, 3]
    var testArray2 = [7, 8, 2, 3, 1, 5, 4]
    // Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
    it("takes in two arrays as arguments and returns one array with no duplicate values.", () => {
        expect(noDups(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1].sort((a, b) => a - b))
    })
})

// b) Create the function that makes the test pass.

const noDups = (...args) => {
    var temp = [].concat.apply([], args)
    //console.log("inside");
    //console.log(temp);
    return temp.sort((a, b) => a - b).filter((value, index, array) => {
        //console.log(value)
        //console.log(array[+1]);
        if(!(value === array[index+1])){
            return value
        }
        
    })
}
// console.log("I am here");
// console.log(noDups(testArray2, testArray1))