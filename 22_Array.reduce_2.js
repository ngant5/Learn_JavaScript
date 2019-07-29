// Count the occurrences of each element inside an array using reduce
function countOccurrences(arr) {
    return arr.reduce(function(array, value){
        if(value in array) {
            array[value]++;
        } else {
            array[value] = 1;
        }
        return array;
    }, {})
}

countOccurrences(['a', 'b', 'c', 'b', 'a']);
// {
//   a: 2,
//   b: 2,
//   c: 1
// }