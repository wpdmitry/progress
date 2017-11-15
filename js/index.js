var innerContainer;
var blockProgress, blockSwitches;
var windowHeight, windowWidth;


innerContainer = document.querySelectorAll('.inner-container');
blockProgress = document.querySelector('.b-progress');
blockSwitches = document.querySelector('.b-switches');


function setPosition() {
    windowHeight = window.outerHeight;
    windowWidth = window.outerWidth;

    if (windowHeight > windowWidth) {
        for (i=0; i < innerContainer.length; i++){
            innerContainer[i].classList.remove('inner-container_inline');
            innerContainer[i].classList.add('inner-container_block');
        }
    } else {
        for (i=0; i < innerContainer.length; i++) {
            innerContainer[i].classList.remove('inner-container_block');
            innerContainer[i].classList.add('inner-container_inline');
        }

    }

    blockProgress.style.width = '70%';
    blockProgress.style.height = blockProgress.offsetWidth + 'px';
    blockProgress.style.top = 0.5 * (innerContainer[0].offsetHeight - blockProgress.offsetHeight) + 'px';

    blockSwitches.style.width= '70%';
    blockSwitches.style.height = blockSwitches.offsetWidth + 'px';
    blockSwitches.style.top = 0.5 * (innerContainer[0].offsetHeight - blockSwitches.offsetHeight) + 'px';

    if (blockProgress.offsetHeight > innerContainer[0].offsetHeight) {
        blockProgress.style.height = innerContainer[0].offsetHeight + 'px';
        blockProgress.style.width = blockProgress.offsetHeight + 'px';
        blockProgress.style.top = '0';
    }

    if (blockSwitches.offsetHeight > innerContainer[0].offsetHeight) {
        blockSwitches.style.height = innerContainer[0].offsetHeight + 'px';
        blockSwitches.style.width = blockSwitches.offsetHeight + 'px';
        blockSwitches.style.top = '0';
    }
}


addEventListener('load', setPosition);
addEventListener('load', frozenCircle);
addEventListener('load', Switches);
addEventListener('load', Labels);

addEventListener('resize', setPosition);
addEventListener('resize', frozenCircle);
addEventListener('resize', Switches);
addEventListener('resize', Labels);
