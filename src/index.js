import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { terrainObject } from './grid/01-terrain'
import { getEnemyGraphics } from './grid/05-enemies'
import { playerObject, damageMinusArmor } from './grid/06-player'
import { gridMaker, Terrain } from './grid/terrainComponent'
import { whereIsPlayer } from './utility'
import { DefaultMelee, DefaultProjectile, DefaultArmor, SkeletonProjectile, SkeletonMelee, SkeletonArmor, CrabmanProjectile, CrabmanMelee, CrabmanArmor, PirateProjectile, PirateMelee, PirateArmor, RumBottle, itemDrop } from './grid/items'
import './style.css'

// UI component.
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

// Initial player stats. Modified by program.
let playerHP = 10
let playerMaxHP = 10
let playerProjectileDamage = 0
let playerMeleeDamage = 0
let playerDamage = 1
let playerArmor = 0

// Initial player inventory. Modified by program.
let projectileTechLvl = 0
let meleeTechLvl = 0
let armorTechLvl = 0

// Initial UI inventory graphics. Modified by program.
let projectileWeapon = DefaultProjectile('rgba(255, 255, 255, 0)')
let meleeWeapon = DefaultMelee('rgba(255, 255, 255, 0)')
let armor = DefaultArmor('rgba(255, 255, 255, 0)')

// Initial UI status and flavor text. Modified by program.
let flavorGraphics = <div></div>
let infoMessage = <div></div>
let flavorText = 'You awake, covered in rags and armed with only sticks and stones. Your old foe is here... somewhere. You will have to ready yourself before facing him.'

// Updates the player stats and UI on item pickup. Extremely impure.
function onItemPickup(item, pickupTechLevel, newFlavorText) {
  // If item on the grid is a skeleton level item.
  if (pickupTechLevel === 1) {
    // Matches not only item type but also checks tech level (so player can't downgrade).
    if (item === 'projectile' && projectileTechLvl < 1) {
      // Update projectile stats to match picked up item.
      projectileTechLvl = 1
      // UI inventory representation.
      projectileWeapon = SkeletonProjectile('rgba(0, 0, 0, 0)')
      // Graphics to go with the flavor text.
      flavorGraphics = SkeletonProjectile('rgba(0, 0, 0, 0)')
      // Updates current flavor text.
      flavorText = newFlavorText
      // Updates current info message.
      infoMessage = <p>Damage increased.</p>
      // Updates current projectile damage.
      playerProjectileDamage = 1
      // Updates player damage by adding both damage types plus the base damage.
      playerDamage = playerProjectileDamage + playerMeleeDamage + 1
      // Everything else below is a variation of this.

    } else if (item === 'melee' && meleeTechLvl < 1) {
      meleeTechLvl = 1
      meleeWeapon = SkeletonMelee('rgba(0, 0, 0, 0)')
      flavorGraphics = SkeletonMelee('rgba(0, 0, 0, 0)')
      flavorText = newFlavorText
      infoMessage = <p>Damage increased.</p>
      playerMeleeDamage = 1
      playerDamage = playerProjectileDamage + playerMeleeDamage + 1
    } else if (item === 'armor' && armorTechLvl < 1) {
      armorTechLvl = 1
      armor = SkeletonArmor('rgba(0, 0, 0, 0)')
      flavorGraphics = SkeletonArmor('rgba(0, 0, 0, 0)')
      flavorText = newFlavorText
      infoMessage = <p>Armor increased.</p>
      playerArmor = 1
    }

  // If item on the grid is a crabman level item.
  } else if (pickupTechLevel === 2) {
    if (item === 'projectile' && projectileTechLvl < 2) {
      projectileTechLvl = 2
      projectileWeapon = CrabmanProjectile('rgba(0, 0, 0, 0)')
      flavorGraphics = CrabmanProjectile('rgba(0, 0, 0, 0)')
      flavorText = newFlavorText
      infoMessage = <p>Damage increased.</p>
      playerProjectileDamage = 2
      playerDamage = playerProjectileDamage + playerMeleeDamage + 1
    } else if (item === 'melee' && meleeTechLvl < 2) {
      meleeTechLvl = 2
      meleeWeapon = CrabmanMelee('rgba(0, 0, 0, 0)')
      flavorGraphics = CrabmanMelee('rgba(0, 0, 0, 0)')
      flavorText = newFlavorText
      infoMessage = <p>Damage increased.</p>
      playerMeleeDamage = 2
      playerDamage = playerProjectileDamage + playerMeleeDamage + 1
    } else if (item === 'armor' && armorTechLvl < 2) {
      armorTechLvl = 2
      armor = CrabmanArmor('rgba(0, 0, 0, 0)')
      flavorGraphics = CrabmanArmor('rgba(0, 0, 0, 0)')
      flavorText = newFlavorText
      infoMessage = <p>Armor increased.</p>
      playerArmor = 2
    }

  // If item on the grid is a pirate level item.
  } else if (pickupTechLevel === 3) {
    if (item === 'projectile' && projectileTechLvl < 3) {
      projectileTechLvl = 3
      projectileWeapon = PirateProjectile('rgba(0, 0, 0, 0)')
      flavorGraphics = PirateProjectile('rgba(0, 0, 0, 0)')
      flavorText = newFlavorText
      infoMessage = <p>Damage increased.</p>
      playerProjectileDamage = 3
      playerDamage = playerProjectileDamage + playerMeleeDamage + 1
    } else if (item === 'melee' && meleeTechLvl < 3) {
      meleeTechLvl = 3
      meleeWeapon = PirateMelee('rgba(0, 0, 0, 0)')
      flavorGraphics = PirateMelee('rgba(0, 0, 0, 0)')
      flavorText = newFlavorText
      infoMessage = <p>Damage increased.</p>
      playerMeleeDamage = 3
      playerDamage = playerProjectileDamage + playerMeleeDamage + 1
    } else if (item === 'armor' && armorTechLvl < 3) {
      armorTechLvl = 3
      armor = PirateArmor('rgba(0, 0, 0, 0)')
      flavorGraphics = PirateArmor('rgba(0, 0, 0, 0)')
      flavorText = newFlavorText
      infoMessage = <p>Armor increased.</p>
      playerArmor = 3
    }
  // If item on the grid is a rum bottle.
  } else if (pickupTechLevel === 99) {
    // Rum heals all health. New HP becomes the max health.
    playerHP = playerMaxHP
    flavorGraphics = RumBottle('rgba(0, 0, 0, 0)')
    flavorText = newFlavorText
    infoMessage = <p>Health restored.</p>
  }
}

