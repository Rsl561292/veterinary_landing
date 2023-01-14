//перевірка чи ввійшли з ПК чи з телефона
let isMobile = {
    Android: function() {return navigator.userAgent.match(/Android/i);},
    BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
    iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
    Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
    Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
    any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};

//навішування додавання класів для функціонавання меню
let body=document.querySelector('body');
if(isMobile.any()){
        body.classList.add('touch');
        let arrow=document.querySelectorAll('.arrow');
    for(i=0; i<arrow.length; i++){
            let thisLink=arrow[i].previousElementSibling;
            let subMenu=arrow[i].nextElementSibling;
            let thisArrow=arrow[i];

            thisLink.classList.add('parent');
        arrow[i].addEventListener('click', function(){
            subMenu.classList.toggle('sub-menu__list_open');
            thisArrow.classList.toggle('active');
        });
    }
}else{
    body.classList.add('mouse');
}

//Скріпт для роблення картинок в блоці фоновими
(function(){
    let ibgs = document.getElementsByClassName('ibg');
    if(ibgs){
        for (let item of ibgs) {
            let imgSrc = item.children[0].attributes[0].value;
            item.style = `background-image: url("${imgSrc}");`;
        }
    }

    const animItem = document.querySelectorAll('._anim-item');
    const animStart = 4;

    if (animItem.length > 0) {
        window.addEventListener('scroll', animOnScroll)
        function animOnScroll (params) {
            for (let index = 0; index < animItem.length; index++) {
                let animItemOffset = offset(animItem[index]).top;
                let animItemPoint = window.innerHeight - (animItem[index].offsetHeight / animStart);
                
                if (animItem[index].offsetHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - (window.innerHeight / animStart);
                }
                console.log('pageYOffset = ' + pageYOffset);
                console.log('(animItemOffset - animItemPoint) = ' + (animItemOffset - animItemPoint));
                console.log('(animItemOffset + animItem[index].offsetHeight) = ' + (animItemOffset + animItem[index].offsetHeight));
                if ((pageYOffset > (animItemOffset - animItemPoint)) && (pageYOffset < (animItemOffset + animItem[index].offsetHeight))) {
                    animItem[index].classList.add('_anim-show')
                }
            }
        }

        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
        }

        setTimeout(() => {
            animOnScroll ();
        }, 300);
     };
    //================================================================================

}());


$(document).ready(function(){
    if($('.products__list').length > 0) {
        $('.products__list').slick({
            //autoplay: true,
            //infinite: true,
            dots: true,
            arrows: false,
            accessibility: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplaySpeed: 3000,
            nextArrow: 'button type="button" class="slick-next"></button>',
            prevArrow: 'button type="button" class="slick-prev"></button>',
            responsive: [{
                breakpoint: 967,
                settings: {
                    adaptiveHeight: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },

                {
                breakpoint: 526,
                settings: {
                    adaptiveHeight: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }]
        });
    }

    if($('.posts__list').length > 0) {
        $('.posts__list').slick({
            //autoplay: true,
            //infinite: true,
            dots: true,
            arrows: false,
            accessibility: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplaySpeed: 3000,
            nextArrow: 'button type="button" class="slick-next"></button>',
            prevArrow: 'button type="button" class="slick-prev"></button>',
            responsive: [{
                breakpoint: 967,
                settings: {
                    adaptiveHeight: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },

                {
                breakpoint: 526,
                settings: {
                    adaptiveHeight: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }]
        });
    }

    //Скріпт для кнопки бургер-меню
    $('.icon-menu').click(function(event){
        $(this).toggleClass('active');
        $('.menu-search__body').toggleClass('active');
        $(body).toggleClass('lock');
        $('.toolbar__fon').toggleClass('toolbar__fon_active');
    })
});
