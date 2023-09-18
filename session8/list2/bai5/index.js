//đếm số nguyên âm trong chuỗi
let str = 'xin chao hoc vien RA fukuoka';
console.log(str);
let arr = str.split("");
let count = 0;
// console.log(arr);
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase();
    if (arr[i] == 'u' || arr[i] == 'e' || arr[i] == 'o' || arr[i] == 'a' || arr[i] == 'i') {
        count++;
    }
}
console.log('số nguyên âm trong chuỗi trên là: ',count);