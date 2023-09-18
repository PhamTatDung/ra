// let fibonacci1 = 0; fibonacci2 = 1;
n = prompt(`nhap vao do dai Fibonacci: `);
let fibonacci1 = 0, fibonacci2 = 1, nextFibonacci;
document.write(`Day fibonacci ${n} so la: `);
for (let i = 1; i <= n; i++) {
    document.write(fibonacci1, ' ')
    nextFibonacci = fibonacci1 + fibonacci2;
    fibonacci1 = fibonacci2;
    fibonacci2 = nextFibonacci;
}