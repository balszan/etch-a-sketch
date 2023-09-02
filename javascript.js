const board = document.querySelector('.board');
board.style.gridTemplateColumns = 'repeat(16,1fr)';
board.style.gridTemplateRows = 'repeat(16,1fr)';
const button = document.querySelector('#choice');

function createSquares(num) {
    if(num<=100) {
        for(let i=0; i<num**2; i++) {
            let square = document.createElement('div');
            square.classList.add('squares');
            board.appendChild(square);
            board.style.gridTemplateColumns = `repeat(${num},1fr)`;
            board.style.gridTemplateRows = `repeat(${num},1fr)`;
        }
    } else {
        alert('Too many! Please insert a number smaller than 100.');
    }
}

function removeSquares() {
    while(board.firstChild) {
        board.removeChild(board.firstChild);
    }
}


button.addEventListener('click', () => {
    let gridNumber = prompt('How many squares on each side?');
    removeSquares();
    createSquares(gridNumber);
    etch();
})

function etch() {
    const squares = document.querySelectorAll('.squares');

for(let i=0; i<squares.length; i++) {
    squares[i].addEventListener('mouseover', () => {
        squares[i].style.backgroundColor = 'black';
    })
}
}


createSquares(16);
etch();