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
function decorObject(row, col) {
  return {
    row,
    col,
    rgb: randomDecorRGB(),
    type: 'decor',
    crossable: false,
  }
}

// Takes the original terrain grid and sprinkles in
// some decor tiles. The lower down on the grid,
// the higher the chance of greenery.
export function gridDecorPass(grid) {
  return grid.map((row, rowIndex) => 
    row.map((tile, tileIndex) => {
      if(rowIndex < 11 && Math.random() < 0.1) {
        return decorObject(rowIndex, tileIndex)
      } else if (rowIndex < 21 && rowIndex > 10 && Math.random() < 0.4) {
        return decorObject(rowIndex, tileIndex)
      } else if (rowIndex < 31 && rowIndex > 20 && Math.random() < 0.7) {
        return decorObject(rowIndex, tileIndex)
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