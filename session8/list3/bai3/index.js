let str = prompt('nhap vao 1 chuoi ');
let kiemTra = true;
for (let i = 0; i < str.length / 2; i++) {
    // console.log(i);
    // console.log(str.length - 1 - i);
    if (str[i] !== str[str.length - 1 - i]) {
        kiemTra = false;
        break;
    }
}

if (kiemTra == true) {
    console.log(str);
    console.log('day la chuoi doi xung');
}
else {
    console.log(str);
    console.log('day khong phai la chuoi doi xung');
}