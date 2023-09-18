let arr = [1, 12, 4, 3, 12, 19, 97, 7, 11, 20];
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
        count++;
    }
}
console.log('so phan tu lon hon hoac bang 10 la:', count);