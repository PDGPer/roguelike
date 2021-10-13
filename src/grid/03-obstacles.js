// Creates a random RGB value for the obstacle tiles.
// Darker version of original terrain tiles.
function randomObstacleRGB() {
  let rgb = [
    Math.floor(Math.random() * 20) + 138,
    Math.floor(Math.random() * 20) + 58,
    Math.floor(Math.random() * 20) + 0
  ]
  return 'rgb('+rgb.join(', ')+')'
}

// Creates an obstacle object to insert into the terrain grid.
// Keeps track of its position, RGB, tile type and 
// if it is crossable by the player.
function obstacleObject(row, col) {
  return {
    row,
    col,
    rgb: randomObstacleRGB(),
    type: 'obstacle',
    crossable: false,
  }
}

// Creates the first pass of the obstacle grid.
// Basically a grid of the same size as the original but there 
// is a small chance for each tile to become an obstacle.
export function createObstacleAnchorGrid(rowNum, colNum) {
  let array = []
  const grid = []
  
  for (let row = 0; row < rowNum; row++) {
    array = []
    for (let col = 0; col < colNum; col++) {
      // Chance is defined here. Currently 5%.
      if (Math.random() < 0.05) {
        array.push(true)
      } else {
        array.push(false)
      }
    }
    grid.push(array)
  }

  return grid
}

// Takes the initial obstacle grid and, based on probability,
// turns the tiles above, below, to the left or right of
// each obstacle into another obstacle.
export function expandObstaclesAroundAnchors(grid) {

  let modGrid = grid

  // Added or subtracted from the given indexes
  // to obtain the neighbors' positions.
  // Does not check diagonals to minimize chances
  // of blocked off tiles.
  const neighborCoords = [
    [0, -1], // Left
    [0, 1],  // Right
    [-1, 0], // Top
    [1, 0],  // Bottom
  ]

  for (let row = 0; row < modGrid.length; row++) {
    for (let col = 0; col < modGrid[0].length; col++) {
      if (modGrid[row][col]) {
        neighborCoords.forEach(([rowMod, colMod]) => {

          let neighborCol = col - colMod
          let neighborRow = row - rowMod

          if (
            // Some conditionals to ignore 
            // tiles "outside" the grid.
            modGrid[row][col] &&
            neighborCol >= 0 &&
            neighborCol <= modGrid[0].length - 1 &&
            neighborRow >= 0 &&
            neighborRow <= modGrid.length - 1
          ) { 
            // Current chance to turn neighbors into obstacles: 30%.
            if (Math.random() < 0.3) {
              modGrid[neighborRow][neighborCol] = true
            }
          }
        })
      }
    }
  }

  return modGrid
}

// Final step in adding obstacles. Maps an obstacle object
// for each obstacle in the obstacle grid; otherwise keeps
// the original tile present in the current terrain grid.
export function gridObstaclePass(grid, obstacleGrid) {
  return obstacleGrid.map((row, rowIndex) => 
    row.map((tile, colIndex) => {
      if (tile) {
        return obstacleObject(rowIndex, colIndex)
      } else {
        return grid[rowIndex][colIndex]
      }
    })
  )
}

// The obstacle graphical tile component. Its color is passed
// as props from the corresponding grid object.
export const ObstacleTile = ({rgb}) => {
  return (
    <div
      style={{width: 30, height: 30, backgroundColor: rgb}}
    ></div>
  )
}