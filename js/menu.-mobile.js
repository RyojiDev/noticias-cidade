$(".botao-menu-mobile").click(function() {

    let listarMenu = $('#navegacao-mobile');

    if (listarMenu.is(":hidden") == true) {
        let icone = $('.botao-menu-mobile').find('i');
        icone.removeClass('fa-bars');
        icone.addClass('fa-times');
        console.log(icone);
        listarMenu.slideToggle();
    } else {
        let icone = $('.botao-menu-mobile i');
        icone.removeClass('fa-times');
        icone.addClass('fa-bars');
        listarMenu.slideToggle();
    }
});