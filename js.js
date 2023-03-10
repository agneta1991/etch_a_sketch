let gridBox = document.getElementById('gridBox');
let isBtnClicked = false;

function myFunction() {
    document.getElementById('myDropdown').classList.toggle('show');
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdownMenu");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


function myFunctionTwo() {
    document.getElementById('myDropdownTwo').classList.toggle('show');
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtnTwo')) {
        let dropdownsTwo = document.getElementsByClassName("dropdownMenuTwo");
        let i;
        for (i = 0; i < dropdownsTwo.length; i++) {
            let openDropdown = dropdownsTwo[i];
            if (openDropdown.classList.contains('showTwo')) {
                openDropdown.classList.remove('showTwo');
            }
        }
    }
}



function sixteen() {
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
    gridDivs = document.querySelectorAll('#gridBox > div');
    gridDivs.forEach((individualDiv) => {
        individualDiv.addEventListener('mouseover', () => {
            individualDiv.classList.add('redColor');
        })
    })

};

function orangeBtn() {
    gridDivs = document.querySelectorAll('#gridBox > div');
    gridDivs.forEach((individualDiv) => {
        individualDiv.addEventListener('mouseover', () => {
            individualDiv.classList.add('orangeColor');
        })
    })

};

function greenBtn() {
    gridDivs = document.querySelectorAll('#gridBox > div');
    gridDivs.forEach((individualDiv) => {
        individualDiv.addEventListener('mouseover', () => {
            individualDiv.classList.add('greenColor');
        })
    })

};

function yellowBtn() {
    gridDivs = document.querySelectorAll('#gridBox > div');
    gridDivs.forEach((individualDiv) => {
        individualDiv.addEventListener('mouseover', () => {
            individualDiv.classList.add('yellowColor');
        })
    })

};

function blueBtn() {
    gridDivs = document.querySelectorAll('#gridBox > div');
    gridDivs.forEach((individualDiv) => {
        individualDiv.addEventListener('mouseover', () => {
            individualDiv.classList.add('blueColor');
        })
    })

};

function purpleBtn() {
    gridDivs = document.querySelectorAll('#gridBox > div');
    gridDivs.forEach((individualDiv) => {
        individualDiv.addEventListener('mouseover', () => {
            individualDiv.classList.add('purpleColor');
        })
    })

};

function magentaBtn() {
    gridDivs = document.querySelectorAll('#gridBox > div');
    gridDivs.forEach((individualDiv) => {
        individualDiv.addEventListener('mouseover', () => {
            individualDiv.classList.add('magentaColor');
        })
    })

};