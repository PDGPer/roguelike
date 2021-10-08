import React, {/*useState*/} from 'react'
import ReactDOM from 'react-dom'
import "./style.css"

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
// Keeps track of its position, RGB and tile type.
function terrainObject(row, col) {
  return {
    row,
    col,
    rgb: randomTerrainRGB(),
    type: 'terrain'
  }
}

// Creates the terrain array grid; the first pass of the terrain.
function createTerrainGrid() {
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

// The base terrain tile component. Its color is passed
// as props from the corresponding grid object.
const TerrainTile = ({rgb}) => {
  return (
    <div
      style={{width: 30, height: 30, backgroundColor: rgb}}
    ></div>
  )
}

// The terrain component processes the finished grid
// into its graphical version.
const Terrain = () => {
  return (
    createTerrainGrid().map((row, rowIndex) =>
      <div 
        key={rowIndex.toString()}
        style={{display: 'flex', flexDirection: 'row'}}
      >
        {row.map((tile) => {

          // Depending on the grid object type, the component
          // creates assigns different tiles to the graphical grid.
          if (tile.type === 'terrain') {
            return (
              <TerrainTile 
                key={tile.row.toString() + tile.col.toString()}
                rgb={tile.rgb}
              />
            )
          } return undefined

        })}
      </div>
    )
  )
}

const App = () => {

  return (
    <div>
      <Terrain />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))