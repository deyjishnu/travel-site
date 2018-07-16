document.addEventListener('DOMContentLoaded', function () {
    // ScrollSpy
    const scrollspy = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(scrollspy, {});

    // Sidenav
    const sideNav = document.querySelector('.sidenav');
    M.Sidenav.init(sideNav, {});

    // Slider
    const slider = document.querySelector('.slider');
    M.Slider.init(slider, {
        interval: 10000,
        // height: 600,
        // indicators: false,
        duration: 1000
    });

    // Tabs
    const tabs = document.querySelector('.tabs');
    M.Tabs.init(tabs, {
        swipeable: true
    });
});
