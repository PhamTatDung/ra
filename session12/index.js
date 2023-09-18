let string = prompt("nhap chuoi dau vao: ");
console.log(string);
function subStringNoDupChar(str) {
           let subStrings = [];
           let maxChar = 0;
        for (let i = 0; i < str.length; i++) {
            for (let j = i + 1; j < str.length+1; j++) {
                let subString = str.slice(i, j);
                if((subString.length == [...new Set(subString)].length)&&subString.length>maxChar){
                    maxChar = subString.length;
                    subStrings.push(subString);
                }
            }
        }
        return subStrings[subStrings.length-1]
}
console.log(subStringNoDupChar(string));