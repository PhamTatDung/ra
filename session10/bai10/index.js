let nam = +prompt('Nhap nam can kiem tra: ');
function kiemTraNamNhuan(n) {
    if((n % 4 == 0 && n % 100 != 0) || n %400 == 0){
        return true;
    }
    else{
        return false
    }
}
if (kiemTraNamNhuan(nam)) {
    console.log(`nam ${nam} la nam nhuan`);
}
else{
    console.log(`nam ${nam} khong phai la nam nhuan`);
}