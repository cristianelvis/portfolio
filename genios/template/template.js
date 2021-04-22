/*!
 * Start Bootstrap - Freelancer v5.1.0 (https://startbootstrap.com/template-overviews/freelancer)
 * Copyright 2013-2019 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/master/LICENSE)
 */

!(function (a) {
    "use strict";
    a('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var o = a(this.hash);
            if ((o = o.length ? o : a("[name=" + this.hash.slice(1) + "]")).length) return a("html, body").animate({ scrollTop: o.offset().top - 71 }, 1e3, "easeInOutExpo"), !1;
        }
    }),
        a(document).scroll(function () {
            100 < a(this).scrollTop() ? a(".scroll-to-top").fadeIn() : a(".scroll-to-top").fadeOut();
        }),
        a(".js-scroll-trigger").click(function () {
            a(".navbar-collapse").collapse("hide");
        }),
        a("body").scrollspy({ target: "#mainNav", offset: 80 });
    var o = function () {
        100 < a("#mainNav").offset().top ? a("#mainNav").addClass("navbar-shrink") : a("#mainNav").removeClass("navbar-shrink");
    };
    o(),
        a(window).scroll(o),
        a(function () {
            a("body")
                .on("input propertychange", ".floating-label-form-group", function (o) {
                    a(this).toggleClass("floating-label-form-group-with-value", !!a(o.target).val());
                })
                .on("focus", ".floating-label-form-group", function () {
                    a(this).addClass("floating-label-form-group-with-focus");
                })
                .on("blur", ".floating-label-form-group", function () {
                    a(this).removeClass("floating-label-form-group-with-focus");
                });
        });
})(jQuery);
