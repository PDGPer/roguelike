import React from 'react'
import { colNum, rowNum } from '../config'
import { createTerrainGrid, TerrainTile } from './01-terrain'
import { gridDecorPass, DecorTile } from './02-decor'
import { createObstacleAnchorGrid, expandObstaclesAroundAnchors, gridObstaclePass, ObstacleTile } from './03-obstacles'
import { gridBordersPass } from './04-borders'
import { gridEnemiesPass, EnemyTile } from './05-enemies'
import { Player, gridPlayerPass } from './06-player'
// import { DefaultProjectile, DefaultMelee, DefaultClothing, SkeletonProjectile, SkeletonMelee, SkeletonClothing, CrabmanProjectile, CrabmanMelee, CrabmanClothing, PirateProjectile, PirateMelee, PirateClothing, HealthPotion } from './assets/items'

// A small utility function to keep the Terrain component tidy
// and make it easier to plug in or out a terrain generation pass.
export function gridMaker() {
  return gridPlayerPass(gridEnemiesPass(gridBordersPass(gridObstaclePass(gridDecorPass(createTerrainGrid(rowNum, colNum), rowNum), expandObstaclesAroundAnchors(createObstacleAnchorGrid(rowNum, colNum))))))
}

// The terrain component processes the finished
// grid into its graphical equivalent.
export const Terrain = ({grid}) => {
  return (
    grid.map((row, rowIndex) =>
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
          } else if (tile.type === 'player') {
            return (
              <Player 
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