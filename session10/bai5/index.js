n1 = +prompt('nhap so nguyen 1: ');
n2 = +prompt('nhap so nguyen 2: ');
n3 = +prompt('nhap so nguyen 3: ');
function min(a, b, c) {
    let min = a;
    if (min > b) {
        min = b;
    }
    if (min > c) {
        min = c;
    }
    return min;
}
console.log(`so nguyen nho nhat trong ba so ${n1}, ${n2}, ${n3} La:`, min(n1, n2, n3)); 