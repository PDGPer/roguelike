// Borders use the same objects and tiles as obstacles.

// Creates an obstacle object to insert into the terrain grid.
// Keeps track of its position, RGB, tile type and 
// if it is crossable by the player.
// Copy pasted from obstacles.js
function obstacleObject(row, col) {
  return {
    row,
    col,
    // RGB is a fixed value that corresponds to the
    // body background RGB (looks like lakes / rivers).
    rgb: 'rgba(0, 0, 0, 0)',
    type: 'obstacle',
    crossable: false,
  }
}

// Randomly turns some peripheral grid objects into
// obstacles, to make the terrain look more "random"
// and less like a big rectangle.
export function gridBordersPass(grid) {

  let newGrid = grid
  const lastCol = grid[0].length - 1

  // Controls for the chance of substitution to occur.
  const highChance = 0.7
  const mediumChance = 0.3
  const lowChance = 0.2

  // Left side. Iterates the rows, random chance of substitution;
  // if substituted, does the same for the next tile, and so on.
  // The others side are processed simmilarly.
  for (let row = 0; row < newGrid.length; row++) {
    // Closest to the left.
    if (Math.random() < highChance) {
      newGrid[row][0] = obstacleObject(row, 0)
      // To its right.
      if (Math.random() < mediumChance) {
        newGrid[row][1] = obstacleObject(row, 1)
        // To its right.
        if (Math.random() < lowChance) {
          newGrid[row][2] = obstacleObject(row, 2)
        }
      }
    }
  }

  // Right side.
  for (let row = 0; row < newGrid.length; row++) {
    // Closest to the right.
    if (Math.random() < highChance) {
      newGrid[row][lastCol] = obstacleObject(row, lastCol)
      // To its left.
      if (Math.random() < mediumChance) {
        newGrid[row][lastCol - 1] = obstacleObject(row, lastCol - 1)
        // To its left.
        if (Math.random() < lowChance) {
          newGrid[row][lastCol - 2] = obstacleObject(row, lastCol - 2)
        }
      }
    }
  }

  // Top side.
  for (let col = 0; col < lastCol + 1; col++) {
    // Closest to the top.
    if (Math.random() < highChance) {
      newGrid[0][col] = obstacleObject(0, col)
      // Below it.
      if (Math.random() < mediumChance) {
        newGrid[1][col] = obstacleObject(1, col)
        // Below it.
        if (Math.random() < lowChance) {
          newGrid[2][col] = obstacleObject(2, col)
        }
      }
    }
  }

  // Bottom side.
  for (let col = 0; col < lastCol + 1; col++) {
    // Closest to the bottom.
    if (Math.random() < highChance) {
      newGrid[grid.length - 1][col] = obstacleObject(grid.length - 1, col)
      // Above it.
      if (Math.random() < mediumChance) {
        newGrid[grid.length - 2][col] = obstacleObject(grid.length - 2, col)
        // Above it.
        if (Math.random() < lowChance) {
          newGrid[grid.length - 3][col] = obstacleObject(grid.length - 3, col)
        }
      }
    }
  }

  return newGrid
}