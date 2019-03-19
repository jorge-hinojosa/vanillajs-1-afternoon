console.log('testing')

let board = [];

function play(move) {
    const player = document.getElementById('player');
    const moveSet = document.getElementById(move);

    if (player.innerText === 'X') {
        player.innerText = 'O';
        moveSet.innerText = 'X';
        board[move] = 'X';
    }
    else if (player.innerText === 'O') {
        player.innerText = 'X';
        moveSet.innerText = 'O';
        board[move] = 'O';
    }

    let box1 = board[0]
    let box2 = board[1]
    let box3 = board[2]
    let box4 = board[3]
    let box5 = board[4]
    let box6 = board[5]
    let box7 = board[6]
    let box8 = board[7]
    let box9 = board[9]

    if (box1!==undefined && box1===box2 && box2===box3) {
        window.alert(`${box1} is the winner!!!`)
        return
    }
    else if (box4!==undefined && box4===box5 && box5===box6) {
        window.alert(`${box4} is the winner!!!`)
        return
    }
    else if (box7!==undefined && box7===box8 && box8===board[8]) {
        window.alert(`${box7} is the winner!!!`)
        return
    }
    else if (box1!==undefined && box1===box4 && box4===box7) {
        window.alert(`${box1} is the winner!!!`)
        return
    }
    else if (box2!==undefined && box2===box5 && box5===box8) {
        window.alert(`${box2} is the winner!!!`)
        return
    }
    else if (box3!==undefined && box3===box6 && box6===board[8]) {
        window.alert(`${box3} is the winner!!!`)
        return
    }
    else if (box1!==undefined && box1===box5 && box5===board[8]) {
        window.alert(`${box1} is the winner!!!`)
        return
    }
    else if (box3!==undefined && box3===box5 && box5===box7) {
        window.alert(`${box3} is the winner!!!`)
        return
    }

    let catsGame = true
    for (let i = 0; i <= 8; i++) {
        if (board[i] === undefined) {
            catsGame = false;
        }
    }
    if (catsGame === true) {
        window.alert('There is no winner and no chicken dinner :(')
    }
    console.log(board)
}

function resetGame() {
    board = [];
    for(let i = 0; i <= 8; i++) {
        document.getElementById(i).innerText = '';
    }
}