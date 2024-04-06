let img_1 = document.getElementById("img_1");
let span = document.getElementById("span")
var i = 0;
var img = ['https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191217202846/Programming-for-Beginners-10-Best-HTML-Coding-Practices-You-Must-Know.png', 'https://img.freepik.com/premium-vector/programming-software-app-development-big-data-processing_106788-1477.jpg', 'first_1.png', 'second.png', 'third.webp', 'four.webp', 'fifth.webp', 'six.png']
// var time=3000;

// img[0]='mobiles.png';
// img[1]='model_1.jpg';
// img[2]='model_2.jpg';
let quiz=document.querySelector("#quiz");

  

function change() {
    document.slide.src = img[i];
    if (i < img.length - 1) {
        i++;
    }
    else {
        i = 0;
    }
    setTimeout("change()", 2000);
}
window.onload = change;

let contact = document.getElementById("contact");
let count = 0;
contact.addEventListener("click", function () {
    if (count == 0) {
        body.style.backgroundColor = "transparent";
        contact.classList.replace("ri-contrast-fill","ri-contrast-2-fill")
        count = 1;
    }
    else {
        body.style.backgroundColor = "#d3c7f0";
        contact.classList.replace("ri-contrast-2-fill","ri-contrast-fill")
        count = 0;
    }
})
{/* <i class="ri-contrast-fill"></i>
<i class="ri-contrast-2-fill"></i> */}

let icon=document.querySelector("#menu");
let ul=document.querySelector("ul");
let hello=document.querySelector(".box");




icon.addEventListener("click",function(){
   ul.classList.toggle("show");
   if(ul.className=="show"){
      document.getElementById("menu").className="ri-close-line";

      hello.style.display="none";
   }
   else{
      document.getElementById("menu").className="ri-menu-3-fill";
      hello.style.display="block";
   }
   
})

