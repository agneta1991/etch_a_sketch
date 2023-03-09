const gridBox = document.querySelector('#gridBox');
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

function sixteen() {
    if (isBtnClicked === false) {
        for (let i = 0; i < 256; i++) {
            const content = document.createElement('div');
            content.className= 'gridSize';
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
            content.className='gridSize';
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
            content.className='gridSize';
            gridBox.style.gridTemplateColumns = 'repeat(96, auto)';
            gridBox.appendChild(content);
        }
    }
    isBtnClicked = true;

}

function refresh() {
    location.reload();
}
function color(){
    document.getElementsByClassName('gridSize').style.backgroundColor='red';
}
function rainbowColor(){
    document.getElementsByClassName('.gridSize').style.backgroundColor='red';
}
function blackColor() {
    gridBox.addEventListener('mouseover', color);
    document.getElementsByClassName('gridSize').classList.add('blackColor');
}
function whiteColor() {
    gridBox.addEventListener('mouseover', color);
    document.getElementsByClassName('gridSize').classList.add('whiteColor');
}





