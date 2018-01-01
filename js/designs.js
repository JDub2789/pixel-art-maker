// Gets value of user grid size and creates grid
const gridSubmit = document.getElementById('submitGrid');
// var oneRow = document.createElement('tr');
// var oneCell = document.createElement('td');
// let tableRowId = `tableRow${i}`;
// const gridRowNum = document.getElementbyId('tableRow" + i');
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

gridSubmit.addEventListener ('click', getGridSize)


// Gets color of user selection


// Colors the designCell
// TODO - update backgroundColor to user selection
var clickedCell = document.querySelector('.designCell');

function colorTheSquare(event) {
  theOneCell = event.target;
  theOneCell.style.backgroundColor = "blue";

}

clickedCell.addEventListener('click', colorTheSquare, true);
