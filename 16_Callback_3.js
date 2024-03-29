/**
 * 1. Viết hàm transform nhận vào 1 array gồm các số và 1 function callback. Nội dung của hàm bao gồm:
 * - Khai báo 1 biến result có giá trị là 1 empty array
 * - Lặp qua từng phần tử trong array, với mỗi phần tử, gọi hàm callback và truyền vào phần tử đó, được kết quả bao nhiêu thì push vào array khai báo ở trên
 * - Trả về result array
 */
function transform(numbers, callback) {
// Viết nội dung hàm ở đây
    var array = [];
    for (var number of numbers) {
        array.push(callback(number));
    }
    return array;
}

function double(num) {
    return num * 2;
}

var output = transform([2, 4, 6], double);
console.log(output);
// Expect: [4, 8, 12]