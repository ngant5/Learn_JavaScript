

var students = [
    { name: 'A', score: 100 },
    { name: 'B', score: 10 },
    { name: 'C', score: 101 },
    { name: 'D', score: 50 },
    { name: 'E', score: 75 }
];

/**
 * Viết function trả về 1 array gồm 3 người có điểm cao nhất sắp xếp theo thứ tự điểm giảm dần. Mục đích để hiển thị lên bảng Leaderboard
 * Gợi ý: sử dụng sort và slice
 */
function getTopStudents(students) {
    var topStudents = students.sort(function(a, b) {
        return b.score - a.score;
    });
    return topStudentsList = topStudents.slice(0, 3);
    //return topStudents;
}

/**
 * Chạy thử hàm
 */
getTopStudents(students);