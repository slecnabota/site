if ($(window).width() > 1000) {

  let hide = 400;
  hide = ($('.banner').height() - $(window).height()) / 150 * hide;
  let isHide = $(window).scrollTop() >= hide ? true : false;

  $(window).on({
    'scroll': function () {
      if ($(this).scrollTop() >= hide && isHide === false) {
        isHide = true;
        $('.hid').addClass('nope');
      } else if ($(this).scrollTop() < hide && isHide === true) {
        isHide = false;
        $('.hid').removeClass('nope');
      }
    },
    'resize': function () {
      hide = ($(document).height() - $(window).height()) / 100 * hide;
    }
  });
  $(window).scroll(function () {

    var wScroll = $(this).scrollTop();
    // $('.banner-container').css({
    //   'transform' : 'translate(0px, '+ wScroll /12 +'%)'
    // });
    $('.hid').css({
      'transform': 'translate(0px, ' + wScroll / 0.8 + '%)'
    });
    $('.banner-btn').css({
      'transform': 'translate(0px, ' + wScroll / 5 + '%)'
    });

  });


}function openLink(){
  document.querySelector('.dropdown-content').classList.toggle('active');
}


