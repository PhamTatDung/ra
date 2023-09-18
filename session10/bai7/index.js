let n1 = +prompt('Nhap vao so thu 1');
let n2 = +prompt('Nhap vao so thu 2');
let arr = [];
arr.push(n1);
arr.push(n2);
console.log('vi tri khi chua doi cho la: ', arr);
function doiCho2So(a) {
    var temp = a[0];
    a[0] = a[1]
    a[1] = temp;
    return arr;
}
console.log('thu tu sau khi doi la: ', doiCho2So(arr));
