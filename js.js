let gridBox = document.getElementById('gridBox');
let isBtnClicked = false;

function myFunction() {
    document.getElementById('myDropdown').classList.toggle('show');
}


function myFunctionTwo() {
    document.getElementById('myDropdownTwo').classList.toggle('showTwo');
}




function sixteen() {
    myFunction();
    if (isBtnClicked === false) {
        for (let i = 0; i < 256; i++) {
            const content = document.createElement('div');
            content.className = 'gridSizeSixteen';
            gridBox.style.gridTemplateColumns = 'repeat(16, auto)';
            gridBox.appendChild(content);

        }
    }
    isBtnClicked = true;
}

function fourtyEight() {
    myFunction();
    if (isBtnClicked === false) {
        for (let i = 0; i < 2304; i++) {
            const content = document.createElement('div');
            content.className = 'gridSizeFourtyEight';
            gridBox.style.gridTemplateColumns = 'repeat(48, auto)';
            gridBox.appendChild(content);
        }
    }

    isBtnClicked = true;

}

function ninetySix() {
    myFunction();
    if (isBtnClicked === false) {
        for (let i = 0; i < 9216; i++) {
            const content = document.createElement('div');
            content.className = 'gridSizeNinetySix';
            gridBox.style.gridTemplateColumns = 'repeat(96, auto)';
            gridBox.appendChild(content);


        }
        isBtnClicked = true;
    }
}

function refresh() {
    location.reload();
}




function rainbowBtn() {
    gridDivs = document.querySelectorAll('#gridBox > div');
    gridDivs.forEach((individualDiv) => {
        individualDiv.addEventListener('mouseover', () => {
            individualDiv.classList.add('rainbowColor');
        })
    })

};

function blackBtn() {
    gridDivs = document.querySelectorAll('#gridBox > div');
    gridDivs.forEach((individualDiv) => {
        individualDiv.addEventListener('mouseover', () => {
            individualDiv.classList.add('blackColor');
        })
    })

};

function eraseBtn() {
    gridDivs = document.querySelectorAll('#gridBox > div');
    gridDivs.forEach((individualDiv) => {
        individualDiv.addEventListener('mouseover', () => {
            individualDiv.classList.add('whiteColor');
        })
    })

};

function redBtn() {
    myFunctionTwo();
    gridDivs = document.querySelectorAll('#gridBox > div');
    gridDivs.forEach((individualDiv) => {
        individualDiv.addEventListener('mouseover', () => {
            individualDiv.classList.add('redColor');
        })
    })

};

function orangeBtn() {
    myFunctionTwo();
    gridDivs = document.querySelectorAll('#gridBox > div');
    gridDivs.forEach((individualDiv) => {
        individualDiv.addEventListener('mouseover', () => {
            individualDiv.classList.add('orangeColor');
        })
    })

};

function greenBtn() {
    myFunctionTwo();
    gridDivs = document.querySelectorAll('#gridBox > div');
    gridDivs.forEach((individualDiv) => {
        individualDiv.addEventListener('mouseover', () => {
            individualDiv.classList.add('greenColor');
        })
    })

};

function yellowBtn() {
    myFunctionTwo();
    gridDivs = document.querySelectorAll('#gridBox > div');
    gridDivs.forEach((individualDiv) => {
        individualDiv.addEventListener('mouseover', () => {
            individualDiv.classList.add('yellowColor');
        })
    })

};

function blueBtn() {
    myFunctionTwo();
    gridDivs = document.querySelectorAll('#gridBox > div');
    gridDivs.forEach((individualDiv) => {
        individualDiv.addEventListener('mouseover', () => {
            individualDiv.classList.add('blueColor');
        })
    })

};

function purpleBtn() {
    myFunctionTwo();
    gridDivs = document.querySelectorAll('#gridBox > div');
    gridDivs.forEach((individualDiv) => {
        individualDiv.addEventListener('mouseover', () => {
            individualDiv.classList.add('purpleColor');
        })
    })

};

function magentaBtn() {
    myFunctionTwo();
    gridDivs = document.querySelectorAll('#gridBox > div');
    gridDivs.forEach((individualDiv) => {
        individualDiv.addEventListener('mouseover', () => {
            individualDiv.classList.add('magentaColor');
        })
    })

};