// The fog of war isn't actually part of the terrain grid, as it hovers above it.
// However, it needs a finished terrain grid in order to be built.

// Provides the random 'whiteish' color for the fog.
function fogRGB() {
  return Math.floor(Math.random() * 30) + 225
}

// The fog object to insert into the fog grid.
// It carries all the info necessary to assemble
// an rgba(...) CSS property.
function fogObject(row, col, red, green, blue, opacity) {
  return {
    row,
    col,
    red,
    green,
    blue,
    opacity,
    rgb: '',
  }
}

// Assembles the values in the fog object into an rgba(...) CSS property.
function getFogObjectRGBA({red, green, blue, opacity}) {
  return `rgba(${red}, ${green}, ${blue}, ${opacity / 10})`
}

// Clears the fog around the player as it moves.
export function clearFog(fogGrid, playerRow, playerCol) {
  
  // Creates new fog grid to alter directly.
  let newFogGrid = fogGrid

  // Values to be subtracted from the rgba(...) opacity, from most distant tiles to closest.
  // All integers, later converted to decimal, to avoid JS rounding mistakes.
  const opacitySubtractions = [
    -2, -4, -6, -10
  ]

  // Sets of tile coordinates around the player that have their opacity changed on move.
  // From most distant to closest.
  const surroundingTilesCoordinates = [
    [
      [1, 3],
      [2, 2],
      [3, 1],
      [3, -1],
      [2, -2],
      [1, -3],
      [-1, -3],
      [-2, -2],
      [-3, 1],
      [-2, 2],
      [-1, 3],
    ],
    [
      [0, 3],
      [1, 2],
      [2, 1],
      [3, 0],
      [2, -1],
      [1, -2],
      [0, -3],
      [-1, -2],
      [-2, -1],
      [-3, 0],
      [-2, 1],
      [-1 ,2],
    ],
    [
      [0, 2],
      [1, 1],
      [2, 0],
      [1, -1],
      [0, -2],
      [-1, -1],
      [-2, 0],
      [-1, 2]
    ],
    [
      [0, 0],
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0]
    ]
  ]

  function reduceOpacity(playerRow, playerCol, subtractedOpacity, coordinates) {

    // Coordinates to add or subtract to player position.
    let x = coordinates[0]
    let y = coordinates[1]

    // If resulting value is outside the grid, skip it.
    if (playerRow + x >= fogGrid.length || playerRow + x < 0 || playerCol + y >= fogGrid[0].length || playerCol + y < 0) {
      return

    // If the resulting value is equal or greater than 0...
    } else if (newFogGrid[playerRow + x][playerCol + y].opacity + subtractedOpacity >= 0) {
      // ... proceed with replacing the object opacity value...
      newFogGrid[playerRow + x][playerCol + y].opacity = newFogGrid[playerRow + x][playerCol + y].opacity + subtractedOpacity
      // ... and generate and replace a new object rgba(...) value based on it.
      newFogGrid[playerRow + x][playerCol + y].rgba = getFogObjectRGBA(newFogGrid[playerRow + x][playerCol + y])
    } else {
      // Otherwise (if the subtraction is less than 0), set object opacity to 0.
      newFogGrid[playerRow + x][playerCol + y].opacity = 0
      newFogGrid[playerRow + x][playerCol + y].rgba = getFogObjectRGBA(newFogGrid[playerRow + x][playerCol + y])
    }
  }

  // For loop is used to match the opacity subtractions with their corresponding tile coordinates.
  for (let i = 0; i < opacitySubtractions.length; i++) {
    surroundingTilesCoordinates[i].forEach((coordinates) => {
    reduceOpacity(playerRow, playerCol, opacitySubtractions[i], coordinates)
    })
  }

  return newFogGrid
}

// Takes the terrain grid and creates an overlapping fog grid.
export function fogGridMaker(grid) {

  // Player coordinates will be needed later.
  let playerRow = 0
  let playerCol = 0

  let fogGrid = grid.map((row, rowIndex) => 
    row.map((tile, colIndex) => {
      // If the object is an obstacle (rivers, etc.).
      if (tile.type === 'obstacle') {
        // And if it's located at least 2 tiles the edge of the map.
        if (
          rowIndex === 0 || 
          rowIndex === 1 || 
          rowIndex === grid.length - 1 || 
          rowIndex === grid.length - 2 ||
          colIndex <= 1 ||
          colIndex >= grid[0].length - 2
        ) {
          // It becomes transparent.
          return fogObject(rowIndex, colIndex, fogRGB(), fogRGB(), fogRGB(), 0)
        }
      // If it is the player object...
      } if (tile.type === 'player') {
        // Saves its coordinates for later clearing the fog around it.
        playerRow = tile.row
        playerCol = tile.col
      }
      
      // Otherwise, returns opaque fog.
      return fogObject(rowIndex, colIndex, fogRGB(), fogRGB(), fogRGB(), 10)
    })
  )

  // Returns the fog grid with the fog cleared around the player.
  return clearFog(fogGrid, playerRow, playerCol)
}

// The graphical component of the fog.
const FogTile = ({rgb}) => {
  return (
    <div
      style={{width: 30, height: 30, backgroundColor: rgb}}
    ></div>
  )
}

// Assembles the fog grid into its graphical version.
export const Fog = ({fogGrid}) => {
  return (
    fogGrid.map((row, rowIndex) =>
      <div 
        key={rowIndex.toString()}
        style={{display: 'flex', flexDirection: 'row'}}
      >
        {row.map((tile) => {
          return (
            <FogTile 
              key={tile.row.toString() + tile.col.toString()}
              // The rgba(...) is created by the rgba(...) assembler.
              rgb={getFogObjectRGBA(tile)}
            />
          )
        })}
      </div>
    )
  )
}