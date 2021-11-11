import { skeletonHP, crabmanHP, pirateHP, captainHP, skeletonDmg, crabmanDmg, pirateDmg, captainDmg } from '../config'

// Grid objects representing the enemies.
function skeletonObject(row, col, rgb, hp, dmg) {
  return {
    row,
    col,
    // RGB value is used for the background color.
    // Passed as props from the original terrain/decor object.
    rgb,
    hp,
    dmg,
    type: 'enemy',
    // Enemy key is used to assign graphical components later.
    enemy: 'skeleton',
    flavorText: 'One of the lost souls cursed to wander in thrall of your foe, feeding on the pain he spreads.',
    deathFlavorText: 'With a pained shudder, the cursed thing is transported to a different hell. The morsel of life it clinged to latches onto you. You feel stronger, but also colder.',
    crossable: false,
  }
}

function crabmanObject(row, col, rgb, hp, dmg) {
  return {
    row,
    col,
    rgb,
    hp,
    dmg,
    type: 'enemy',
    enemy: 'crabman',
    flavorText: 'An abomination from the depths, your foe employs them cheaply. Some... meat... is all they ask for in payment.',
    deathFlavorText: "As the things' innards burst from its broken shell you are assaulted by the stench. Never breathing through your nose, you make a stew of the creature and grow stronger with each disgusting spoonful.",
    crossable: false,
  }
}

function pirateObject(row, col, rgb, hp, dmg) {
  return {
    row,
    col,
    rgb,
    hp,
    dmg,
    type: 'enemy',
    enemy: 'pirate',
    flavorText: 'Even if technically human, you know no other thing on this island is able to match their monstruosity.',
    deathFlavorText: 'The pirate dies with a hateful glare, raging that all his future barbarous actions have been stolen from him. You loot his lucky trinkets, hoping they bring good luck.',
    crossable: false,
  }
}

function captainObject(row, col, rgb, hp, dmg) {
  return {
    row,
    col,
    rgb,
    hp,
    dmg,
    type: 'enemy',
    enemy: 'captain',
    flavorText: 'After all this time. Here he is. End him.',
    deathFlavorText: 'The burden is lifted. You are free now.',
    crossable: false,
  }
}

// Grid is mapped to add enemies, 
// with different rules for each third.
export function gridEnemiesPass(grid) {

  let newGrid = grid.map((row, rowIndex) => 
    row.map((tile, colIndex) => {
      // Only terrain and decor tiles can be replaced by enemies.
      if (tile.type === 'terrain' || tile.type === 'decor') {
        // Selects the lower third of the grid, which will be the easy zone.
        if (rowIndex > Math.round((grid.length - 1) / 3 * 2)) {
          // Higher chance of spawning a weak enemy.
          if (Math.random() < 0.03) {
            return skeletonObject(rowIndex, colIndex, tile.rgb, skeletonHP, skeletonDmg)
          // Lower chance of spawning an average enemy.
          } else if (Math.random() < 0.01) {
            return crabmanObject(rowIndex, colIndex, tile.rgb, crabmanHP, crabmanDmg)
          }
        }
        // Selects the middle third of the grid, which will be the middle difficulty zone.
        if (rowIndex > Math.round((grid.length - 1) / 3 - 1) && rowIndex < Math.round((grid.length - 1) / 3 * 2 + 1)) {
          // Higher chance of spawning an average enemy.
          if (Math.random() < 0.03) {
            return crabmanObject(rowIndex, colIndex, tile.rgb, crabmanHP, crabmanDmg)
          // Lower chance of spawning a weak enemy.
          } else if (Math.random() < 0.01) {
            return skeletonObject(rowIndex, colIndex, tile.rgb, skeletonHP, skeletonDmg)
          // Lower chance of spawning a strong enemy.
          } else if (Math.random() < 0.01) {
            return pirateObject(rowIndex, colIndex, tile.rgb, pirateHP, pirateDmg)
          }
        }
        // Selects the top third of the grid, which will be the hard zone.
        if (rowIndex < Math.round((grid.length - 1) / 3)) {
          // Higher chance of spawning a strong enemy.
          if (Math.random() < 0.03) {
            return pirateObject(rowIndex, colIndex, tile.rgb, pirateHP, pirateDmg)
          // Lower chance of spawning an average enemy.
          } else if (Math.random() < 0.01) {
            return crabmanObject(rowIndex, colIndex, tile.rgb, crabmanHP, crabmanDmg)
          }
        }
      }

      return tile

    })
  )

  // Keeps track if the boss has been placed yet.
  let captainPlaced = false

  // Grid with enemies is mapped again to add the boss.
  return newGrid.map((row, rowIndex) => 
    row.map((tile, colIndex) => {
      // The first tile found with an enemy gets replaced by the boss.
      // Variable is flipped to keep track of this, so it doesn't happen again.
      if (tile.type === 'enemy' && captainPlaced === false) {
        captainPlaced = true
        return captainObject(rowIndex, colIndex, tile.rgb, captainHP, captainDmg)
      } else {
        return tile
      }
    })
  )

}

