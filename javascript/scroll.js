/*______________________________________
|                                       |
|                                       |
|           Navbar Opacity              |
|                                       |
|_____________________________________*/

let navBar = document.getElementsByClassName("desktop-nav");
let navBtns = document.getElementsByClassName("navigation");
let windowHeight = window.innerHeight - 10;

window.onscroll = function() {scrollFunction()};

/* Changes the background color and size of navbar when it scrolls past first background image*/
function scrollFunction() {
  if (document.body.scrollTop > windowHeight || document.documentElement.scrollTop > windowHeight) {
    navBar[0].style.transition = "all 1s";
    navBar[0].style.backgroundColor = "rgba(43, 43, 42, 0.5)"; /* "#2B2B2A" */ 
    navBar[0].style.height = "50px";
    navBtns[0].style.transition = "all 1s";
    navBtns[0].style.marginTop = "12px";
  } 
  else {
    navBar[0].style.backgroundColor = "rgba(224, 223, 223, 0)";
    navBar[0].style.height = "100px";
    navBtns[0].style.marginTop = "30px";
  }
}