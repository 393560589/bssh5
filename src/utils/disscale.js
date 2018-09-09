const disscale = {
    init: function() {
        try {
            document.documentElement.addEventListener('touchstart', function (event) {
                if (event.touches.length > 1) {
                  event.preventDefault();
                }
            }, false);
        } catch (err) {
            console.log(err)
        }
    }
}

export default disscale;


