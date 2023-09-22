addEventListener("DOMContentLoaded", (event) => {
    //mảng lưu ảnh
    let images = ["images/img1.jpg",
        "images/img2.jpg",
        "images/img3.jpg",
        "images/img4.jpg",
        "images/img5.jpg",
        "images/img6.jpg",
        "images/img7.jpg",
        "images/img8.jpg",
        "images/img9.jpg"
    ]


    let slideList = document.querySelector(".slide__list");
    let slideItems = document.querySelectorAll(".slide__item");
    let index = 0;
    let slideShow = document.querySelector(".slideShow");
    let preBtn = document.querySelector(".arrow--pre");
    let nextBtn = document.querySelector(".arrow--next");

   cloneNodes = (arr) =>{
        for (let i = 0; i < arr.length; i++) {
            let slideItem = slideItems[0].cloneNode(true);
            slideItem.childNodes[1].src = images[i]
            slideList.appendChild(slideItem);
        }
        slideItems[0].remove();
    }
    cloneNodes(images)

    show = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            slideItems = document.querySelectorAll(".slide__item");
            slideItems[i].style.opacity = 0.3;
        }
        slideItems[index].style.opacity = 1;
        slideShow.style.backgroundImage = `url('${images[index]}')`;

    }
    show(images);


    preBtn.addEventListener("click", () => {
        --index;
        if (index<0) {
            slideList.prepend(slideItems[images.length-1]);
            index = 0;
        }
        show(images);
        url = slideItems[index].childNodes[1].src;
        slideShow.style.backgroundImage = `url('${url}')`;  
        slideShow.style.animation = `pre linear 0.5s`;
        slideShow.addEventListener("animationend", (event) => {
            slideShow.style.animation = ``;
        });
    });

   nextBtn.addEventListener("click", () => {
        ++index;
        if (index > 3) {
            slideList.appendChild(slideItems[0]);
            index = 3;
        }
        show(images);
        url = slideItems[index].childNodes[1].src;
        slideShow.style.backgroundImage = `url('${url}')`;
        slideShow.style.animation = `next linear 0.5s`;
        slideShow.addEventListener("animationend", (event) => {
            slideShow.style.animation = ``;
        });
    });
    let selection = () => {
        // slideItems = document.querySelectorAll(".slide__item");
        for (let i = 0; i < slideItems.length; i++) {
            slideItems[i].addEventListener("click", () => {
                index = i;
                show(images);
                slideShow.style.animation = `down linear 0.5s`;
                slideShow.addEventListener("animationend", (event) => {
                    slideShow.style.animation = ``;
                });
                console.log(index);
            })
        }
    }
    selection();
});