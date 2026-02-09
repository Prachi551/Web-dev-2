// function handleClick(){
//     document.getElementById("btn").textContent="Clicked"

// }
// //  Q2. When user click on the button the color of heading tag will change to tomato. and text will change to New heading.
// function handleClick(){
//         const head=document.querySelector("h1");
//         head.style.color="tomato";
//         head.textContent="New heading"; 
    
// }

// Q3. When the user click on the button one span tag and image tag will render below to the button
// function handleClick(){
//     const spanEle=document.createElement("span").textContent="This is span element";
//     const image=document.createElement("img");
//     image.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRap3irVjVe5IN24Vk_fNxdc-GuA7CQWJ_96A&s");
//     image.setAttribute("alt", "KR MANGALAM");
//     document.getElementById("content").append(spanEle);
//     document.getElementById("content").append(image);


// }
document.getElementById("btn").addEventListener("click",()=>{
    const spanEle=document.createElement("span").textContent="This is span element";
    const image=document.createElement("img");
    image.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRap3irVjVe5IN24Vk_fNxdc-GuA7CQWJ_96A&s");
    image.setAttribute("alt", "KR MANGALAM");
    document.getElementById("content").append(spanEle);
    document.getElementById("content").append(image);
})

