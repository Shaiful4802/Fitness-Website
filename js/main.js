// all jquery start
$(document).ready(function($){
    $('.counter').counterUp({
        delay: 10,
        time: 1000,
        offset: 1000,
        beginAt: 10,
        formatter: function (n) {
          return n.replace(/,/g, '.');
        }
    });
})

