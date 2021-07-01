//===моб. меню
let menuMob = document.querySelector('.menu-mb');
let headerMenu = document.querySelector('.nav-header');


let toggleMenu = function () {
    headerMenu.classList.toggle('nav-header_active');
    menuMob.classList.toggle('menu-mp--open');
    document.body.classList.toggle('hidden');
}
menuMob.addEventListener('click', toggleMenu);

//===catalog mb 

let catalogItems = document.querySelectorAll('.catalog__item_has-subcatalog');
let subcatalogItems = document.querySelectorAll('.catalog__subcatalog-item_has-subcat1');
let subcatalogItemsOne = document.querySelectorAll('.catalog__subcatalog-aside1-item_has-subcat-aside2');

//регулирует поведение hover
function checkViewport(catalog, classModification) {
    if (window.innerWidth <= 985) {
        catalog.forEach(item => {
            item.classList.remove(`${classModification}`);
        })
    } else {
        catalog.forEach(item => {
            item.classList.add(`${classModification}`);
        })
    }
}

function init() {
    checkViewport(catalogItems, 'catalog__item_hover');
    checkViewport(subcatalogItems, 'catalog__subcatalog-item_hover');
    checkViewport(subcatalogItemsOne, 'catalog__subcatalog-aside1-item_hover');
}

init();

window.addEventListener('resize', init);



function openSubcatalog(catalog, activeClassSubcatalog, checkedClass) {
    catalog.forEach(item => {
        item.addEventListener('click', function (e) {

            let target = e.target;

            if (target.classList.contains(checkedClass)) {
                this.children[0].classList.toggle('active-link-mb');
                let subcatalog = this.children[1];
                subcatalog.classList.toggle(`${activeClassSubcatalog}`);
            }
        })
    })

}

openSubcatalog(catalogItems, 'catalog__subcatalog_active-mb', 'catalog__item');
openSubcatalog(subcatalogItems, 'catalog__subcatalog-item_active-mb', 'catalog__subcatalog-item');
openSubcatalog(subcatalogItemsOne, 'catalog__subcatalog-aside1-item_active-mb', 'catalog__subcatalog-aside1-item');















/*Dropdown Menu*/
$('.dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/


$('.dropdown-menu li').click(function () {
    var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
        msg = '<span class="msg">Hidden input value: ';
    $('.msg').html(msg + input + '</span>');
});

$('.banner').slick({
    infinite: false,
    dots: true
});

$('.cards__slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    // mobileFirst: true,
    responsive: [{
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
});