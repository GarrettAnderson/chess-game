'use-strict'

window.onload = function() {
  if (localStorage.getItem("hasCodeRunBefore") != null) {
    createBoard()
    localStorage.setItem("hasCodeRunBefore", true)
  }
}


const board = document.getElementById('chessboard-container')
// const newBtn = document.getElementById('new-game-btn')
const newBtn = document.querySelector('.new-game-btn')
console.log(board, newBtn)

// create variables for the white and black pieces
// create a function that creates the board

const whitePawn = '&#9817;'
const whiteMonarchs = [
  {rank: 'rook', hex: '&#9814;'},
  {rank: 'knight', hex: '&#9816;'},
  {rank: 'bishop', hex: '&#9815;'},
  {rank: 'queen', hex: '&#9813;'},
  {rank: 'king', hex: '&#9812;'}
]

const blkPawn = '&#9823;'
const blkMonarchs = [
  {rank: 'rook', hex: '&#9820;'},
  {rank: 'knight', hex: '&#9822;'},
  {rank: 'bishop', hex: '&#9821;'},
  {rank: 'queen', hex: '&#9819;'},
  {rank: 'king', hex: '&#9818;'}
]


newBtn.addEventListener('click', newGame)

// you would only want to removeEventListener if
// you were removing the button programmatically
//
// function cleanUp() {
//   console.log('meow')
//   newBtn.removeEventListener('click', newGame)
// }

function createBoard(){
  let table = document.getElementById('tbody')

  console.log('Its beginning!' + table)

  // let tableRow = document.createElement('<tr>')

  for (let i = 0; i < 8; i++) {
      let row = table.insertRow(i)
      let firstCell = row.insertCell(0)

      firstCell.innerHTML = i + 1

      for (let j = 1; j < 9; j++) {
        row.insertCell(j)
      }
  }

  // const helperNumRow = table.rows[0]
  // for (let i = 0; i < helperNumRow.cells.length; i++) {
  //   console.log(i)
  //   helperNumRow.cells[i].innerHTML = i
  // }
}

  function newGame() {
    console.log('testing')

    // return cleanUp
  }
