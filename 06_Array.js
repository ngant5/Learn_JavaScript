/**
 * Cách sử dụng Array và Object khác nhau như thế nào. Viết câu trả lời ở phía dưới.
 * Array chứa danh sách các phần tử giống nhau.
 * Object chứa đối tượng có nhiều thành phần/thuộc tính của đối tượng đó
 */


var staff1 = {
    name: 'Nga',
    old: 29,
    jobName: 'Front-End'
};
var staff2 = {
    name: 'Tuyet',
    old: 30,
    jobName: 'Back-End'
};
var staff3 = {
    name: 'Nguyen',
    old: 31,
    jobName: 'Full-Stack'
};

var staffs = [staff1, staff2, staff3];
console.log(staffs);

var students = [
    {name: 'Nga', old: 19},
    {name: 'Tuyet', old: 20}
];

console.log(students);