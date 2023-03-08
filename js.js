const gridBox = document.querySelector('#gridBox');


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

function gridSizeSixteen() {
    for (let i = 0; i < 256; i++) {
        const content = document.createElement('div');
        content.classList.add('gridSize');
        gridBox.style.gridTemplateColumns = 'repeat(16, auto)';

        gridBox.appendChild(content);
    };

}

function gridSizeFourtyEight() {
    for (let i = 0; i < 2304; i++) {
        const content = document.createElement('div');
        content.classList.add('gridSize');
        gridBox.style.gridTemplateColumns = 'repeat(48, auto)';

        gridBox.appendChild(content);
    };

}

function gridSizeNinetySix() {
    for (let i = 0; i < 9216; i++) {
        const content = document.createElement('div');
        content.classList.add('gridSize');
        gridBox.style.gridTemplateColumns = 'repeat(96, auto)';

        gridBox.appendChild(content);
    };

}

function sixteen(){
    gridSizeSixteen();
}

function fourtyEight(){
    gridSizeFourtyEight();
}

function ninetySix(){
    gridSizeNinetySix();
}