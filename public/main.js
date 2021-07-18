'use-strict'

window.onload = function() {
  if (localStorage.getItem("hasCodeRunBefore") != null) {
    createBoard()
    localStorage.setItem("hasCodeRunBefore", true)
  }
}


const board = document.getElementById('chessboard-container')
console.log(board)

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

function createBoard(){
  let table = document.getElementById('tbody')
  let row = table.insertRow(0)
  console.log('Its beginning!' + table)

  // let tableRow = document.createElement('<tr>')
  for (let i = 0; i <= 9; i++) {
    // table.appendChild(tableRow)
    row.insertCell(i)
    // return table

  }
}
