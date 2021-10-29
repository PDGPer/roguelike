import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { terrainObject } from './grid/01-terrain'
import { playerObject } from './grid/06-player'
import { gridMaker } from './grid/terrainComponent'
import { Terrain } from './grid/terrainComponent'
import './style.css'

// Finds the player position.
// Only runs once, to be kept in state.
function whereIsPlayer(grid) {
  // Starts at the bottom row, since the player spawns on the lower end.
  for (let row = grid.length - 1; row >= 0; row--) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col].type === 'player') {
        return {row, col}
      }
    }
  }
}

const App = () => {

  // Initial random grid created by the gridMaker() in the terrainComponent.js
  const [grid, setGrid] = useState(() => gridMaker())
  // Initial player position. Used for movement calculations later.
  const [playerPosition, setPlayerPosition] = useState(() => whereIsPlayer(grid))

  useEffect(() => {

    // Switch cases to recognize WASD key codes from the
    // event listener below and transmit the movement direction.
    function playerClickedMove(e) {
      switch (e.code) {
        case 'KeyW': playerMove(grid, 'Up', playerPosition)
        break
        case 'KeyS': playerMove(grid, 'Down', playerPosition)
        break
        case 'KeyA': playerMove(grid, 'Left', playerPosition)
        break
        case 'KeyD': playerMove(grid, 'Right', playerPosition)
        break
        default:
      }
    }

    // Keydown event listeners recognize when player make a click.
    document.addEventListener('keydown', playerClickedMove)
    return () => {     
      document.removeEventListener('keydown', playerClickedMove)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[playerPosition])

  // Uses the current player position from state and the
  // movement direction to calculate the tile the player
  // moved into and turn it into a player object. The
  // abandoned tile is turned into a terrain object.
  function playerMove(grid, direction, {row, col}) {

    if(direction === 'Up') {
      // Only happens if the object is crossable (i.e. terrain, decor).
      if(grid[row - 1][col].crossable) {

        let newGrid = grid.map((gridRow) => gridRow.map((tile) => {
          if(tile.row === row - 1 && tile.col === col) {
            return playerObject(row - 1, col, tile.rgb)
          } else if (tile.row === row && tile.col === col) {
            return terrainObject(row, col, tile.rgb)
          } else {
            return tile
          }
        }))

        // Modified grid is sent into state.
        setGrid(newGrid)
        // Player position in state is updated.
        setPlayerPosition({row: row - 1, col})
      }
    }
  
    if(direction === 'Down') {
      if(grid[row + 1][col].crossable) {
        let newGrid = grid.map((gridRow) => gridRow.map((tile) => {
          if(tile.row === row + 1 && tile.col === col) {
            return playerObject(row + 1, col, tile.rgb)
          } else if (tile.row === row && tile.col === col) {
            return terrainObject(row, col, tile.rgb)
          } else {
            return tile
          }
        }))

        setGrid(newGrid)
        setPlayerPosition({row: row + 1, col})
      }
    }
  
    if(direction === 'Left') {
      if(grid[row][col - 1].crossable) {
        let newGrid = grid.map((gridRow) => gridRow.map((tile) => {
          if(tile.row === row && tile.col === col - 1) {
            return playerObject(row, col - 1, tile.rgb)
          } else if (tile.row === row && tile.col === col) {
            return terrainObject(row, col, tile.rgb)
          } else {
            return tile
          }
        }))

        setGrid(newGrid)
        setPlayerPosition({row, col: col - 1})
      }
    }
  
    if(direction === 'Right') {
      if(grid[row][col + 1].crossable) {
        let newGrid = grid.map((gridRow) => gridRow.map((tile) => {
          if(tile.row === row && tile.col === col + 1) {
            return playerObject(row, col + 1, tile.rgb)
          } else if (tile.row === row && tile.col === col) {
            return terrainObject(row, col, tile.rgb)
          } else {
            return tile
          }
        }))

        setGrid(newGrid)
        setPlayerPosition({row, col: col + 1})
      }
    }
  }

  return (
    <div>
      <Terrain
        grid={grid}
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))