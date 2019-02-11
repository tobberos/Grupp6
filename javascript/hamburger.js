/*______________________________________
|                                       |
|                                       |
|       Hamburger menu dropdown         |
|                                       |
|_____________________________________*/

/* Close the dropdown if the user clicks outside of it */
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            document.getElementsByTagName("body")[0].classList.remove("no-scroll");
            }
        }
    }
}

/* Hide and show dropdown content */
/* Makes background content non scrollable */ 
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementsByTagName("body")[0].classList.toggle("no-scroll");
}