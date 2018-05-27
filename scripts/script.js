// Navigation for mobile
$(document).ready(function() {
    $(".menu-small").css("display", "none");
    $(".bars").click(function () {
        $(".menu-small").toggle();
    });
});
