$('document').ready(function() {
    $('.header-contacts__button').on('click', function() {
        $('.overlay').show();
    });
    $('.modal__close').on('click', function() {
        $('.overlay').hide();
    });
});