// Select color input
const COLORINPUT = document.querySelector('#colorPicker');
// Select table
const TABLE = document.querySelector('#pixelCanvas');
// Select size input
const HEIGHT = document.querySelector('#inputHeight');
const WIDTH = document.querySelector('#inputWidth');
// Select submit button
const SUBMIT = document.querySelector('#submitButton');
// When size is submitted by the user, call makeGrid()
function makeGrid() {
    for(let i=0; i < HEIGHT.value; i++){
      let row = document.createElement('tr');  
      TABLE.appendChild(row);
      for(let i=0; i<WIDTH.value; i++){
        let cell = document.createElement('td');
        cell.addEventListener("click", handleCellClick)
        row.appendChild(cell);    
      }
    }
}
//Clears the Grid
function clearGrid(){
    TABLE.innerHTML = "";
}
//Prevents default of submit button refreshing page
function handleSubmitClick(evt){
    evt.preventDefault()
    clearGrid()
    makeGrid()
}
// function
function handleCellClick(evt){
  evt.target.style.background = COLORINPUT.value;
}
//Adds listener on submit to make grid when clicked
SUBMIT.addEventListener("click", handleSubmitClick)




