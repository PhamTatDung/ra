// nguoi dung chi duoc phep nhap diem tu 0 -> 10
let diemKiemTra = +prompt('nhap diem kiem tra: ');
let diemGiuaKy = +prompt('nhap diem giua ky: ');
let diemCuoiKy = +prompt('nhap diem cuoi ky: ');
let diemTongKet = (diemKiemTra + diemGiuaKy * 2 + diemCuoiKy * 3) / 6;
diemTongKet = diemTongKet.toFixed(1);
if (diemTongKet >= 8) {
    console.log(`diem tong ket cua hoc sinh la: ${diemTongKet} dat hoc sinh gioi`);
}
else if (diemTongKet < 8 && diemTongKet >= 6.5) {
    console.log(`diem tong ket cua hoc sinh la: ${diemTongKet} dat hoc sinh kha`);
}
else if (diemTongKet < 6.5 && diemTongKet >= 5) {
    console.log(`diem tong ket cua hoc sinh la: ${diemTongKet} dat hoc sinh trung binh`);
}
else if (diemTongKet < 5 && diemTongKet >= 3.5) {
    console.log(`diem tong ket cua hoc sinh la: ${diemTongKet} dat hoc sinh yeu`);
}
else {
    console.log(`diem tong ket cua hoc sinh la: ${diemTongKet} dat hoc sinh kem`);
}