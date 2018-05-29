$(document).ready(function () {

    // Mobile Navigation Script
    $(".menu-small").css("display", "none");
    $(".bars").click(function () {
        $(".menu-small").toggle();
    }); // end mobile nav script

    // Masonry Script
    $('.grid').masonry({
        // options
        itemSelector: '.grid-item',
        //        columnWidth: 200
    }); // end masonry script

    // Scroll To links Script
    // Select all links with hashes
    $('a[href*="#"]').click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
            }
        }
    }); // end scrollTo script

}); //end doc ready

// Masonry
// https://masonry.desandro.com/

// Scroll To
// https://css-tricks.com/snippets/jquery/smooth-scrolling/
