let n = prompt('nhap vao N: ');
let tongUoc = 0;
for (let i = 1; i < n; i++) {
    if (n % i == 0) {
        tongUoc += i;
    }
}
tongUoc == n && n != 0 ? console.log(`${n} la so hoan hao`) : console.log(`${n} khong phai la so hoan hao`);

