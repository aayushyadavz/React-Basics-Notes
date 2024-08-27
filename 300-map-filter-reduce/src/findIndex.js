//FindIndex - find the index of the first item that matches.

var numbers = [3, 56, 2, 48, 5];
const newNumbers = numbers.findIndex(function(num){
    return num > 10
})
console.log(newNumbers);
// Output: 1

// Note - Works similar as the find but instead of finding the first item, it finds the index of the first item that matches.