const App = () => {

  // Initial random grid created by the gridMaker() in the terrainComponent.js
  const [grid, setGrid] = useState(gridMaker())

  // Initial player position. Used for movement calculations later.
  const [playerPosition, setPlayerPosition] = useState(whereIsPlayer(grid))

  // Used to trigger renders in useEffect.
  const [clearTile, setClearTile] = useState(0)

  // Handles key presses to pass along direction data.
  function playerPressedKey(e) {
    // Ignores repeated events caused by pressing a key down continuously.
    if (e.repeat) {
      return
    } else {
      // Recognizes WASD movement and sends it to the movement handler.
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
    // Keydown events to track player key presses.
    window.addEventListener("keydown", playerPressedKey)
    // Tracks the player's movements on the graphical map and scrolls there.
    document.getElementById('player').scrollIntoView({behavior: "smooth"})
    return () => {     
      window.removeEventListener('keydown', playerPressedKey)
    }
  // Dependencies use changes in the player's position or an increment in a counter 
  // used solely for trigering new renders, as the player doesn't always move after an action.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerPosition, clearTile])

  // Takes player direction and the grid and player position 
  // from state and calculates a new grid and player position.
  function playerMove(grid, direction, {playerRow, playerCol}) {
    // Coordinates for movement calculations.
    let x = 0
    let y = 0
    // Altered according to direction. x and y coordinate modifiers are 
    // added to the player position to figure out where they want to go.
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

    // Ignores movement when player tries to move out of the grid.
    if (playerRow + x >= grid.length || playerRow + x < 0 || playerCol + y >= grid[0].length || playerCol + y < 0) {
      return

    // Player moves into a crossable tile (terrain, decor or item).
    } else if(grid[playerRow + x][playerCol + y].crossable) {
      // Using map because it seems to reduce chances of a player object duplication bug.
      let newGrid = grid.map((gridRow) => gridRow.map((tile) => {
        // New player position is reached.
        if(tile.row === playerRow + x && tile.col === playerCol + y) {
          if(tile.type === 'item') {
            onItemPickup(tile.item, tile.techLevel, tile.flavorText)
          }
          // Creates a new player object there that gets its properties from the object it replaces.
          return playerObject(playerRow + x, playerCol + y, tile.rgb)
        // Old player position is reached.
        } else if (tile.row === playerRow && tile.col === playerCol) {
          // Creates a new terrain object there that gets its properties from the object it replaces.
          return terrainObject(playerRow, playerCol, tile.rgb)
        } else {
          // By default, return the same tile that was there before.
          return tile
        }
      }))
      // When the map is finished, the old grid is replaced.
      setGrid(newGrid)
      // And the player position is updated.
      setPlayerPosition({playerRow: playerRow + x, playerCol: playerCol + y})
      return

    // Player moves against an enemy. The attack is fatal to the enemy (HP <= 0)
    } else if(grid[playerRow + x][playerCol + y].type === 'enemy' && grid[playerRow + x][playerCol + y].hp - playerDamage <= 0) {
      // Keeps track of damage done to player for the UI info message and player HP reduction.
      let damageDone = damageMinusArmor(grid[playerRow + x][playerCol + y].dmg, playerArmor)
      // Player health is updated.
      playerHP = playerHP - damageDone
      // Player max HP increases.
      playerMaxHP = playerMaxHP + 1
      // UI flavor text is updated from the enemy's death flavor text.
      flavorText = grid[playerRow + x][playerCol + y].deathFlavorText
      // UI flavor graphics are updated to show enemy killed.
      flavorGraphics = getEnemyGraphics(grid[playerRow + x][playerCol + y].enemy)
      // UI info message is updated to show player max HP gain.
      infoMessage = <p>Enemy causes {damageDone} HP damage with its final blow. Player gains +1 max HP.</p>
      let newGrid = grid.map((gridRow) => gridRow.map((tile) => {
        if(tile.row === playerRow + x && tile.col === playerCol + y) {
          // 60% chance for an item drop, unless its the captain.
          if (tile.enemy !== 'captain' && Math.random() < 0.6) {
            // Enemy object is replaced by an item.
            return itemDrop(tile.row, tile.col, tile.rgb, tile.enemy, projectileTechLvl, meleeTechLvl, armorTechLvl)
          } else {
            // Enemy object is replaced by terrain.
            return terrainObject(playerRow + x, playerCol + y, tile.rgb)
          }
        } else {
          return tile
        }
      }))
      setGrid(newGrid)
      // As the player hasn't actually switched tiles, the useEffect
      // needs to be told to trigger directly (see its dependencies
      // for more information).
      setClearTile(clearTile + 1)
      return

    // Player has moved against an enemy but it's not the fatal blow.
    } else if(grid[playerRow + x][playerCol + y].type === 'enemy') {
      let damageDone = damageMinusArmor(grid[playerRow + x][playerCol + y].dmg, playerArmor)
      playerHP = playerHP - damageDone
      // UI flavor text is updated to show regular combat text.
      flavorText = grid[playerRow + x][playerCol + y].flavorText
      flavorGraphics = getEnemyGraphics(grid[playerRow + x][playerCol + y].enemy)
      let newGrid = grid.map((gridRow) => gridRow.map((tile) => {
        if (tile.row === playerRow + x && tile.col === playerCol + y) {
          // Enemy grid object is replaced by a copy with updated HP values.
          tile.hp = tile.hp - playerDamage
          return tile
        } else {
          return tile
        }
      }))
      setGrid(newGrid)
      // UI info message is updated to show enemy HP left and much damage was causad to player.
      infoMessage =<div><p>Enemy has {grid[playerRow + x][playerCol + y].hp} HP left and does {damageDone} HP damage to you.</p></div>
      
      setClearTile(clearTile + 1)
      return
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