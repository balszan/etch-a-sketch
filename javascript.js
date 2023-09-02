const container = document.querySelector('#container');

for(let i=0; i<16; i++) {
    let square = document.createElement('div');
    container.appendChild(square);
    square.classList.add('squares');
}