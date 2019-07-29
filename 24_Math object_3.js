/*
  Viết hàm positiveNumber để chuyển các số âm trong một mảng thành các số dương.

  Yêu cầu sử dụng Math Object
*/

function positiveNumber(arr) {
    var newArray = [];
    for (i of arr) {
        if (i < 0) {
            newArray.push(Math.abs(i));
        } else {
            newArray.push(i);
        }
    }
    return newArray;
}

positiveNumber([-2, 3, -4, -7, 10]); // [ 2, 3, 4, 7, 10 ]