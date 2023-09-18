let str = 'Hello 500 Anh Em RA Fukuoka';
for(let i = 0; i<str.length; i++){
    if (str[i] == str[i].toUpperCase()) {
        // console.log(str.slice(0, i)+str[i].toLowerCase()+str.slice(i+1));
        str = str.slice(0, i)+str[i].toLowerCase()+str.slice(i+1)
        
    }
    else{
        str = str.slice(0, i)+str[i].toUpperCase()+str.slice(i+1)
    }
    
}
console.log(str);   