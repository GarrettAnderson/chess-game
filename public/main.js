'use-strict'

// CREATE BOARD WHEN VIEWPORT LOADS AND RELOADS
window.onload = function() {
  if (localStorage.getItem("hasCodeRunBefore") != null) {
    createBoard()
    newGame()
    localStorage.setItem("hasCodeRunBefore", true)
  }
}


// Create representation of the chess board

let boardRep = [
  ["&#9814;", "&#9816;", "&#9815;", "&#9813;", "&#9812;", "&#9815;", "&#9816;", "&#9814;"],
  ["&#9817;", "&#9817;", "&#9817;", "&#9817;", "&#9817;", "&#9817;", "&#9817;", "&#9817;"],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  ["&#9823;", "&#9823;", "&#9823;", "&#9823;", "&#9823;", "&#9823;", "&#9823;", "&#9823;"],
  ["&#9820;", "&#9822", "&#9821;", "&#9819;", "&#9818;", "&#9821;", "&#9822", "&#9820;"]
]


// create variables for the white and black pieces
// create a function that creates the board

const whitePawn = '&#9817;'
const whiteMonarchs = [
  {rank: 'rook', hex: '&#9814;'},
  {rank: 'knight', hex: '&#9816;'},
  {rank: 'bishop', hex: '&#9815;'},
  {rank: 'queen', hex: '&#9813;'},
  {rank: 'king', hex: '&#9812;'},
  {rank: 'bishop', hex: '&#9815;'},
  {rank: 'knight', hex: '&#9816;'},
  {rank: 'rook', hex: '&#9814;'}
]

const blkPawn = '&#9823;'
const blkMonarchs = [
  {rank: 'rook', hex: '&#9820;'},
  {rank: 'knight', hex: '&#9822;'},
  {rank: 'bishop', hex: '&#9821;'},
  {rank: 'queen', hex: '&#9819;'},
  {rank: 'king', hex: '&#9818;'},
  {rank: 'bishop', hex: '&#9821;'},
  {rank: 'knight', hex: '&#9822;'},
  {rank: 'rook', hex: '&#9820;'}
]

// Set state to indicate if a piece is selected
let state = false
let currentPiece
let currentCell
let save_x = 0
let save_y = 0
let x = 0
let y = 0

const board = document.getElementById('chessboard-container')
// const newBtn = document.getElementById('new-game-btn')
const newBtn = document.querySelector('.new-game-btn')
console.log(board, newBtn)
const cells = document.querySelectorAll('td')

// setting global variable for cell so that newGame function can provide ability to isolate cells with pieces
const cell = ''
// REFERENCE tbody AND SIZE IT RELATIVE TO THE viewport

// document.querySelector('.tbody').style.height = ${window.size.height * 0.1}

newBtn.addEventListener('click', newGame)


// add event listener for when user clicks on a piece to movePiece
// clickPiece()

function movePiece(e) {
  console.log('cell clicked!', e)
  getCell(e)


}

function getCell(x) {
  console.log(this) // 'this' will access the chess piece and the <td />
  if (!state) { // if the state is false - when no piece is selected
    state = true; // a piece has been selected
    currentPiece = this // get the current piece selected
    currentCell = this.cellIndex; // get the current cell
    // console.log(currentPiece)
    console.log(currentCell)
  } else {
    // else, you are moving a piece
    x.innerHTML = currentPiece // Set the selected space to the piece that was grabbed
    currentCell.innerHTML = "" // remove the piece from its old location
    state = false // piece has been set so set state back to false
  }
}

// you would only want to removeEventListener if
// you were removing the button programmatically
//
// function cleanUp() {
//   console.log('meow')
//   newBtn.removeEventListener('click', newGame)
// }

function createBoard(){
  let table = document.getElementById('tbody')
  // console.log('Its beginning!' + table)

  for (let i = 0; i < 8; i++) {
      let row = table.insertRow(i)
      let firstCell = row.insertCell(0)

      firstCell.innerHTML = i + 1

      for (let j = 1; j < 9; j++) {
        row.insertCell(j)
      }
    }
  }

  function newGame() {
    let whtChars = document.querySelector('.table-body tr:first-child')
    let whtPawns = document.querySelector('.table-body tr:nth-child(2)')

    let blkChars = document.querySelector('.table-body tr:last-child')
    let blkPawns = document.querySelector('.table-body tr:nth-child(7)')
    // pawnSqr.innerHTML = 'test'
    // console.log(whtChars)

    for (let index = 1; index < 9; index ++) {
        whtPawns.cells[index].innerHTML = whitePawn
        whtChars.cells[index].innerHTML = whiteMonarchs[index - 1].hex

        blkChars.cells[index].innerHTML = blkMonarchs[index - 1].hex
        blkPawns.cells[index].innerHTML = blkPawn

        whtPawns.cells[index].addEventListener('click', getCell)
        whtChars.cells[index].addEventListener('click', getCell)

        blkChars.cells[index].addEventListener('click', movePiece)
        blkPawns.cells[index].addEventListener('click', movePiece)

    }
  }


  // CALLBACK FUNCTION TO GET THE CELL INDEX

  // function clickPiece() {
  //   for (let i = 0; i < cells.length; i++) {
  //     // Below is a callback function. second argument to add event listener is a callback.
  //     // Returning
  //     console.log(cells[i])
  //     // cells[i].addEventListener('click', (e) => getCell(this))
  //   }
  // }

  // function Meow(meow) {
  //   meow()
  //   console.log(2)
  //   meow()
  // }
  //
  // Meow(() => {
  //   console.log('1')
  // })




  // GOT THIS OFF STACK OVERFLOW FOR REFERENCE

/*
  setUp();
//attempts with making things move
var clickedon = false;
var save_x = 0;
var save_y = 0;
var piece = 0;
var _x = 0;
var _y = 0;

//GET CELL INDEX
function indexCell(x) {

//alert("Cell index is: " + x.cellIndex);
_x = x.cellIndex;

  if(clickedon == false) {
    if(pieces[_x][_y] != " ") {
      figura = pieces[_x][_y];
      save_x = _x;
      save_y = _y;
      clickedon = true;
      alert(piece)
    }
  }
else
{
if(pieces[_x][_y] == " ")
{
    pieces[save_x][save_y] = " ";
    pieces[_x][_y] = piece;
    setUp();
    clickedon = false
}
}
}
//grabs row index
function indexRow(y){
//alert("Row index is: " + x.rowIndex);
_y = y.rowIndex;
}
*/
