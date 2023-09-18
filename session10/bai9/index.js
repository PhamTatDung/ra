    let str = prompt('moi nhap chuoi ki tu: ');
    let arr = [];
    function kiemTanSuat(pram) {
        // for (let i = 0; i < pram.length; i++) {
        //     if (arr.indexOf(pram[i]) == -1) {
        //         arr.push(pram[i]);
        //     }
        // }
        
        for (let i = 0; i < arr.length; i++) {
            let count = 0;
            for (let j = 0; j < pram.length; j++) {
                if (arr[i] == pram[j]) {
                    count++;
                }
            }
            console.log(`ki tu thu ${arr[i]} xuat hien ${count} lan`);
        }
    }
kiemTanSuat(str);
let array = [1, 2, 3, 1, 1, 1];
let result = new Set(array);
console.log(result);