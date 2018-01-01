// Gets value of user grid size and creates grid
const gridSubmit = document.getElementById('submitGrid');
const designGrid = document.getElementById('designCanvas');

function getGridSize() {
  const gridRows = document.getElementById("inputHeight").value;
  const gridCols = document.getElementById("inputWidth").value;

  for (let i = 1; i <= gridRows; i++) {
    aRow = document.createElement('tr');
    designGrid.appendChild(aRow);
      for (let j = 1; j <= gridCols; j++) {
        aRow.insertAdjacentHTML('beforeend', '<td></td>');
      }
} }

gridSubmit.addEventListener('click', getGridSize);

// Gets color of user selection
const colorSubmit = document.getElementById('colorPicker');

function changeColor(t) {
  let userColor = t.value;
  console.log(userColor);
}

colorSubmit.addEventListener('onchange', changeColor)

// Colors the designCell
// TODO - update backgroundColor to user selection
var clickedCell = document.querySelector('.designCell');

function colorTheSquare(event) {
  const theOneCell = event.target;
  theOneCell.style.backgroundColor = userColor;

}

clickedCell.addEventListener('click', colorTheSquare, true);



// VARIABLES FROM NON-WORKING STATUS
// var oneRow = document.createElement('tr');
// var oneCell = document.createElement('td');
// let tableRowId = `tableRow${i}`;
// const gridRowNum = document.getElementbyId('tableRow" + i');
