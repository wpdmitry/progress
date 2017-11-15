var circle = document.querySelector('.b-progress__loader');
var elementStatus = document.querySelector('.b-progress__loader_status');
var rememberValue;
var elementSide, radiusCircle;
var showCircle = true;


function actionLoaderStatus(action) {
    var loaderStatus = document.querySelectorAll('.b-progress__loader_status');
    if (loaderStatus.length > 1) {
        for (var k=1; k < loaderStatus.length; k++) {
            switch (action) {
                case 'remove': loaderStatus[k].remove(); break;
                case 'hidden': loaderStatus[k].style.visibility = 'hidden'; break;
                case 'visible': loaderStatus[k].style.visibility = 'visible'; break;
            }

        }
    }
}


function turn(value) {
    rememberValue = value;
    actionLoaderStatus('remove');

    var angle = 3.6 * value;
    for (var i = 0; i < angle; i = i + 2.) { // 3.6
        var newElement = elementStatus.cloneNode();

        newElement.style.transform = 'translate(' + (radiusCircle - 0.5 * elementSide) + 'px,' + (radiusCircle - 0.5 * elementSide) + 'px)' +
            ' rotate(' + (-90 + i) + 'deg) translate(' + (radiusCircle + 0.5 * elementSide) + 'px,' + 0 + 'px)';

        if (showCircle) {
            newElement.style.visibility = 'visible';
        }
        circle.appendChild(newElement);
    }
}


function frozenCircle() {
    elementSide = parseFloat(elementStatus.offsetWidth);
    radiusCircle = 0.5 * parseFloat(circle.clientHeight);
    turn(rememberValue);
}
