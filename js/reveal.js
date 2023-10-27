$(window).scroll(function(){
    if($(window).scrollTop() > 100){
        $(".hid").addClass('active')
    }
    else{
        $(".hid").removeClass('active')
    }
    if($(window).scrollTop() >700){
        $(".hid").addClass('h0')
    }
    else{
        $(".hid").removeClass('h0')
    }
});