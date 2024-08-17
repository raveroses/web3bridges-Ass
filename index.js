let active= document.querySelector(".active");
let hidden= document.querySelector(".hidden")
let navlinks= document.querySelector(".navlinks");




active.addEventListener("click",function(){
  navlinks.classList.remove("navhidden")
  hidden.style.display="block";
  active.style.display="none"

})


hidden.addEventListener("click",function(){
   
    navlinks.classList.add("navhidden")
    hidden.style.display="none";
    active.style.display="block"
  
  })