// All enemies are a 10x10 CSS grid.
// Weaker enemies use brighter colors and vice-versa.
const Skeleton = ({rgb}) => {

  const charRGB = 'white'

  return (
    <div title={'Ghostly skeleton'} style={{width: 30, height: 30, backgroundColor: rgb}}>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '90%', height: '100%', backgroundColor: charRGB}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '100%', height: '100%', backgroundColor: charRGB}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '20%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '30%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: charRGB}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '30%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '30%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: charRGB}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '30%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: charRGB}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '100%', height: '100%', backgroundColor: charRGB}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '40%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '40%', height: '100%', backgroundColor: charRGB}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '90%', height: '100%', backgroundColor: charRGB}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '30%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
      </div>
    </div>
  )
}

const Crabman = ({rgb}) => {

  const charRGB = 'rgb(200, 15, 50)'

  return (
    <div title={'Crabman'} style={{width: 30, height: 30, backgroundColor: rgb}}>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '30%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '30%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '40%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '20%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '40%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: charRGB}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '100%', height: '100%', backgroundColor: charRGB}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '40%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '40%', height: '100%', backgroundColor: charRGB}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '40%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '40%', height: '100%', backgroundColor: charRGB}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '40%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '40%', height: '100%', backgroundColor: charRGB}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '30%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '40%', height: '100%'}}></div>
        <div style={{width: '30%', height: '100%', backgroundColor: charRGB}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
    </div>
  )
}

const Pirate = ({rgb}) => {

  const charRGB = 'rgb(86, 15, 50)'

  return (
    <div title={'Pirate'} style={{width: 30, height: 30, backgroundColor: rgb}}>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '30%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '30%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '30%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '70%', height: '100%', backgroundColor: charRGB}}></div>
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
        <div style={{width: '40%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '60%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '40%', height: '100%'}}></div>
        <div style={{width: '40%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
      </div>
    </div>
  )
}

const Captain = ({rgb}) => {

   const charRGB = 'black'

  return (
    <div title={'The Foe'} style={{width: 30, height: 30, backgroundColor: rgb}}>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '50%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '70%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: charRGB}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: charRGB}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '60%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '40%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '20%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '40%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '60%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '30%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '40%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '40%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '30%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: charRGB}}></div>
        <div style={{width: '50%', height: '100%'}}></div>
      </div>
    </div>
  )
}

// The enemy tile component checks the enemy type in the object
// and returns the corresponding graphical tile.
export const EnemyTile = ({rgb, enemy}) => {
  if (enemy === 'skeleton') {
    return(
      <Skeleton
        rgb={rgb}
      />
    )
  } else if (enemy === 'crabman') {
    return(
      <Crabman
        rgb={rgb}
      />
    )
  } else if (enemy === 'pirate') {
    return(
      <Pirate 
        rgb={rgb}
      />
    )
  } else if (enemy === 'captain') {
    return(
      <Captain 
        rgb={rgb} 
      />
    )
  }
}

// Gets enemy graphics for the UI.
export function getEnemyGraphics(enemy) {
  if (enemy === 'skeleton'){
    return Skeleton('rgba(0, 0, 0, 0)')
  } else if (enemy === 'crabman') {
    return Crabman('rgba(0, 0, 0, 0)')
  } else if (enemy === 'pirate') {
    return Pirate('rgba(0, 0, 0, 0)')
  } else if (enemy === 'captain') {
    return Captain('rgba(0, 0, 0, 0)')
  }
}