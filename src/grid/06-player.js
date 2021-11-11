//import { useRef } from "react"

// Grid object representing the player position, stats and inventory.
export function playerObject(row, col, rgb) {
  return {
    row,
    col,
    rgb,
    type: 'player',
  }
}

// Graphics for the player character.
export const Player = ({rgb}) => {

  const charRGB = 'yellow'

  return (
    // Player has an id, so he can be tracked by scroll.
    <div id='player' style={{width: 30, height: 30, backgroundColor: rgb}}>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '50%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '30%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '70%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: charRGB}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '70%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '60%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: charRGB}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '30%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '30%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '40%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '40%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '70%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '30%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '50%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '30%', height: '100%'}}></div>
      </div>
    </div>
  )
}

// Grid pass to replace the first enemy found with the player.
export function gridPlayerPass(grid) {

  let newGrid = grid
  let playerPlaced = false

  for (let row = grid.length - 1; row >= 0; row--) {
    for (let col = 0; col < grid[0].length; col++) {
      if (playerPlaced === false && grid[row][col].type === 'enemy') {
        newGrid[row][col] = playerObject(row, col, newGrid[row][col].rgb)
        playerPlaced = true
      }
    }
  }

   return newGrid
}

// Calculate armor damage absorption.
export function damageMinusArmor(damage, armor) {
  if (damage - armor > 0) {
    return damage - armor
  } else {
    return 0
  }
}