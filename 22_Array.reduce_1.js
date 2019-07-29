// Given an array of arrays, flatten them into a single array
function flatten(arr) {
    var newArray = arr.reduce(function(accumulator, currentValue){
        return accumulator.concat(currentValue);
    },[]);
    return newArray;
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

flatten(arrays) // ["1", "2", "3", true, 4, 5, 6];