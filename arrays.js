var cities = ["Denver", "Austin", "Richmond", "New York", "Charelston"];
var evenNums = [2, 4, 6, 8, 10];
var booleans = [true, true, false, false]

// .indexOf returns the indexed position of the array item passed as an argument. In this case, 2.
cities.indexOf("Richmond");

// .push adds whatever argument that is passed to the end of the array.
evenNums.push(12);

// .pop removes whatever item is last in the array and returns that item.
booleans.pop();

// Each item inside a given array has an index position 
// that corresponds with a number. You always start 
// counting from 0 so the first item in the array has an index of 0,
// the second item has an index of 1, the third 2 and so on.

// For example:
console.log(cities[4]);
// prints "Charelston"