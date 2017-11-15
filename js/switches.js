var switchesInputAnimationHide = {};
var ballsAnimationHide = {};


function changeInput(e) {
    var value = Number(e.target.value);
    if (!isNaN(value) && (value >= 0 && value <=100)) {
        turn(value);
    } else {
    }
}


function clickOnAnimationOrHide(e) {
    whatIsSwitch = /animation|hide/.exec(e.target.className)[0];
    console.log(whatIsSwitch);
    if (getComputedStyle(ballsAnimationHide[whatIsSwitch]).float === 'left') {
        ballsAnimationHide[whatIsSwitch].style.float = 'right';
        ballsAnimationHide[whatIsSwitch].style.backgroundColor = '#fff';

        switchesInputAnimationHide[whatIsSwitch].style.backgroundColor = '#7ECE13';
        switchesInputAnimationHide[whatIsSwitch].style.borderColor = '#3fce14';

        switch (whatIsSwitch) {
            case 'animation': {
                circle.style.animationPlayState = 'running';
                break; }
            case 'hide': {
                circle.style.visibility = 'hidden';
                showCircle = false;
                actionLoaderStatus('hidden');
                break; }
        }
    } else {
        ballsAnimationHide[whatIsSwitch].style.float = 'left';
        ballsAnimationHide[whatIsSwitch].style.backgroundColor = '#a6a6a6';

        switchesInputAnimationHide[whatIsSwitch].style.backgroundColor = '#5f5f5f';
        switchesInputAnimationHide[whatIsSwitch].style.borderColor = '#000';

        switch (whatIsSwitch) {
            case 'animation': {
                circle.style.animationPlayState = 'paused';
                break; }
            case 'hide': {
                circle.style.visibility = 'visible';
                showCircle = true;
                actionLoaderStatus('visible');
                break; }
        }
    }

}


function Switches() {
    var switches = document.querySelectorAll('.b-left__switch');

    for (i = 0; i < switches.length; i++) {
        // switches[i].style.width = 1.5 * switches[i].offsetHeight + 'px';

        whatIsSwitch = /input|animation|hide/.exec(switches[i].childNodes[1].className)[0];
        switchesInputAnimationHide[whatIsSwitch] = switches[i].childNodes[1];

        if (switchesInputAnimationHide[whatIsSwitch].childNodes.length !== 0) {
            ballsAnimationHide[whatIsSwitch] = switchesInputAnimationHide[whatIsSwitch].childNodes[1];
            ballsAnimationHide[whatIsSwitch].style.width = switchesInputAnimationHide[whatIsSwitch].offsetHeight + 'px';
        }

        switch (whatIsSwitch) {
            case 'input':
                switchesInputAnimationHide['input'].addEventListener('input', changeInput);
                break;
            case 'animation':
                switchesInputAnimationHide['animation'].addEventListener('click', clickOnAnimationOrHide);
                break;
            case 'hide':
                switchesInputAnimationHide['hide'].addEventListener('click', clickOnAnimationOrHide);
                break;
        }
    }
}


function Labels() {
    var rightBlock = document.querySelectorAll('.b-right');
    for (var i=0; i < rightBlock.length; i++) {
        label = rightBlock[i].childNodes[1];
        label.style.top = 0.5 * (rightBlock[i].offsetHeight - label.offsetHeight) + 'px';
    }
}