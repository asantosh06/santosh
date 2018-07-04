!function () {
    "use strict";
    var e = "undefined" != typeof module && module.exports, n = "undefined" != typeof Element && "ALLOW_KEYBOARD_INPUT"in Element, l = function () {
        for (var e, n, l = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], r = 0, t = l.length, u = {}; r < t; r++)if (e = l[r], e && e[1]in document) {
            for (r = 0, n = e.length; r < n; r++)u[l[0][r]] = e[r];
            return u
        }
        return !1
    }(), r = {
        request: function (e) {
            var r = l.requestFullscreen;
            e = e || document.documentElement, /5\.1[\.\d]* Safari/.test(navigator.userAgent) ? e[r]() : e[r](n && Element.ALLOW_KEYBOARD_INPUT)
        }, exit: function () {
            document[l.exitFullscreen]()
        }, toggle: function (e) {
            this.isFullscreen ? this.exit() : this.request(e)
        }, raw: l
    };
    return l ? (Object.defineProperties(r, {
        isFullscreen: {
            get: function () {
                return Boolean(document[l.fullscreenElement])
            }
        }, element: {
            enumerable: !0, get: function () {
                return document[l.fullscreenElement]
            }
        }, enabled: {
            enumerable: !0, get: function () {
                return Boolean(document[l.fullscreenEnabled])
            }
        }
    }), void(e ? module.exports = r : window.screenfull = r)) : void(e ? module.exports = !1 : window.screenfull = !1)
}();