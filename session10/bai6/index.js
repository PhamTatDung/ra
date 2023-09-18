n = prompt('nhap vao mot so: ');
function kiemTraSoNguyenDuong(a) {
    a = Number(a);
    return Number.isInteger(a) && a > 0;
}
if (kiemTraSoNguyenDuong(n)) {
    console.log(`${n} la so nguyen duong`);
}
else {
    console.log(`${n} khong pha la so nguyen duong`);
}
