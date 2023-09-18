let str = prompt('nhap vao chuoi can dao nguoc');
let reverseStr = (string) => {
    let arr = string.split(' ');
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split('').reverse().join('');
    }
    string = arr.join(' ');
    return string;
} 
console.log(reverseStr(str));
