/**
 * Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
 */

function multiply(arr) {
    var total = 1;
    for (var number of arr) {
        total *= number;
    }
    return total;

}

console.log(multiply([2, 3, 4])); // expect: 24