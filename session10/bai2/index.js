let banKinh = +prompt('nhap vao ban kinh hinh tron can tinh: ');
const PI = 3.14;
function tinhChuVi(r) {
    return 2 * PI * r;
}
function tinhDienTich(r) {
    return PI * r * r;
}
console.log(`chu vi hinh tron banh kinh ${banKinh} la: `, tinhChuVi(banKinh).toFixed(2));
console.log(`dien tich hinh tron banh kinh ${banKinh} la: `, tinhDienTich(banKinh).toFixed(2));