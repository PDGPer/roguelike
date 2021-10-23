// Grid objects representing the enemies.
function skeletonObject(row, col, rgb) {
  return {
    row,
    col,
    // RGB value is used for the background color.
    // Passed as props from the original terrain/decor object.
    rgb,
    hp: 10,
    type: 'enemy',
    // Enemy key is used to assing graphical components later.
    enemy: 'skeleton',
    crossable: false,
  }
}

function crabmanObject(row, col, rgb) {
  return {
    row,
    col,
    rgb,
    hp: 10,
    type: 'enemy',
    enemy: 'crabman',
    crossable: false,
  }
}

function pirateObject(row, col, rgb) {
  return {
    row,
    col,
    rgb,
    hp: 10,
    type: 'enemy',
    enemy: 'pirate',
    crossable: false,
  }
}

function captainObject(row, col, rgb) {
  return {
    row,
    col,
    rgb,
    hp: 10,
    type: 'enemy',
    enemy: 'captain',
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
            return skeletonObject(rowIndex, colIndex, tile.rgb)
          // Lower chance of spawning an average enemy.
          } else if (Math.random() < 0.01) {
            return crabmanObject(rowIndex, colIndex, tile.rgb)
          }
        }
        // Selects the middle third of the grid, which will be the middle difficulty zone.
        if (rowIndex > Math.round((grid.length - 1) / 3 - 1) && rowIndex < Math.round((grid.length - 1) / 3 * 2 + 1)) {
          // Higher chance of spawning an average enemy.
          if (Math.random() < 0.03) {
            return crabmanObject(rowIndex, colIndex, tile.rgb)
          // Lower chance of spawning a weak enemy.
          } else if (Math.random() < 0.01) {
            return skeletonObject(rowIndex, colIndex, tile.rgb)
          // Lower chance of spawning a strong enemy.
          } else if (Math.random() < 0.01) {
            return pirateObject(rowIndex, colIndex, tile.rgb)
          }
        }
        // Selects the top third of the grid, which will be the hard zone.
        if (rowIndex < Math.round((grid.length - 1) / 3)) {
          // Higher chance of spawning a strong enemy.
          if (Math.random() < 0.03) {
            return pirateObject(rowIndex, colIndex, tile.rgb)
          // Lower chance of spawning an average enemy.
          } else if (Math.random() < 0.01) {
            return crabmanObject(rowIndex, colIndex, tile.rgb)
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
      // The first tile found with a strong enemy gets replaced by the boss.
      // Variable is changed to keep track of this, so it doesn't happen again.
      if (tile.enemy === 'pirate' && captainPlaced === false) {
        captainPlaced = true
        return captainObject(rowIndex, colIndex, tile.rgb)
      } else {
        return tile
      }
    })
  )

}

// All enemies are a 10x10 CSS grid.
// Weaker enemies use brighter colors and vice-versa.
const Skeleton = ({rgb}) => {

  const enemyRGB = 'white'

  return (
    <div style={{width: 30, height: 30, backgroundColor: rgb}}>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '90%', height: '100%', backgroundColor: enemyRGB}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '100%', height: '100%', backgroundColor: enemyRGB}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '20%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '30%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: enemyRGB}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '30%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '30%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: enemyRGB}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '30%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: enemyRGB}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '100%', height: '100%', backgroundColor: enemyRGB}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '40%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '40%', height: '100%', backgroundColor: enemyRGB}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '90%', height: '100%', backgroundColor: enemyRGB}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '30%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
      </div>
    </div>
  )
}

const Crabman = ({rgb}) => {

  const enemyRGB = 'rgb(200, 15, 50)'

  return (
    <div style={{width: 30, height: 30, backgroundColor: rgb}}>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '30%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '30%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '40%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '20%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '40%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: enemyRGB}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '100%', height: '100%', backgroundColor: enemyRGB}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '40%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '40%', height: '100%', backgroundColor: enemyRGB}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '40%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '40%', height: '100%', backgroundColor: enemyRGB}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '40%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '40%', height: '100%', backgroundColor: enemyRGB}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '30%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '40%', height: '100%'}}></div>
        <div style={{width: '30%', height: '100%', backgroundColor: enemyRGB}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
    </div>
  )
}

const Pirate = ({rgb}) => {

  const enemyRGB = 'rgb(86, 15, 50)'

  return (
    <div style={{width: 30, height: 30, backgroundColor: rgb}}>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '50%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '30%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '70%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: enemyRGB}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '70%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '60%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: enemyRGB}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '30%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '30%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '40%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '40%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '70%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '30%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '50%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '30%', height: '100%'}}></div>
      </div>
    </div>
  )
}

const Captain = ({rgb}) => {

   const enemyRGB = 'black'

  return (
    <div style={{width: 30, height: 30, backgroundColor: rgb}}>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '50%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '70%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: enemyRGB}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: enemyRGB}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '60%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '40%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '20%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '40%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '60%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '30%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '40%', height: '100%', backgroundColor: enemyRGB}}></div>
        <div style={{width: '40%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '30%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: enemyRGB}}></div>
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