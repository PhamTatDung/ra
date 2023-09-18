// thay kí tự - bằng _ trong mảng
let arr = ['hoc', '-', 'sinh', '-', 'RA', '-', 'Fukuoka'];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '-') {
        arr.splice(i, 1, '_');
    }
}
console.log(arr);