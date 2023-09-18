//nhập vao mảng 5 sô nguyên 
let arr = [];
let count = 0;
while (count < 5) {
    number = +prompt('nhap so nguyen: ');
    if (Number.isInteger(number)) {
        count++;
        arr.push(number);
    }
}
console.log(arr);