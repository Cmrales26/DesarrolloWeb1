const hamburger = document.querySelector(".hamburger")
const navbar = document.querySelector(".navbar")

hamburger.addEventListener("click", (event) => {
     let state = navbar.classList.toggle("active");
     if(state == true){
          document.body.classList.add("stop-scrolling")
     }else if(state == false){
          document.body.classList.remove("stop-scrolling")
     }
})
const u_list = document.getElementById("navlink")
u_list.addEventListener("click",(event)=>{
     navbar.classList.remove("active")
     document.body.classList.remove("stop-scrolling")
})
