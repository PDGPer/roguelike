// Creates a random RGB value for the decor tiles.
// Greener version of original terrain tiles.
function randomDecorRGB() {
  let rgb = [
    Math.floor(Math.random() * 20) + 200,
    Math.floor(Math.random() * 20) + 175,
    Math.floor(Math.random() * 20) + 80
  ]
  return 'rgb('+rgb.join(', ')+')'
}

// Creates a decor object to insert into the terrain grid.
// Keeps track of its position, RGB, tile type and 
// if it is crossable by the player.
function decorObject(row, col, rgb) {
  return {
    row,
    col,
    rgb,
    type: 'decor',
    crossable: true,
    enemy: 'decor'
  }
}

// Takes the original terrain grid and sprinkles in
// some decor tiles. The lower down on the grid,
// the higher the chance of greenery.
export function gridDecorPass(grid, rowNum) {
  return grid.map((row, rowIndex) => 
    row.map((tile, colIndex) => {
      // Chance for spawn on top third: 10%.
      if(rowIndex < Math.round(rowNum / 3) && Math.random() < 0.1) {
        return decorObject(rowIndex, colIndex, randomDecorRGB())
      // Chance for spawn on middle third: 40%.
      } else if (rowIndex < Math.round(rowNum / 3) * 2 + 1 && rowIndex > Math.round(rowNum / 3) - 1 && Math.random() < 0.4) {
        return decorObject(rowIndex, colIndex, randomDecorRGB())
      // Chance for spawn on lower third: 70%.
      } else if (rowIndex < rowNum + 1 && rowIndex > Math.round(rowNum / 3) * 2 && Math.random() < 0.7) {
        return decorObject(rowIndex, colIndex, randomDecorRGB())
      } else {
        return tile
      }
    })
  )
}

// The decor graphical tile component. Its color is passed
// as props from the corresponding grid object.
export const DecorTile = ({rgb}) => {
  return (
    <div
      style={{width: 30, height: 30, backgroundColor: rgb}}
    ></div>
  )
}