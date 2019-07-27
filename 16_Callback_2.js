/**
 * 1. Viết hàm double nhận vào 1 số bất kì, hiển thị ra số đó nhân đôi
 * 2. Viết hàm sumAndDo nhận vào 1 array và 1 callback function. Hàm sumAndDo làm nhiệm vụ tính tổng array đó, sau đó gọi callback function với tham số là kết quả tổng vừa tính
 */

function double(num) {
    var result = num * 2;
    return result;
}

function sumAndDo(nums, callback) {
    var sum = 0;
    for (number of nums) {
        sum += number;
    }
    return callback(sum);
}
sumAndDo([1, 2, 3], double);