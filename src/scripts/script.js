Zoomerang.config({
    maxHeight: 600,
    maxWidth: 900,
    bgColor: '#fff',
    bgOpacity: .85
}).listen('.images--popup')
var wow = new WOW(
    {
        boxClass: 'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0,          // distance to the element when triggering the animation (default is 0)
        mobile: true,       // trigger animations on mobile devices (default is true)
        live: true,       // act on asynchronously loaded content (default is true)
        callback: function (box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null,    // optional scroll container selector, otherwise use window,
        resetAnimation: true,     // reset animation on end (default is true)
    }
);
wow.init();
$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 600,
    });
    var mobileMenuOutsideClick = function () {
        $(document).click(function (e) {
            var container = $("#fh5co-offcanvas, .nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {

                if ($('body').hasClass('offcanvas')) {

                    $('body').removeClass('offcanvas');
                    $('.nav-toggle').removeClass('active');
                }
            }
        });

    };
    var offcanvasMenu = function () {
        $('.wrapper').prepend('<div id="offcanvas" />');
        $('.wrapper').prepend('<a href="#" class="nav-toggle button-toggle"><i></i></a>');
        var clone1 = $('.menu-offcanvas > ul').clone();
        $('#offcanvas').append(clone1);
        $(window).resize(function () {
            if ($('body').hasClass('offcanvas')) {
                $('body').removeClass('offcanvas');
                $('.nav-toggle').removeClass('active');
            }
        });
    };
    var burgerMenu = function () {
        $('body').on('click', '.nav-toggle', function (event) {
            var $this = $(this);
            if ($('body').hasClass('overflow offcanvas')) {
                $('body').removeClass('overflow offcanvas');
            } else {
                $('body').addClass('overflow offcanvas');
            }
            $this.toggleClass('active');
            event.preventDefault();

        });
    };
    var DateTimePickerFunc = function() {
		if ($('#taskdatetime').length > 0) {
			$('#taskdatetime').datetimepicker();
		}
	}
    $(function () {
        mobileMenuOutsideClick();
        offcanvasMenu();
        burgerMenu();
        DateTimePickerFunc();
        $('.images--popup').each(function () {
            $(this).css('width', '100%');
        });
    });
})