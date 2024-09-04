// all jquery start

$(document).ready(function($){

    //  Counter Function start
    $('.counter').counterUp({
        delay: 10,
        time: 1000,
        offset: 1000,
        beginAt: 10,
        formatter: function (n) {
          return n.replace(/,/g, '.');
        }
    });


    // sticky Menu fundtion
    let nav = document.querySelector("#header");

    window.addEventListener("scroll", function(){
        let sticky = window.scrollY;
        if ( sticky > 100){
            nav.classList.add("sticky-menu")
        } 
        else {
            nav.classList.remove("sticky-menu")
        }
    })

})