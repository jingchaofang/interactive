/*=========================
  Hash Navigation
  如需为每个slide增加散列导航（有点像锚链接）。将hashnav设置为true，并在每个slide处增加data-hash属性。
  这样当你的swiper切换时你的页面url就会加上这个属性的值了，你也可以通过进入页面时修改页面url让swiper在初始化时切换到指定的slide。
  http://www.swiper.com.cn/api/basic/2015/0308/211.html
  ===========================*/
s.hashnav = {
    onHashCange: function (e, a) {
        var newHash = document.location.hash.replace('#', '');
        var activeSlideHash = s.slides.eq(s.activeIndex).attr('data-hash');
        if (newHash !== activeSlideHash) {
            s.slideTo(s.wrapper.children('.' + s.params.slideClass + '[data-hash="' + (newHash) + '"]').index());
        }
    },
    attachEvents: function (detach) {
        var action = detach ? 'off' : 'on';
        $(window)[action]('hashchange', s.hashnav.onHashCange);
    },
    setHash: function () {
        if (!s.hashnav.initialized || !s.params.hashnav) return;
        if (s.params.replaceState && window.history && window.history.replaceState) {
            window.history.replaceState(null, null, ('#' + s.slides.eq(s.activeIndex).attr('data-hash') || ''));
        } else {
            var slide = s.slides.eq(s.activeIndex);
            var hash = slide.attr('data-hash') || slide.attr('data-history');
            document.location.hash = hash || '';
        }
    },
    init: function () {
        if (!s.params.hashnav || s.params.history) return;
        s.hashnav.initialized = true;
        var hash = document.location.hash.replace('#', '');
        if (hash) {
            var speed = 0;
            for (var i = 0, length = s.slides.length; i < length; i++) {
                var slide = s.slides.eq(i);
                var slideHash = slide.attr('data-hash') || slide.attr('data-history');
                if (slideHash === hash && !slide.hasClass(s.params.slideDuplicateClass)) {
                    var index = slide.index();
                    s.slideTo(index, speed, s.params.runCallbacksOnInit, true);
                }
            }
        }
        if (s.params.hashnavWatchState) s.hashnav.attachEvents();
    },
    destroy: function () {
        if (s.params.hashnavWatchState) s.hashnav.attachEvents(true);
    }
};
