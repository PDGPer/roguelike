// Creates a random RGB value for the terrain tiles.
// Mostly reddish-brown.
function randomTerrainRGB() {
  let rgb = [
    Math.floor(Math.random() * 20) + 200,
    Math.floor(Math.random() * 20) + 130,
    Math.floor(Math.random() * 20) + 70
  ]
  return 'rgb('+rgb.join(', ')+')'
}

// Creates a terrain object to insert into the terrain grid.
// Keeps track of its position, RGB, tile type and 
// if it is crossable by the player.
function terrainObject(row, col) {
  return {
    row,
    col,
    rgb: randomTerrainRGB(),
    type: 'terrain',
    crossable: false,
  }
}

// Creates the terrain array grid; the first pass of the terrain.
export function createTerrainGrid() {
  let array = []
  const grid = []
  
  for (let row = 0; row < 30; row++) {
    array = []
    for (let col = 0; col < 11; col++) {
      array.push(terrainObject(row, col))
    }
    grid.push(array)
  }
  return grid
}

// The base terrain graphical tile component. Its color is passed
// as props from the corresponding grid object.
export const TerrainTile = ({rgb}) => {
  return (
    <div
      style={{width: 30, height: 30, backgroundColor: rgb}}
    ></div>
  )
}