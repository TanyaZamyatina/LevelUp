$(document).ready(function(){
    $('#slider').slick({
        prevArrow: '<div class="arrowPrev"><i class="fa-solid fa-arrow-left"></i></div>',
        nextArrow: '<div class="arrowNext"><i class="fa-solid fa-arrow-right"></i></div>',
    });
});

$('.timer').startTimer({
      classNames: {
        hours:'myClass-hours',
        minutes:'myClass-minutes',
        seconds:'myClass-seconds',
        clearDiv:'myClass-clearDiv',
        timeout:'myClass-timeout'
      }
    });


    $(document).ready(function () {
        $('#tel').bind('change keyup input click', function () {
            if (this.value.match(/[^0-9]/g)) {
                this.value = this.value.replace(/[^0-9]/g, '');
            }
        });
    });
    
