let n = prompt('Nhap so Nguyen Duong N');
let giaiThua = 1;
for (let i = 1; i <= n; i++) {
    giaiThua *= i;
}
console.log(`giai thua cua ${n} la: ${giaiThua}`);