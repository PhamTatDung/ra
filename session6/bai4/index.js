let C = prompt('nhap vao do C: ');
let kiemTra = C == '';
while(kiemTra){
    C = prompt('ban chua nhap du lieu: ');
    kiemTra = C == '';
}
C = Number(C);
kiemTra = Number.isNaN(C);
while(kiemTra){
    C = prompt('du lieu phai la so: ');
    kiemTra = Number.isNaN(C);
}
F = (C*9/5) + 32;
document.write(C, " độ C = ", F , " độ F");