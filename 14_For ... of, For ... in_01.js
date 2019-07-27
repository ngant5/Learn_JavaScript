/**
 * Điểm khác nhau giữa 2 vòng lặp for...of và for...in, viết code ví dụ
 */

//for ...of truy xuất theo từng phần tử của Array
var students = [
    {name: 'Nga', age: 19},
    {name: 'Tuyet', age: 20},
    {name: 'Nguyen', age: 21}
];

for (var student of students) {
    console.log(student.name, student.age);
}

//for ..in truy xuất theo key của Object
console.log('~~~~~~~~~~~~~~~~~~');
var myPet = {
    name: 'Cat',
    age: '1',
    color: 'yellow'
};

for (var key in myPet) {
    console.log(key, myPet[key]);
}