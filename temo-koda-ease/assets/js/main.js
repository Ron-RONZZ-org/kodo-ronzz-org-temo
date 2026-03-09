jQuery.noConflict();

(function ($) {
    var image = $('.jarallax-img');
    if (!image) return;

    var options = {
        disableParallax: /iPad|iPhone|iPod|Android/,
        disableVideo: /iPad|iPhone|iPod|Android/,
        speed: 0.1,
    };

    image.imagesLoaded(function () {
        image.parent().jarallax(options).addClass('initialized');
    });
})(jQuery);

(function ($) {
    'use strict';
    $('.featured-posts').owlCarousel({
        dots: false,
        margin: 30,
        nav: true,
        navText: [
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="18" height="18" fill="currentColor"><path d="M20.547 22.107L14.44 16l6.107-6.12L18.667 8l-8 8 8 8 1.88-1.893z"></path></svg>',
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="18" height="18" fill="currentColor"><path d="M11.453 22.107L17.56 16l-6.107-6.12L13.333 8l8 8-8 8-1.88-1.893z"></path></svg>',
        ],
        responsive: {
            0: {
                items: 1,
                slideBy: 1,
            },
            768: {
                items: 3,
                slideBy: 3,
            },
            992: {
                items: 4,
                slideBy: 4,
            },
        },
    });
})(jQuery);

document.addEventListener('DOMContentLoaded', function () {

    // ── ISO clock ────────────────────────────────────────────────────────────
    var clockEl = document.getElementById('koda-clock');
    if (clockEl) {
        function updateClock() {
            var now = new Date();
            // ISO 8601 local-time to second: YYYY-MM-DDTHH:MM:SS
            var pad = function (n) { return n < 10 ? '0' + n : String(n); };
            clockEl.textContent =
                now.getFullYear() + '-' +
                pad(now.getMonth() + 1) + '-' +
                pad(now.getDate()) + 'T' +
                pad(now.getHours()) + ':' +
                pad(now.getMinutes()) + ':' +
                pad(now.getSeconds());
        }
        updateClock();
        setInterval(updateClock, 1000);
    }

    // ── Scroll button → reveal menu section ─────────────────────────────────
    var scrollBtn = document.getElementById('kodaScrollBtn');
    var menuSection = document.getElementById('kodaMenu');
    if (scrollBtn && menuSection) {
        scrollBtn.addEventListener('click', function () {
            var isOpen = menuSection.classList.toggle('is-visible');
            menuSection.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
            scrollBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            if (isOpen) {
                menuSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // ── Burger button → reveal navigation ───────────────────────────────────
    var burger = document.querySelector('.gh-burger');
    var ghHead = document.getElementById('gh-head');
    if (burger && ghHead) {
        burger.addEventListener('click', function () {
            ghHead.classList.toggle('gh-head-open');
            var isOpen = ghHead.classList.contains('gh-head-open');
            burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });
    }

    // ── Markmap button ───────────────────────────────────────────────────────
    var targetContainer = document.getElementById('markmap-button-container');
    if (!targetContainer) return;

    var urlValue = targetContainer.getAttribute('data-markmap-url');
    if (!urlValue) return;

    try {
        var parsedUrl = new URL(urlValue);
        if (parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:') {
            console.warn('Invalid markmap URL protocol:', parsedUrl.protocol);
            return;
        }
    } catch (e) {
        console.warn('Invalid markmap URL:', urlValue);
        return;
    }

    var linkElement = document.createElement('a');
    linkElement.href = urlValue;
    linkElement.className = 'markmap-button';
    linkElement.target = '_blank';
    linkElement.rel = 'noopener noreferrer';

    // Create text nodes for each line to avoid XSS risks
    linkElement.appendChild(document.createTextNode('Vidi ĉi tiun kiel markmapon'));
    linkElement.appendChild(document.createElement('br'));
    linkElement.appendChild(document.createTextNode('Visualiser ce contenu en markmap'));
    linkElement.appendChild(document.createElement('br'));
    linkElement.appendChild(document.createTextNode('View this content in markmap form'));

    targetContainer.appendChild(linkElement);
});

