let text = document.querySelector("input");
let btn = document.querySelector("button");
let arr = [];
btn.addEventListener("click", () => {
    let value = text.value;
    if(value !== ""){
        arr.push(value);
    }
   
    console.log(arr);
});