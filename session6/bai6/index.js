//Hàm tích chu vi và diện tích hình tròn
const PI = 3.14;
function tinhChuVi(r){
    chuVi = 2*r*PI;
    return chuVi;
}
console.log(tinhChuVi(3));
function tinhDienTich(r){
    dienTich = PI*r*r;
    return dienTich;
}
console.log(tinhDienTich(3));