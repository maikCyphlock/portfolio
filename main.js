"use strict"


document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  
  });


  const tl = gsap.timeline();


  tl.add("begin")
  tl.fromTo(
    "#svg5",2,{
      scale:0
    },{
      scale:1.4,
      ease: Power3.easeOut,
      translateX:50,
    },"begin"
  )
  tl.add("mid")
  tl.to(
    "#svg5",1.5,{
      rotate:90,
      delay:2,
      ease: Power3.easeInOut
    }, 'mid'
  )
tl.add("start")
tl.to(
  "#wide-mirror",1.6,{
    rotate:-90,
    translateX:110,
    translateY:-20,
    ease: Power3.easeInOut

  }, 'start'
  
).to(
  "#btn-mirror",1.7,{
    rotate:-90,
    translateX:60,
    translateY:-50,
    ease: Power3.easeInOut

  }, 'start'
  
).to(
  "#screen",1.5,{
   height:130,
   ease: Power3.easeInOut

  }, 'start'
  
)
tl.add("end")

tl.to(
  "#btn-mirror",1,{
    translateX:0,
    translateY:-50,
  
    delay:2,
    ease: Power3.easeInOut

  }, 'end'
  
).to("#screen",.3,{
    fill:"#d5f6ff"
}

).to(
  "#wide-mirror",1.7,{
    delay:2,
   fill:"#283441",
   translateX:90,
   width:145,
 
   translateY:17,


    ease: Power3.easeInOut

  }, 'end'
  
)