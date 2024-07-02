$(document).foundation();

$(document).ready(function() {

    const slideContainers = [...document.querySelectorAll('.slide-container')];
    const nxtBtn = [...document.querySelectorAll('.slide-button-next')];
    const preBtn = [...document.querySelectorAll('.slide-button-prev')];

    slideContainers.forEach((item, i) => {
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;

        nxtBtn[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        })

        preBtn[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
        })
    })

    $('#vertical-image-slider-1').click(function () {
        $(this).addClass('clicked');
        $(this).removeClass('vertical-image-slider-1 not-clicked-1 not-clicked-2');
        $('#vertical-image-slider-2').removeClass('clicked vertical-image-slider-2 not-clicked-1 not-clicked-2').addClass('not-clicked-1');
        $('#vertical-image-slider-3').removeClass('clicked vertical-image-slider-3 not-clicked-1 not-clicked-2').addClass('not-clicked-2');
    });

    $('#vertical-image-slider-2').click(function () {
        $(this).addClass('clicked');
        $(this).removeClass('vertical-image-slider-2 not-clicked-1 not-clicked-2');
        $('#vertical-image-slider-1').removeClass('clicked vertical-image-slider-1 not-clicked-1 not-clicked-2').addClass('not-clicked-2');
        $('#vertical-image-slider-3').removeClass('clicked vertical-image-slider-3 not-clicked-1 not-clicked-2').addClass('not-clicked-1');
    });

    $('#vertical-image-slider-3').click(function () {
        $(this).addClass('clicked');
        $(this).removeClass('vertical-image-slider-3 not-clicked-1 not-clicked-2');
        $('#vertical-image-slider-1').removeClass('clicked vertical-image-slider-1 not-clicked-1 not-clicked-2').addClass('not-clicked-1');
        $('#vertical-image-slider-2').removeClass('clicked vertical-image-slider-2 not-clicked-1 not-clicked-2').addClass('not-clicked-2');
    });





});