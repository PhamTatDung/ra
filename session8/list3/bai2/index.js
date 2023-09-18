let str = 'xin chao viet nam';
let arr = str.split(' ');
// console.log(arr);
for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i].slice(1))  ;
    // console.log(arr[i].charAt().toUpperCase());
    arr[i] = arr[i].charAt().toUpperCase() + arr[i].slice(1);
}
str = arr.join(' ');
console.log(str);
