//in ra ký tự số trong mảng
let arr = ['c', 's', 'c', 2, 6, 1];
let count = 0;
for (let index = 0; index < arr.length; index++) {
    if (typeof (arr[index]) == 'number') {
        count++;
        console.log(arr[index]);
    }

}
console.log('so ky tu so la',count);