var a = [1, 2];
var b = [1, 2];
console.log(a === b);
// Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù giá trị của 2 array có vẻ giống nhau. Viết câu trả lời ở dưới đây.

//Toán tử === chỉ trả về true nếu như cả hai toán hạng đều cùng một loại và có cùng giá trị. Nếu so sánh khác loại, kết quả sẽ trả về false.
//Toán tử == sẽ cố gắng chuyển đổi kiểu của toán hạng nếu như hai toán hạng có kiểu khác nhau, và chỉ bắt đầu so sánh sự bằng nhau khi đã thực hiện đổi kiểu xong. Nếu kiểu khác nhau, một trong hai, hoặc cả hai toán hạng sẽ được chuyển về một kiểu chung, hay còn gọi là kiểu trung gian.
//Ví dụ như khi so sánh null, undefined và false.

//false == undefined // false

//false == null // false

//null == undefined // true

//Để so sánh bằng giữa các đối tượng (object) hay mảng (array) thì chúng ta phải sử dụng cách tiếp cận khác.