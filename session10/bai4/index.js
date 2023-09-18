let n = prompt('moi nhap: ');
// console.log(!Number.isNaN(n));
function kiemTraKiTuSo(a) {
    a = Number(a);
    return !Number.isNaN(a);
}
if (kiemTraKiTuSo(n)) {
    console.log(`${n} la ki tu so`);
}
else {
    console.log(`${n} khong phai la ki tu so`);
}