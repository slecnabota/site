$(document).ready(function () {
    var phoneInput = $('#phone');
    var maskOptions = {
        mask: '+7 (999) 999-99-99',
        showMaskOnFocus: true,
        showMaskOnHover: false
    };

    phoneInput.inputmask(maskOptions);
});
$(document).ready(function () {
    var phoneInput = $('#form-phone');
    var maskOptions = {
        mask: '+7 (999) 999-99-99',
        showMaskOnFocus: true,
        showMaskOnHover: false
    };

    phoneInput.inputmask(maskOptions);
});
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