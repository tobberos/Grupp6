/*______________________________________
|                                       |
|                                       |
|           Navbar Opacity              |
|                                       |
|_____________________________________*/

let navBar = document.getElementsByClassName("desktop-nav");
let windowHeight = window.innerHeight;

window.onscroll = function() {scrollFunction()};

/* Changes the background color of navbar */
function scrollFunction() {
  if (document.body.scrollTop > windowHeight || document.documentElement.scrollTop > windowHeight) {
    navBar[0].style.backgroundColor = "#2B2B2A";
} else {
    navBar[0].style.backgroundColor = "rgba(224, 223, 223, 0)";
  }
}