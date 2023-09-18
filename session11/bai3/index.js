
document.write('<h1>Hình Vuông</h1>');
document.write(`<br/>`)
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
        document.write('<span class="style" >*</span>')
    }
    document.write(`<br/>`)
}

//===================================================================================================
//===================================================================================================
//===================================================================================================\
document.write('<h1>Hình Trái Tim</h1>');
document.write(`<br/>`)
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 7; j++) {
        if ((j == i - 2) || (i + j == 8) || (i == 0 && j % 3 !== 0) || (i == 1 && j % 3 == 0)) {
            document.write('<span class="style">*</span>');
        }
        else {
            document.write('<span class="style"> </span>');
        }


    }
    document.write(`<br/>`)
}   
//============================
//-----==========================
document.write('<h1>Hình Tam Giác</h1>');
document.write(`<br/>`)
for (let i = 0; i < 7; i++) {
    for (let j = 0; j < i; j++) {
        document.write('<span class="style" >*</span>')
    }
    document.write(`<br/>`)
}