// Gets value of user grid size and creates grid
const gridSubmit = document.getElementById('submitGrid');
// var oneRow = document.createElement('tr');
// var oneCell = document.createElement('td');
const designGrid = document.getElementById('designCanvas');
const gridRowNum = document.getElementsByClassName('tableRow');

function getGridSize() {
  const gridRows = document.getElementById("inputHeight").value;
  const gridCols = document.getElementById("inputWidth").value;

  for (let i = 1; i <= gridRows; i++) {
    designGrid.insertAdjacentHTML('beforeend', '<tr>');
      for (let j = 1; j <= gridCols; j++) {
        designGrid.insertAdjacentHTML('beforeend', '<td></td>');
      }
    designGrid.insertAdjacentHTML('beforerend', '</tr>');
  }

  // TODO Need for loop for these td's
    // designGrid.insertAdjacentHTML('beforeend', '<td>');
    // designGrid.insertAdjacentHTML('beforeend', '</td>');
  // End for loop for td's

}

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
