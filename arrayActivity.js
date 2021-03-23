/* Our array of zoo animals.
    var zooAnimals = ["Zebra", "Rhino", "Giraffe", "Owl"];

    // Prints 4 to the console because there are 4 items in our zooAnimals array.
    console.log(zooAnimals.length);

    // Prints Rhino to the console. Remember, the first item in an array has an index position of 0!
    console.log(zooAnimals[1]);

    // Prints undefined... because the last index ("Owl") is 3.
    console.log(zooAnimals[4]);
 */

//ACTIVITY
// Fill in the question marks with what the output will be.
var animals = ['parrot', 'cat', 'dog'];

// Prints 3 to the console  because there are 3 items int the animals array
console.log(animals.length);

// prints cat to the console
console.log(animals[1]);

// Prints Dog to the console
console.log(animals[2]);

// Prints Parrot to the Console.
console.log(animals[0]);

// Prints undefined because [animals.length] position was not specified
console.log(animals[animals.length]);

// Prints dog because [animal-length - 1] means read array backwards
console.log(animals[animals.length - 1]);

// Prints -1 becasue bear was not on the original array and adds new integer at the end.
console.log(animals.indexOf('bear'));

// Prints the position of the parrot in the array
console.log(animals.indexOf('parrot'));

// Instructions:
// Using the given arrays, complete the questions below!
// Rows of Students
var studentsRow1 = ['Rachelle', 'Jacob', 'Jerome', 'Greg', 'Matt', 'Walt'];
var studentsRow2 = ['Jeremiah', 'Luis', 'Nathan', 'Analben'];
var studentsRow3 = ['Aisha', 'Stephen', 'John'];
// Entire Class
var entireClass = [studentsRow1, studentsRow2, studentsRow3];
// How do we print out every single student in Row 1?
console.log(studentsRow1);
// How do we print out every student in Row 2 whose first name begins with J?
console.log(studentsRow2[0]);
// Using the entireClass array, how do we access the second student in row 3?
console.log(entireClass[2][1]);
// Using the entireClass array, how do we access the third student in row 2?
console.log(entireClass[1][2]);
