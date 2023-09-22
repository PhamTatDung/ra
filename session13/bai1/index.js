let slideShow = document.querySelector(".slide__show .slide");
let slideItem = document.querySelectorAll(".slides__list .slide");
let index = 0;
let nextButton = document.querySelector(".arrow--next");
let preButton = document.querySelector(".arrow--pre");
let show = (n) => {
    for (let i = 0; i < slideItem.length; i++) {
        slideItem[i].classList.add("opacity03");
    }
    slideShow.firstChild.src = slideItem[n].firstChild.src;
    slideItem[n].classList.remove("opacity03");
}
show(index);
nextButton.addEventListener("click", () => {
    index++;
    if (index == slideItem.length - 1) {
        index = -1;
    }
    show(index);
    // slideShow.style.transition = 'none';
    // slideShow.style.animation = 'moveBox linear 1s';
    // slideShow.addEventListener('animationend', () => {
    //     slideShow.style.animation = 'none'; 
    // }, { once: true });

});
preButton.addEventListener("click", () => {
    index--;
    if (index < 0) {
        index = slideItem.length - 1;
    }
    show(index);
});
let selection = () => {
    for (let i = 0; i < slideItem.length; i++) {
        slideItem[i].addEventListener("click", () => {
            show(i);
        })
    }
}
selection();
