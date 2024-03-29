/**
 * Sử dụng sort method để sắp xếp lại 1 array các số sau theo thứ tự từ nhỏ đến lớn (ascending order)
 */
function sortNumbers(arr) {
    var ascendingNumbers = arr.sort(function(a, b) {
        return a - b;
    });
    return ascendingNumbers;
}

sortNumbers([5, 1, 3, 2]); // [1, 2, 3, 5]