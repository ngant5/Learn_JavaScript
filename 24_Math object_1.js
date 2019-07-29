/*
  Dùng hàm powerup tính bình phương các số chia hết cho 2 trong mảng truyền vào
*/

function powerup(arr) {
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arr[i] = Math.pow(arr[i], 2);
        }
    }
    return arr;

}

powerup([0, 3, 6, 7, 4]); // [0, 3, 36, 7, 16]

