let nav = document.querySelector(".navbar");
window.onscroll = function () {
    console.log(document.documentElement.scrollTop)
    if(document.documentElement.scrollTop){
        console.log(document.documentElement.scrollTop)
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}
//navbar-hide
let navlink=document.querySelectorAll(".nav-link");
let navCollapse=document.querySelector(".navbar-collapse.collapse")
navlink.forEach(function(e){
 e.addEventListener("click",function(){
    navCollapse.classList.remove("show")
 })
})


//about banner counter
document.addEventListener('DOMContentLoaded',()=>{
    function counter(id,start,end,step){
     let obj=document.getElementById(id);
     let current=start,

     timer=setInterval(()=>{
        current+=step;
        obj.textContent=current;
        if(current==end){
            clearInterval(timer);
        }
    },70);
    }
    counter('counter1',0,15,1);
    counter('counter2',0,50,1);

})
$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items: 3,
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
        0: {
                items: 1
            },
            991: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});
