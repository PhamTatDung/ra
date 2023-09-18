//nguoi dung chi duoc nhap vao so nguyen
let soNguyen1 = prompt('nhap so nguyen thu 1:');
let soNguyen2 = prompt('nhap so nguyen thu 2:');
let soNguyen3 = prompt('nhap so nguyen thu 3:');
let max = soNguyen1;
if (max < soNguyen2) {
    max = soNguyen2;
}
if (max < soNguyen3) {
    max = soNguyen3;
}
console.log(`so nguyen lon nhat la: ${max}`);