/**
 * Viết function trả về tích các số từ start đến end, không tính end
 * Ví dụ: console.log(calculate(2, 5)) sẽ hiển thị ra màn hình 24 (vì 2 * 3 * 4 = 24)
 */
function calculate(start, end) {
    var t = 1;
    for(var i = start; i < end; i++) {
        t *= i;
    }
    return t;
}

console.log(calculate(2,5));
