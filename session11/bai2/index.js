let str = prompt('Nhao vao chuoi so nguyen cach nhau boi dau cach');
let arr = str.split(' ');
// let arr = [9, 2, 3, 7, 1];
let isPrimeNumber = (number) => {
    if (number < 2) {
        return false;
    }
    else {
        for (let i = 2; i < number - 1; i++) {
            if (number % i == 0) {
                return false;
            }
        }
    }
    return true;
};
let sumPrimeNumbers = (array) => {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        array[index] = parseInt(array[index]);
        if (isPrimeNumber(array[index])) {
            sum += array[index];
        }
    }
    return sum;
}
console.log(sumPrimeNumbers(arr));