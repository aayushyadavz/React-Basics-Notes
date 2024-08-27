//Find - find the first item that matches from an array.

var numbers = [3, 56, 2, 48, 5];
const newNumbers = numbers.find(function(num){
    return num > 10
})
console.log(newNumbers);
// Output : 56

// Note - It's not gonna loop through the entire array, it's gonna stop as soon as one of these return is true.