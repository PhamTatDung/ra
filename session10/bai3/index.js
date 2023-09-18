let n = +prompt('nhap so can tinh giai thua ');
function tinhGiaiThua(a) {
    if (a == 0) {
        return 1;
    }
    else {
        return a * tinhGiaiThua(a - 1);
    }
}
console.log(`giai thua cua ${n} la:`, tinhGiaiThua(n));