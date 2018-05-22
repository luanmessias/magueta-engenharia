//Mudar o icone de menu para X e viceversa
$('.spinner-spin2').click(function () {
    $('.nav-mobile').toggleClass('active');
});


//Ativa o slide de fotos
$(function () {
    for (x = 0; x <= 10; x++) {
        $('.groupimg-' + x).glisse({ speed: 500, changeSpeed: 550, effect: 'fadeBig', fullscreen: false });
    };
});

//Função para abrir galeria
$('.card-info').each(function(){
    if($('.card-gallery > img', this).length){
        $('span', this).attr('style', 'display:block');
    }
    $('span', this).click(function(){
        $(this).toggleClass('active');
    });
});


//Torna o cabeçalho fixo dependendo da posição da página
$(window).scroll(function () {
    var sticky = $('header'),
        scroll = $(window).scrollTop();

    if (scroll >= 10) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});

//Efeito para trocar a imaem de fundo da home dinamicamente
$("#carouselExampleIndicators").on('slide.bs.carousel', function () {
    var img = $("#carouselExampleIndicators .carousel-inner .active img").attr('src');
    $('.banner-home-back').css('background-image', 'url(' + img + ')');
});

//Google Maps
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: { lat: -24.315628907175455, lng: -47.008356049999975 }
    });

    var image = 'assets/img/mark_m.png';
    var beachMarker = new google.maps.Marker({
        position: { lat: -24.315628907175455, lng: -47.008326049999975 },
        map: map,
        icon: image
    });
}

//Função para ir ate parte da página
function goTo(direction) {
    $('html, body').animate({
        scrollTop: $(direction).offset().top
    }, 800);
};

function getYear() {
    var d = new Date();
    var n = d.getFullYear();
    document.getElementById("year").innerHTML = n;
}

$(document).ready(function () {
    getYear();
    $(".partner .owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 3
            },
            1000: {
                items: 10
            }
        }
    });
});