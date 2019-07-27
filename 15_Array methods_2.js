/**
 * Đọc và dịch các method đã học từ MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * Lấy ví dụ cho các trường hợp input khác nhau của mỗi method
 * Mục đích của bài tập này: Giúp bạn học cách tự tra cứu, đọc tài liệu.
 * Đây là một kĩ năng không thể thiếu của 1 developer.
 * Phương thức concat() dùng để kết nối 2 hay nhiều mảng với nhau. Phương thức này  không làm thay đổi các mảng đã có mà thay vào đó sẽ trả về 1 mảng mới.
 */
var num1 = [[1]];
var num2 = [2, [3]];

var nums = num1.concat(num2);

console.log(nums);
// results in [[1], 2, [3]]

// modify the first element of num1
num1[0].push(4);

console.log(nums);
// results in [[1, 4], 2, [3]]
/*
Phương thức push()
Giúp thêm 1 hay nhiều  phần tử vào cuối mảng và trả về chiều dài mới của mảng.

*/
var obj = {
    length: 0,

    addElem: function addElem(elem) {
        // obj.length is automatically incremented
        // every time an element is added.
        [].push.call(this, elem);
    }
};

// Let's add some empty objects just to illustrate.
obj.addElem({});
obj.addElem({});
console.log(obj.length);
// → 2
//Chú ý rằng obj không phải là mảng, phương thức push vẫn tăng giá trị thuộc tính length của obj như khi chúng ta thao tác với 1 mảng thực sự.

/*
Phương thức pop()
Xoá phần tử cuối cùng của một mảng và trả về phần tử đó. Phương thức này làm thay đổi độ dài của mảng.
Nếu gọi pop() trên một mảng rỗng, nó trả về undefined.
Đoạn mã sau tạo mảng myFish chứa 4 phần tử, sau đó xoá phần tử cuối cùng.
*/

var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

var popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ]

console.log(popped); // 'sturgeon'

/*
Hàm shift()
Xóa phần tử đầu tiên của một mảng và trả về phần tử đó. Hàm này sau khi thực thi sẽ làm thay đổi kích thước của mảng bị tác động.
Hàm shift sẽ xóa phần tử ở vị trí 0 trong mảng và dịch vị trí của các phần tử tiếp theo xuống, sau đó trả về giá trị của phần tử bị xóa. Nếu giá trị của thuộc tính length bằng 0, giá trị undefined được trả về.
Đoạn mã code dưới đây hiển thị mảng myFish trước và sau khi xóa bỏ phần tử đầu tiên của mảng đó. Nó cũng hiển thị phần tử bị xóa bỏ:
*/

var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

console.log('myFish before: ' + myFish);
// "myFish before: angel,clown,mandarin,surgeon"

var shifted = myFish.shift();

console.log('myFish after: ' + myFish);
// "myFish after: clown,mandarin,surgeon"

console.log('Removed this element: ' + shifted);
// "Removed this element: angel"

/*
Phương thức unshift()
Thêm một hoặc nhiều phần tử vào vị trí đầu mảng sau đó trả về chiều dài của mảng mới.
Các phần tử được thêm vào đầu mảng.
Chú ý rằng, Nếu truyền nhiều phần tử vào cùng lúc như một biến, chúng sẽ được thêm vào vị trí đầu tiên của mảng, theo đúng vị trí ban đầu mà chúng được truyền vào. Việc gọi phương thức unshift với n phần tử trong một lần sẽ không trả về cùng kết quả (vị trí các phần tử) so với việc gọi n lần với mỗi lần 1 phần tử.
*/

let arr = [4,5,6];
arr.unshift(1,2,3);
console.log(arr); // [1, 2, 3, 4, 5, 6]

arr = [4,5,6]; // resetting the array
arr.unshift(1);
arr.unshift(2);
arr.unshift(3);
console.log(arr); // [3, 2, 1, 4, 5, 6]

/*Phương thức slice()
Trả về một bản sao tham chiếu (shallow copy) một phần của một mảng dưới dạng một mảng nhận các giá trị có chỉ số từ begin dến end (không bao gồm end). Mảng ban đầu không bị thay đổi.
*/

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

/*Phương thức splice()
Thay đổi phần tử của mảng bằng cách xóa phần tử đang tồn tại và/hoặc thêm phần tử mới.
*/

var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

myFish.splice(2, 0, 'drum'); // chèn 'drum' vào vị trí 2
// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]

myFish.splice(2, 1); // xóa 1 phần tử từ vị trí 2
// myFish is ["angel", "clown","mandarin", "sturgeon"]