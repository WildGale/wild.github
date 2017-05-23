$('a[href*="#"]')

.not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {

        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            if (target.length) {

                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {

                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    };
                });
            }
        }
    });
$("#header").removeClass("default");
$(window).scroll(function() {
    if ($(this).scrollTop() > 150) {
        $("#header").addClass("default").fadeIn('fast');
    } else {
        $("#header").removeClass("default").fadeIn('fast');
    };
});
$(document).ready(function() {

    $('.skillbar').skillBars({
        from: 0,
        speed: 6000,
        interval: 100,
        decimals: 0,
    });

});
var widgetOptions28967 = {
    bg_color: "transparent"
};
(function() {
    var a = document.createElement("script");
    a.async = true;
    a.src = (document.location.protocol == "https:" ? "https:" : "http:") + "//ucalc.pro/api/widget.js?id=28967&t=" + Math.floor(new Date() / 3600000);
    document.getElementsByTagName("head")[0].appendChild(a)
})();
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();
