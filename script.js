var menuBar = document.getElementById("menu");
var navBar = document.querySelector(".navbar");
var had = document.querySelector(".header");


menuBar.addEventListener("click", (eo) => {
    eo.preventDefault();
    navBar.classList.toggle("active");
})


window.onscroll = () =>{
    navBar.classList.remove("active");

    if(window.scrollY > 60){
        had.classList.add("active")
    }else{
        had.classList.remove("active")
    }
}

lightGallery(document.querySelector(".fix .fixed"));