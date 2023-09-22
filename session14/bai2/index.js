let btn = document.querySelector("button");
let popup = document.querySelector(".popup");
btn.addEventListener("click", () => {
    popup.style.display = "block";
});
popup.querySelector("span").addEventListener("click", ()=>{
    popup.style.display = "none";
})