//in ra chuỗi kí tự của mảng đảo ngược
let arr = ['c', 's', 'c', 2, 6, 1];
arr = arr.reverse();
str = '';
for (let index = 0; index < arr.length; index++) {
    str += arr[index];

}
console.log(str);
