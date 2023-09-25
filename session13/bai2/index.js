let scoreBtn = document.querySelectorAll(".score label");
let sendBtn = document.querySelector(".review input[type=submit]");
let comment = document.querySelector(".review input[type=text]");
let score = false;
let feedBackList = document.querySelector(".feedback__content ul");
let feedBackItem = document.querySelectorAll(".feedback__content ul li");
let index;
feedBack = (arr)=>{
    for (let i = 0; i < arr.length; i++) {
        arr[i].addEventListener("click", () => {
            score = arr[i].htmlFor;
            index = scoreBtn[i];
            scoreBtn[i].style.backgroundColor = "palevioletred";
        }); 
    }
    sendBtn.addEventListener("click",()=>{
        let value = comment.value;
        if(score !== false && value != ""){
            itemClone = feedBackItem[0].cloneNode(true);
            itemClone.childNodes[1].childNodes[1].innerHTML = score;
            itemClone.querySelector(".list__comment p").innerHTML= value;
            itemClone.querySelector(".list__delete");
            feedBackList.appendChild(itemClone);
            score = false;
            comment.value = "";
            index.style.backgroundColor = "#dedcdc7a";
            feedBackItem = document.querySelectorAll(".feedback__content ul li");
        }
        else{
            alert("danh gia de")
        }
        // console.log(feedBackItem);
    })
}
feedBack(scoreBtn);

deleteFeedBack = (arr) =>{
    for (let i = 0; i < arr.length; i++) {
        arr[i].querySelector(".list__delete").addEventListener("click", ()=>{
            arr[i].remove();
        })
    } 
}
deleteFeedBack(feedBackItem);



// function deleteFeedBack(){
//     for (let i = 0; i < feedBackItem.length; i++) {
     
//         feedBackItem[i].querySelector(".list__delete").addEventListener("click", ()=>{
//             feedBackItem[i].remove();
//                 })
//             } 
// }
