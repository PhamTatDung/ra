alert('Hãy nhập điểm của học sinh để tính điểm trung bình');
//Nhập điểm Vật Lý và kiểm tra hợp lệ
let vatLy = prompt('Nhập Điểm Vật Lý của học sinh');
let kt1 = vatLy == '';
// Kiểm tra người dùng đã nhập chưa
while(kt1){
    vatLy = prompt('vẫn chưa nhập điểm');
    kt1 = vatLy == '';
}
//Kiểm tra người dùng nhập đúng định dạng hay không
vatLy = Number(vatLy);
let kiemTra = vatLy < 0 || vatLy > 10 || Number.isNaN(vatLy);  
while(kiemTra){
    vatLy = prompt('Nhập đúng định dạng:');
    vatLy = Number(vatLy);
    kiemTra = vatLy < 0 || vatLy > 10 || Number.isNaN(vatLy);  
}
//Nhập Điểm Hóa và kiểm tra hợp lệ
let hoaHoc = prompt('Nhập Điểm Hóa của học sinh');
let kt2 = hoaHoc == '';
// Kiểm tra người dùng đã nhập chưa
while(kt2){
    hoaHoc = prompt('vẫn chưa nhập điểm');
    kt2 = hoaHoc == '';
}
hoaHoc = Number(hoaHoc);
let kiemTra2 = hoaHoc < 0 || hoaHoc > 10 || Number.isNaN(hoaHoc);  
while(kiemTra2){
    hoaHoc = prompt('Nhập đúng định dạng:');
    hoaHoc = Number(hoaHoc);
    kiemTra2 = hoaHoc < 0 || hoaHoc > 10 || Number.isNaN(hoaHoc);  
}
//Nhập điểm Sinh và kiểm tra hợp lệ
let sinhHoc = prompt('Nhập Điểm Sinh học của học sinh');
let kt3 = sinhHoc == '';
// Kiểm tra người dùng đã nhập chưa
while(kt3){
    sinhHoc = prompt('vẫn chưa nhập điểm');
    kt3 = sinhHoc == '';
}
sinhHoc = Number(sinhHoc);
let kiemTra3 = sinhHoc < 0 || sinhHoc > 10 || Number.isNaN(sinhHoc);  
while(kiemTra3){
    sinhHoc = prompt('Nhập đúng định dạng:');
    sinhHoc = Number(sinhHoc);
    kiemTra3 = sinhHoc < 0 || sinhHoc > 10 || Number.isNaN(sinhHoc);  
}
diemTrungBinh = (vatLy + hoaHoc + sinhHoc)/3;
alert('Điểm trung bình của học sinh là: '+ diemTrungBinh);
