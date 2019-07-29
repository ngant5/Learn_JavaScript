/*
  Viết hàm trigonim để in ra 3 giá trị sin cos tan của một số nhập vào
*/

function trigonim(number) {
    var sin = Math.sin(number).toFixed(3);
    var cos = Math.cos(number).toFixed(3);
    var tan = Math.tan(number).toFixed(3);
    console.log(sin);
    console.log(cos);
    console.log(tan);
}

trigonim(45);
// Sin(45) = 0.850
// Cos(45) = 0.525
// Tan(45) = 1.619