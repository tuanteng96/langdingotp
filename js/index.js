/* --------------------------------------------------------------------------
 * File        : index.js
 * Version      : 1.0.0
 * Author       : Tuấn Teng
 *
 * Indonez Copyright 2020 All Rights Reserved.
 * -------------------------------------------------------------------------- 
 * javascript handle initialization
    1. uikit slideshow
    2. Modal iframe
    3. Counter config
 * -------------------------------------------------------------------------- */

'use strict';

const HomepageApp = {
    //----------- 1. uikit slideshow -----------
    homeSlideTop: function() {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        })
    },
    homePopupVideo: function() {
        $('.js-open-video').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    },
    homeMenu: function() {
        $(".js-menu-open").click(function() {
            $(".js-box-menu").slideToggle();
        })
    },
    init: function() {
        HomepageApp.homeSlideTop();
        HomepageApp.homePopupVideo();
        HomepageApp.homeMenu();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    HomepageApp.init();
});

var e = document.getElementById("can"),
    t = e.getContext("2d"),
    n = [],
    i = 0,
    a = 0,
    o = 0;

function s(e, t, n) {
    this.x = e, this.y = t, this.z = n, this.color = "#0D0"
}
e.width = window.innerWidth, e.height = window.innerHeight, s.prototype.rotateX = function(e) {
    var t = this.z * Math.cos(e) - this.x * Math.sin(e);
    return new s(this.z * Math.sin(e) + this.x * Math.cos(e), this.y, t)
}, s.prototype.rotateY = function(e) {
    var t = this.y * Math.cos(e) - this.z * Math.sin(e),
        n = this.y * Math.sin(e) + this.z * Math.cos(e);
    return new s(this.x, t, n)
}, s.prototype.rotateZ = function(e) {
    return new s(this.x * Math.cos(e) - this.y * Math.sin(e), this.x * Math.sin(e) + this.y * Math.cos(e), this.z)
}, s.prototype.perspectiveProjection = function(t, n) {
    var i = t / (n + this.z);
    return new s(this.x * i + e.width / 2, this.y * i + e.height / 2, this.z)
}, s.prototype.draw = function() {
    this.y;
    var e = this.rotateX(i).rotateY(a).rotateZ(0).perspectiveProjection(100, 100);
    this.color = "rgb(255, 186, 0", t.fillStyle = this.color, t.fillRect(e.x, e.y, 1.5, 1.5)
};
for (var r = 0; r < 50; r++)
    for (var l = 0; l < 50; l++) {
        n.push(new s(200 * l - 5e3, 0, 200 * r - 5e3))
    }! function s() {
        t.fillStyle = "rgba(22, 24, 29, 1)", t.fillRect(0, 0, e.width, e.height);
        for (var r = 0, l = n.length; r < l; r++) {
            var c = r % 50,
                d = Math.floor(r / 50),
                u = Math.sin(c / 50 * 4 * Math.PI + o),
                m = Math.cos(d / 50 * 4 * Math.PI + o);
            n[50 * d + c].y = 1500 + u * m * 1050, n[r].draw()
        }
        o += .03, i += .005, a += .005, window.requestAnimationFrame(s)
    }()