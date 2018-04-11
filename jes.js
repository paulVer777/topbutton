
var element=document.querySelector("#kox");

window.addEventListener("scroll", function (x) {

    var pozycja=window.scrollY;

    if(pozycja>600) {

        element.classList.remove("notvisible");
        element.classList.add("visible");
        element.
    }
    else if(pozycja<600)
    {

        element.classList.remove("visible");
        element.classList.add("notvisible");



    }






});
