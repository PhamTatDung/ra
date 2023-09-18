//in ra số từ trong một chuỗi
let str = "     Hoc      vien RA Fukuoka   ";
str = str.trim();
// console.log(str);
let arr = str.split(' ');
console.log(arr);
for (let i = arr.length; i > 0; i--) {
    // console.log(i);
    if (arr[i] == "") {
        // console.log(arr.splice(i,1));
        arr.splice(i, 1)
    }
}
console.log('so tu trong chuoi tren la ', arr.length)