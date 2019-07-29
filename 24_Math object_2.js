/*
  Dùng hàm average tính điểm trung bình 3 môn của một học sinh.
  Làm tròn điểm trung bình
*/

function average(arr) {
    var averagePoint = (arr.reduce(function(accumulator, currentValue){
        return accumulator + currentValue;
    }, 0));
    return Math.ceil(averagePoint / 3);
}

average([8, 8 , 6.75]) // 8