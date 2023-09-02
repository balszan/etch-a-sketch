const board = document.querySelector('.board');
board.style.gridTemplateColumns = 'repeat(16,1fr)';
board.style.gridTemplateRows = 'repeat(16,1fr)';



function createSquares(num) {
    for(let i=0; i<num**2; i++) {
        let square = document.createElement('div');
        square.classList.add('squares');
        board.appendChild(square);
    
    }
}


createSquares(16);

const squares = document.querySelectorAll('.squares');

for(let i=0; i<squares.length; i++) {
    squares[i].addEventListener('mouseover', () => {
        squares[i].style.backgroundColor = 'black';
        console.log(i);
    })
}

