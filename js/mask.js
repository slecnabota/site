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