/*______________________________________
|                                       |
|                                       |
|       Hamburger menu dropdown         |
|                                       |
|_____________________________________*/

/* Close the dropdown if the user clicks outside of it */
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            }
        }
    }
}

/* Hide and show dropdown content */ 
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}