mocha.setup('bdd');
var expect = chai.expect;

// Viết hàm trả về số chẵn đầu tiên trong mảng sử dụng find method
// Nếu không tìm thấy số chẵn nào thì trả về undefined
function findFirstEvenNumber(array) {
    var evenNumber = array.find(function(number){
        return number % 2 === 0;
    })
    return evenNumber;
}

describe('findFirstEvenNumber', function () {
    it('case 1', function () {
        expect(findFirstEvenNumber([7, 9, 0, -2])).to.equal(0);
    });

    it('case 2', function () {
        expect(findFirstEvenNumber([7, 9, 3])).to.equal(undefined);
    });
});

mocha.run();