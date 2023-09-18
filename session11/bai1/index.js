let str = prompt('Nhap vao chuoi 5 so nguyen cach nhau bang giau cach');
let arr = str.split(' ');
arr.sort((a, b) => b - a);
function MaxUniquNumber(array) {
  while (array[0] == array[1]) {
    array = array.filter((element) => element != array[0]);
  }
  return array[0];
}
console.log(MaxUniquNumber(arr));