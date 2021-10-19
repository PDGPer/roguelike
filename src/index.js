import React, {/*useState*/} from 'react'
import ReactDOM from 'react-dom'
import { colNum, rowNum } from './config'
import { createTerrainGrid, TerrainTile } from './grid/01-terrain'
import { gridDecorPass, DecorTile } from './grid/02-decor'
import { createObstacleAnchorGrid, expandObstaclesAroundAnchors, gridObstaclePass, ObstacleTile } from './grid/03-obstacles'
import { gridBordersPass } from './grid/04-borders'
import { gridEnemiesPass, EnemyTile } from './grid/05-enemies'
import "./style.css"

// A small utility function to keep the Terrain component tidy
// and make it easier to plug in or out a terrain generation pass.
function gridMaker() {
  return gridEnemiesPass(gridBordersPass(gridObstaclePass(gridDecorPass(createTerrainGrid(rowNum, colNum), rowNum), expandObstaclesAroundAnchors(createObstacleAnchorGrid(rowNum, colNum)))))
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
          } else if (tile.type === 'obstacle') {
            return (
              <ObstacleTile
                key={tile.row.toString() + tile.col.toString()}
                rgb={tile.rgb}
              />
            )
          } else if (tile.type === 'enemy') {
            return (
              <EnemyTile 
                key={tile.row.toString() + tile.col.toString()}
                rgb={tile.rgb}
                enemy={tile.enemy}
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