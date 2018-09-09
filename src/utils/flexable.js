const flexable = {
    init: () => {
        (function (doc, win) {
            var docEl = doc.documentElement,
                resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
                recalc = function () {
                    var clientWidth = docEl.clientWidth;
                    // 最小不小于 320 最大不大于736
                    clientWidth = clientWidth > 320 ? ( clientWidth <= 736 ? clientWidth : 736 ) : 320;
                    if (!clientWidth) return;
                    docEl.style.fontSize = 100 * (clientWidth / 375) + 'px';
                };
          
            // Abort if browser does not support addEventListener
            if (!doc.addEventListener) return;
            win.addEventListener(resizeEvt, recalc, false);
            // doc.addEventListener('onload', recalc, false);
            win.onload = function() {
                recalc();
            }
        })(document, window);
    }
}

export default flexable;