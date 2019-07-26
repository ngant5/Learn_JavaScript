var a = 10;
var b = 18;

var x = a-- + b++ - ++b - ++a;
// 10 + b++ - ++b - ++a; // a 9 b 18
// 10 + 18  - ++b - ++a; // a 9 b 19
// 10 + 18  - 20 - ++a; // a 9 b 20
// 10 + 18  - 20 - 10; // a 10 b 20
// - 2
console.log(x);
// Nhấn Run để chạy code
// Thêm cách dấu cách vào dòng 4 để code dễ đọc hơn
// Giải thích tại sao kết quả lại như vậy. Gợi ý: Viết ra từng dòng để giải thích