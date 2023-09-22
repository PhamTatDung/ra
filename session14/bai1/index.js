// let img = document.getElementsByTagName("img");
// index = 0;
// let show = (n) => {
//     for (let i = 0; i < img.length; i++) {
//         img[i].style.display = "block";
//         img[i].addEventListener("click",()=>{
//             i++;
//             // img[i].style.display = "none";
//             // img[i+1].style.display = "block";
//             if (i = img.length-1) {
//                 i = 0;
//             }
            
//         })

//     }
//     img[n].style.display = "none";
// }
// show(index);
let imgSourc = ["./img/anh1.jpg","./img/anh2.jpg","./img/anh3.jpg"]
let img = document.querySelector("img");
let index = 0;
img.addEventListener("click", ()=>{
    index++;
    console.log(index);
    // img.src = imgSourc[index];
    // console.log(img.src);
    if(index == 3){
        index = 0;
    }
     img.src = imgSourc[index];
})