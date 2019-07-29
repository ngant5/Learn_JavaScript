mocha.setup('bdd');
var expect = chai.expect;

// Given a list of students, filter out the famale ones
function filterOutFemales(members) {
    var female = members.filter (item => {
        return item.gender !== 'female';
    })
    return female;
}

describe('first', function () {
    var members = [
        { name: 'Lan', gender: 'female' },
        { name: 'Linh', gender: 'female' },
        { name: 'Trung', gender: 'male' },
        { name: 'Peter', gender: 'gay' }
    ];
    it('case 1', function () {
        expect(filterOutFemales(members)).to.eql(
            [
                { name: 'Trung', gender: 'male' },
                { name: 'Peter', gender: 'gay' }
            ]
        );
    });
});

mocha.run();