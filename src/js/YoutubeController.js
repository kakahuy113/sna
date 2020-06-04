if (!window['YT']) {
    var YT = {
        loading: 0,
        loaded: 0,
    };
}
if (!window['YTConfig']) {
    var YTConfig = {
        host: 'http://www.youtube.com',
    };
}
if (!YT.loading) {
    YT.loading = 1;
    (function() {
        var l = [];
        YT.ready = function(f) {
            if (YT.loaded) {
                f();
            } else {
                l.push(f);
            }
        };
        window.onYTReady = function() {
            YT.loaded = 1;
            for (var i = 0; i < l.length; i++) {
                try {
                    l[i]();
                } catch (e) {}
            }
        };
        YT.setConfig = function(c) {
            for (var k in c) {
                if (c.hasOwnProperty(k)) {
                    YTConfig[k] = c[k];
                }
            }
        };
        var a = document.createElement('script');
        a.type = 'text/javascript';
        a.id = 'www-widgetapi-script';
        a.src =
            'https://s.ytimg.com/yts/jsbin/www-widgetapi-vfljTd96t/www-widgetapi.js';
        a.async = true;
        var c = document.currentScript;
        if (c) {
            var n = c.nonce || c.getAttribute('nonce');
            if (n) {
                a.setAttribute('nonce', n);
            }
        }
        var b = document.getElementsByTagName('script')[0];
        b.parentNode.insertBefore(a, b);
    })();
}
const href = document.querySelector('#login-en');
var link_en = href.getAttribute('data-url').split('=')[1];

const href_vi = document.querySelector('#login-vi');
var link_vi = href_vi.getAttribute('data-url').split('=')[1];

const href_kr = document.querySelector('#login-kr');
var link_kr = href_kr.getAttribute('data-url').split('=')[1];

var en, vi, kr;

function onYouTubeIframeAPIReady() {
    en = new YT.Player('login-en', {
        height: '100%',
        width: '100%',
        videoId: link_en,
        playerVars: {
            autoplay: 0,
            controls: 1,
        },
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
        },
    });
    vi = new YT.Player('login-vi', {
        height: '100%',
        width: '100%',
        videoId: link_vi,
        playerVars: {
            autoplay: 0,
            controls: 1,
        },
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
        },
    });
    kr = new YT.Player('login-kr', {
        height: '100%',
        width: '100%',
        videoId: link_kr,
        playerVars: {
            autoplay: 0,
            controls: 1,
        },
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
        },
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}
var done = false;

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}

function stopVideo() {
    player.stopVideo();
}
onYouTubeIframeAPIReady();