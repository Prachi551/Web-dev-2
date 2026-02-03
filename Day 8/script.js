// DOM It represents the structure and content of a web page allowing developers to interact with,manipulate and update the content of a webpage
//  ID TRAVERSAL
const heading= document.getElementById("myheading");
 console.log(heading);

 heading.textContent="Hello DOM!";


 heading.style.color="tomato";
 heading.style.backgroundColor="yellow";

// CLASS TRAVERSAL

const para= document.getElementsByClassName("para");
console.log(para);
for(let i=0; i<para.length; i++ ){
  para[i].style.backgroundColor="cyan";
}


// queryselector
const qs=document.querySelector("#contentp")
console.log(qs);
qs.textContent= "vfngjnvkjdkdj";










