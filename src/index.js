import React, {/*useState*/} from 'react'
import ReactDOM from 'react-dom'
import {createTerrainGrid, TerrainTile} from './grid/01-terrain'
import {gridDecorPass, DecorTile} from './grid/02-decor'
import "./style.css"

// A small utility function to keep the Terrain component tidy
// and make it easier to plug in or out a terrain generation pass.
function gridMaker() {
  return gridDecorPass(
    createTerrainGrid()
  )
}

// The terrain component processes the finished grid
// into its graphical version.
const Terrain = () => {
  return (
    gridMaker().map((row, rowIndex) =>
      <div 
        key={rowIndex.toString()}
        style={{display: 'flex', flexDirection: 'row'}}
      >
        {row.map((tile) => {

          // Depending on the grid object type, the component
          // assigns different tiles to the graphical grid.
          if (tile.type === 'terrain') {
            return (
              <TerrainTile 
                key={tile.row.toString() + tile.col.toString()}
                rgb={tile.rgb}
              />
            )
          } else if (tile.type === 'decor') {
            return (
              <DecorTile
                key={tile.row.toString() + tile.col.toString()}
                rgb={tile.rgb}
              />
            )
          }
          
          
          return undefined

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