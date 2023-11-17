function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
}
$(document).ready(function() {
    $("a[href^='#']").on('click', function(e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1000); 
    });
});