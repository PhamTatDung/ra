let str = prompt('Nhap vao chuoi ki tu co chua ki tu so');
let arr = str.split('');
deleteNumbers = (array) => {
    array = arr.filter(item => Number.isNaN(Number(item)));
    let string = array.join('');
    return string;
}
console.log(deleteNumbers(arr));
//-----------------------------------------------
//===============================================
//===============================================
// let string = ('abcdef1234')
// let arr = string.split('');
// for (let i = 0; i < arr.length; i++) {
//    if (!Number.isNaN(Number(arr[i]))) {
//     arr.splice(i, 1);
//     --i;
//    }
// }
// console.log(arr);


