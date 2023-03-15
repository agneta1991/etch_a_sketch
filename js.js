let gridBox = document.getElementById('gridBox');


function myFunction() {
    document.getElementById('myDropdown').classList.toggle('show');
}


function myFunctionTwo() {
    document.getElementById('myDropdownTwo').classList.toggle('showTwo');
}


function sixteen() {
    myFunction();
    let element = document.getElementById("gridBox");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    };

    for (let i = 0; i < 256; i++) {
        let content = document.createElement('div');
        content.classList.add('gridSizeSixteen');
        gridBox.style.gridTemplateColumns = 'repeat(16, auto)';
        if (gridBox.getElementsByClassName('gridSizeSixteen').length < 256) {
            gridBox.appendChild(content);
        }
    }
}


function fourtyEight() {
    myFunction();
    let element = document.getElementById("gridBox");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    };

    for (let i = 0; i < 2304; i++) {
        let content = document.createElement('div');
        content.classList.add('gridSizeFourtyEight');
        gridBox.style.gridTemplateColumns = 'repeat(48, auto)';
        if (document.getElementsByClassName('gridSizeFourtyEight').length < 2304) {
            gridBox.appendChild(content);
        }
    }
}


function ninetySix() {
    myFunction();
    let element = document.getElementById("gridBox");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    };

    for (let i = 0; i < 9216; i++) {
        let content = document.createElement('div');
        content.classList.add('gridSizeNinetySix');
        gridBox.style.gridTemplateColumns = 'repeat(96, auto)';
        if (document.getElementsByClassName('gridSizeNinetySix').length < 9216) {
            gridBox.appendChild(content);
        }
    }
}

function refresh() {
    location.reload();
}


let buttonP = document.querySelectorAll('#myDropdownTwo > p');
buttonP.forEach((individualP) => {
    individualP.addEventListener('click', () => {
        myFunctionTwo();
        gridDivs = document.querySelectorAll('#gridBox > div');
        gridDivs.forEach((individualDiv) => {
            individualDiv.addEventListener('mouseover', () => {
                individualDiv.className= '';
                individualDiv.classList.add(individualP.className);
            })
        })
    })
});

let buttonBtn = document.querySelectorAll('.containerTwo > button');
buttonBtn.forEach((individualBtn)=>{
    individualBtn.addEventListener('click', () => {
        gridDivs = document.querySelectorAll('#gridBox > div');
        gridDivs.forEach((individualDiv) => {
            individualDiv.addEventListener('mouseover', () => {
                individualDiv.className = '';
                individualDiv.classList.add(individualBtn.className);
            })
        })
    });
})


