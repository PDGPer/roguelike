import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { terrainObject } from './grid/01-terrain'
import { getEnemyGraphics } from './grid/05-enemies'
import { playerObject } from './grid/06-player'
import { gridMaker, Terrain } from './grid/terrainComponent'
import { whereIsPlayer, useInterval } from './utility'
import './style.css'
import { DefaultMelee, DefaultProjectile, DefaultArmor } from './grid/items'

const UI = ({playerHP, playerMaxHP, playerDamage, playerArmor, flavorText, projectileUI, meleeUI, armorUI, flavorUI, infoMessage}) => {
  return (
    <div id={'ui'}>
      <p>HP: {playerHP} of {playerMaxHP}</p>
      <p>DMG: {playerDamage}</p>
      <p>Armor: {playerArmor}</p>
      <p>Inventory:</p>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        {projectileUI}
        {meleeUI}
        {armorUI}
      </div>
      <br></br>
      <hr className={'hr'}></hr>
      <p>{flavorText}</p>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        {flavorUI}
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        {infoMessage}
      </div>
      <hr className={'hr'}></hr>

    </div>
  )
}

const App = () => {
  // Initial random grid created by the gridMaker() in the terrainComponent.js
  const [grid, setGrid] = useState(gridMaker())
  // Initial player position. Used for movement calculations later.
  const [playerPosition, setPlayerPosition] = useState(whereIsPlayer(grid))

  const [canMove, setCanMove] = useState(true)

  // Player stats
  const [playerHP, setPlayerHP] = useState(10)
  const [playerMaxHP, setPlayerMaxHP] = useState(10)
  const [playerDamage, setPlayerDamage] = useState(1)
  const [playerArmor, setPlayerArmor] = useState(0)

  // Player inventory UI
  const [projectileWeapon, setProjectileWeapon] = useState(DefaultProjectile('rgba(255, 255, 255, 0)'))
  const [meleeWeapon, setMeleeWeapon] = useState(DefaultMelee('rgba(255, 255, 255, 0)'))
  const [armor, setArmor] = useState(DefaultArmor('rgba(255, 255, 255, 0)'))

  // Enemy data on UI
  const [flavorGraphics, setFlavorGraphics] = useState(<div></div>)
  const [infoMessage, setInfoMessage] = useState(<div></div>)
  

  // Messages displayed in the UI when fighting or defeating enemies
  const [flavorText, setFlavorText] = useState('You awake, covered in rags and armed with only sticks and stones. Your old foe is here... somewhere. You will have to ready yourself before facing him.')

  // Used for the movement useEffect to trigger renders in situations
  // where the player hasn't moved (like defeating an enemy).
  const [clearTile, setClearTile] = useState(0)

  // Switch cases to recognize WASD key codes from the
  // event listener below and transmit the movement direction.
  function playerClickedMove(e) {
    if (e.repeat) {
      return
    } else {
      switch (e.code) {
        case 'KeyW': 
        playerMove(grid, 'Up', playerPosition)
        break
        case 'KeyS': 
        playerMove(grid, 'Down', playerPosition)
        break
        case 'KeyA': 
        playerMove(grid, 'Left', playerPosition)
        break
        case 'KeyD': 
        playerMove(grid, 'Right', playerPosition)
        break
        default:
      }
    }
  }

  useEffect(() => {
    // Keydown event listeners recognize when player makes a click.
    window.addEventListener("keydown", playerClickedMove)
    return () => {     
      window.removeEventListener('keydown', playerClickedMove)
    }
  // Dependencies for the useEffect are a change in the player's position
  // or an increment in a counter whose only purpose is to be used in
  // cases where the player does not move into a new tile but has caused 
  // a change in the grid (i.e. defeating an enemy).
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerPosition, clearTile])


  // Uses the current player position from state and the
  // movement direction to handle changes to the grid
  // and state caused by player moves.
  function playerMove(grid, direction, {playerRow, playerCol}) {

    // Depending on which direction the player moved, the case switch
    // alters the x and y variables to use in coordinate calculations.
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

    // Player tries to move into a terrain/decor tile,
    // the only ones with {crossable: true}.
    if(grid[playerRow + x][playerCol + y].crossable) {
      let newGrid = [...grid]
      newGrid[playerRow + x][playerCol + y] = playerObject(playerRow + x, playerCol + y, newGrid[playerRow + x][playerCol + y].rgb)
      newGrid[playerRow][playerCol] = terrainObject(playerRow, playerCol, newGrid[playerRow][playerCol].rgb)

      /*
      // A new grid is generated via a map. This process is used instead
      // of the object being replaced directly in a grid copy because doing
      // so creates a player object duplication bug.
      let newGrid = grid.map((gridRow) => gridRow.map((tile) => {
        // Current player position state and the x y coordinates are
        // used to calculate the new position of the player. This process
        // is used in all other cases.
        if(tile.row === playerRow + x && tile.col === playerCol + y) {
          // When that position is found, the terrain object is replaced 
          // by a player object that gets its new properties from the
          // object it replaced. 
          return playerObject(playerRow + x, playerCol + y, tile.rgb)
        } else if (tile.row === playerRow && tile.col === playerCol) {
          // Vice-versa.
          return terrainObject(playerRow, playerCol, tile.rgb)
        } else {
          // Otherwise, return the same tile that was there before.
          return tile
        }
      }))
      */

      // When the map is finished, the old grid is replaced.
      setGrid(newGrid)
      // And the player position is updated.
      setPlayerPosition({playerRow: playerRow + x, playerCol: playerCol + y})

    // Player moves (attacks) into a tile occupied by an enemy.
    // If that enemy's HP is equal or less than zero after the
    // attack, replaces the enemy with a terrain object.
    } else if(grid[playerRow + x][playerCol + y].type === 'enemy' && grid[playerRow + x][playerCol + y].hp - playerDamage <= 0) {
      setPlayerHP(playerHP - grid[playerRow + x][playerCol + y].dmg)
      setPlayerMaxHP(playerMaxHP + 1)
      setFlavorText(grid[playerRow + x][playerCol + y].deathFlavorText)
      setFlavorGraphics(getEnemyGraphics(grid[playerRow + x][playerCol + y].enemy))
      setInfoMessage(<p>+1 Max HP</p>)

      /*
      let newGrid = grid.map((gridRow) => gridRow.map((tile) => {
        if(tile.row === playerRow + x && tile.col === playerCol + y) {
          return terrainObject(playerRow + x, playerCol + y, tile.rgb)
        } else {
          return tile
        }
      }))
      */

      // Logic used for the replacement is similar to that used
      // in map, except it's done directly in a copy of the grid.
      let newGrid = [...grid]
      newGrid[playerRow + x][playerCol + y] = terrainObject(playerRow + x, playerCol + y, newGrid[playerRow + x][playerCol + y].rgb)
      setGrid(newGrid)
      // As the player hasn't actually switched tiles, the useEffect
      // needs to be told directly to trigger (see its dependencies
      // for more information).
      setClearTile(clearTile + 1)

    // Player has moved against an enemy but it's not the fatal blow.
    } else if(grid[playerRow + x][playerCol + y].type === 'enemy') {
      setPlayerHP(playerHP - grid[playerRow + x][playerCol + y].dmg)
      setFlavorText(grid[playerRow + x][playerCol + y].flavorText)
      setFlavorGraphics(getEnemyGraphics(grid[playerRow + x][playerCol + y].enemy))
      let newGrid = [...grid]
      // Enemy HP is updated after deducting damage caused by player.
      newGrid[playerRow + x][playerCol + y].hp = newGrid[playerRow + x][playerCol + y].hp - playerDamage
      setGrid(newGrid)
      setInfoMessage(<p>{grid[playerRow + x][playerCol + y].hp} HP left.</p>)
      setClearTile(clearTile + 1)
    }

    if(playerHP <= 0) {
      console.log('Game over')
    }
  }

  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <UI 
        playerHP={playerHP}
        playerMaxHP={playerMaxHP}
        playerDamage={playerDamage}
        playerArmor={playerArmor}
        flavorText={flavorText}
        projectileUI={projectileWeapon}
        meleeUI={meleeWeapon}
        armorUI={armor}
        flavorUI={flavorGraphics}
        infoMessage={infoMessage}
      />
      <div id={'terrain'}>
        <Terrain
          grid={grid}
        />
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))