// Tìm số nguyên lơn nhất và vị trí của phần tử đó
let arr = [1, 10, 4, 3, 12, 19, 97, 7, 11, 20];
let max = arr[0];
let index = 0;
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
        index = i;
    }
}
console.log('so lon nhat la: ',max);
console.log('vi tri cua so lon nhat la: ', index);