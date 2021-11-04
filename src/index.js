import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { terrainObject } from './grid/01-terrain'
import { playerObject } from './grid/06-player'
import { gridMaker } from './grid/terrainComponent'
import { Terrain } from './grid/terrainComponent'
import './style.css'

const UI = ({playerHP, playerMaxHP, flavorText}) => {
  return (
    <div style={{backgroundColor: 'white', width: 200, margin: '30px', height: '90vh'}}>
      <p>Player HP: {playerHP} of {playerMaxHP}</p>
      <p>{flavorText}</p>
    </div>
  )
}

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
  const [grid, setGrid] = useState(gridMaker())
  // Initial player position. Used for movement calculations later.
  const [playerPosition, setPlayerPosition] = useState(whereIsPlayer(grid))

  // Player stats
  const [playerHP, setPlayerHP] = useState(10)
  const [playerMaxHP, setPlayerMaxHP] = useState(10)
  const [playerDamage, setPlayerDamage] = useState(5)

  // Enemy messages
  const [flavorText, setFlavorText] = useState('You awake, weak and unarmed. Your old foe is here... somewhere. Grow stronger and end this.')

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

    let x = 0
    let y = 0

    switch(direction) {
      case 'Up': x = -1
      break
      case 'Down': x = 1
      break
      case 'Left': y = -1
      break
      case 'Right': y = 1
      break
      default:
    }

    console.log(grid[row + x][col + y].crossable)
    if(grid[row + x][col + y].crossable) {
      console.log('If do movimento')
      let newGrid = grid.map((gridRow) => gridRow.map((tile) => {
        if(tile.row === row + x && tile.col === col + y) {
          return playerObject(row + x, col + y, tile.rgb)
        } else if (tile.row === row && tile.col === col) {
          return terrainObject(row, col, tile.rgb)
        } else {
          return tile
        }
      }))
      setGrid(newGrid)
      return setPlayerPosition({row: row + x, col: col + y})

    } else if(grid[row + x][col + y].type === 'enemy' && grid[row + x][col + y].hp - playerDamage <= 0) {
      
      /*
      let newGrid = [...grid]
      newGrid[row + x][col + y] = terrainObject(row + x, col + y, newGrid[row + x][col + y].rgb)
      */
     
      console.log('If de substituir inimigo por terreno')
      /*newGrid.map((gridRow) => gridRow.map((tile) => {
        if(tile.row === row + x && tile.col === col + y) {
          return terrainObject(row + x, col + y, tile.rgb)
        } else {
          return tile
        }
      }))*/
      console.log(grid)
      setGrid(prevGrid => prevGrid.map((gridRow) => gridRow.map((tile) => {
        if(tile.row === (row + x) && tile.col === (col + y)) {
          console.log(row + x, col + y, tile.rgb)
          return terrainObject(row + x, col + y, tile.rgb)
        } else {
          return tile
        }
      })))
      console.log(grid)

    } else if(grid[row + x][col + y].type === 'enemy') {
      console.log('If de danificar inimigo')
      let newGrid = [...grid]
      newGrid[row + x][col + y].hp = newGrid[row + x][col + y].hp - playerDamage
      return setGrid(newGrid)
    } else {
      console.log('Batatas')
    }
  }

  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <UI 
        playerHP={playerHP}
        playerMaxHP={playerMaxHP}
        flavorText={flavorText}
      />
      <div style={{margin: '30px 0 30px 0'}}>
        <Terrain
          grid={grid}
        />
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))