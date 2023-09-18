// Tìm số nguyên lơn nhất và vị trí của phần tử đó
let arr = [1, 10, 4, 3, 12, 19, 97, 7, 11, 20];
let max = arr[0];
let sum = arr[0];
for (let i = 1; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log('so lon nhat la: ', max);
console.log('gia tri trung binh cua mang: ', sum / arr.length)