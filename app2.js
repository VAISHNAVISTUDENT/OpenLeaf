window.addEventListener('mousemove', function (e) {
    // Trail effect
    [1, .9, .8, .5, .25, .6, .4, .3, .2].forEach(function (i) {
        var j = (1 - i) * 50;
        var elem = document.createElement('div');
        var size = Math.ceil(Math.random() * 10 * i) + 'px';
        elem.style.position = 'fixed';
        elem.style.zIndex = 6;
        elem.style.top = e.pageY - window.scrollY + Math.round(Math.random() * j - j / 2) + 'px';
        elem.style.left = e.pageX + Math.round(Math.random() * j - j / 2) + 'px';
        elem.style.width = size;
        elem.style.opacity = "0.8";
        elem.style.height = size;
        elem.style.background = 'hsla(' +
            Math.round(Math.random() * 160) + ', ' +
            '60%, ' +
            '40%, ' + // Darker brightness
            i + ')';
        elem.style.borderRadius = '50%';
        elem.style.pointerEvents = 'none';
        elem.style.transition = 'opacity 1s, transform 1s';
        elem.style.transform = 'scale(0)'; // Start with scaling
        document.body.appendChild(elem);
        
        // Use a timeout to scale up and fade out
        window.setTimeout(function () {
            elem.style.transform = 'scale(1)'; // Scale to original size
            elem.style.opacity = '0'; // Fade out
        }, 0);
        
        window.setTimeout(function () {
            document.body.removeChild(elem);
        }, 1000); // Match this with the transition duration

    });

    // Falling trail effect
    [1, .9, .8, .5, .25, .6, .3, .2].forEach(function (i) {
        var j = (1 - i) * 50;
        var elem = document.createElement('div');
        var size = Math.ceil(Math.random() * 10 * i) + 'px';
        elem.style.position = 'fixed';
        elem.style.zIndex = 6;
        elem.style.top = e.pageY - window.scrollY + Math.round(Math.random() * j - j / 2) + 'px';
        elem.style.left = e.pageX + Math.round(Math.random() * j - j / 2) + 'px';
        elem.style.width = size;
        elem.style.opacity = "0.8";
        elem.style.height = size;
        elem.style.background = 'hsla(' +
            Math.round(Math.random() * 160) + ', ' +
            '60%, ' +
            '40%, ' + // Darker brightness
            i + ')';
        elem.style.borderRadius = '50%';
        elem.style.pointerEvents = 'none';
        elem.style.animation = "fallingsparkles 1s ease-out";
        document.body.appendChild(elem);
        
        window.setTimeout(function () {
            document.body.removeChild(elem);
        }, 1000); // Match this with the animation duration
    });
}, false);
