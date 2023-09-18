let n = prompt('Nhap N: ');
let soNguyenTo = true;
if(n<2){
    soNguyenTo = false;
}
else{
    for(let i = 2; i<n-1; i++){
        if(n%i == 0){
            soNguyenTo = false;
            break;
        }
    }
}
soNguyenTo == true?console.log(`${n} la mot so nguyen to`):console.log(`${n} khong phai la mot so nguyen to`);