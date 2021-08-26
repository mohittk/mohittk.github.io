window.onscroll = function () {
    scrollfunc()
    stickynavfunc()
};
var navbar = document.getElementById("header");
var sticky = navbar.offsetTop;
function stickynavfunc() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        

    } else {
        navbar.classList.remove("sticky");
     
    }
}



function scrollfunc() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

        document.getElementById("header").style.padding = "0px 0px ";
        document.getElementById("main-nav").style.backgroundColor = "black";
        document.getElementById("header").style.backgroundColor = "black";
       

    } else {
        document.getElementById("header").style.padding = "10px 0";
        document.getElementById("main-nav").style.backgroundColor = "#7700ff";
        document.getElementById("header").style.backgroundColor = "#7700ff";

    }
}