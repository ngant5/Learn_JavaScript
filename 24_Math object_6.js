/*
  Viết hàm circleMachine() tính chu vi và diện tích hình tròn khi biết bán kính
*/

function circleMachine(r) {
    var chuVi = Math.round(r * 2 * Math.PI * 100) / 100;
    var dienTich = Math.round(r * r * Math.PI * 100) / 100;
    console.log(chuVi);
    console.log(dienTich);
}

circleMachine(3);
// Chu vi: 18.85
// Diện tích: 28.27