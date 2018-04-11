
var element=document.querySelector("#kox");

window.addEventListener("scroll", function (x) {

    var pozycja=window.scrollY;

    if(pozycja>600) {

       $("#kox").fadeIn(500);
        element.classList.remove("notvisible");
        element.classList.add("visible");

    }
    else if(pozycja<600)
    {
        $("#kox").fadeOut(300);
        element.classList.remove("visible");
        element.classList.add("notvisible");



    }

});



