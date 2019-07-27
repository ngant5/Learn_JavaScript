/**
 * Khai báo biến `rectangle` là 1 object gồm có các property:
 * - width: chiều rộng, là 1 số bất kì
 * - height: chiều cao, là 1 số bất kì
 * Viết các method:
 * - getWidth: trả về chiều rộng
 * - getHeight: trả về chiều cao
 * - getArea: trả về diện tích
 */

var rectangle = {
    width: 1,
    height: 2,
    getWidth: function() {
        console.log('Chieu rong ', this.width);
    },
    getHeight: function() {
        console.log('Chieu cao ', this.height);
    },
    getArea: function() {
        var area;
        this.area = this.width * this.height;
        console.log('Dien tich ', this.area);
    }
};

rectangle.getWidth();
rectangle.getHeight();
rectangle.getArea();