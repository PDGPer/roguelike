import { itemDropChance, rumDropChance } from '../config'
import { terrainObject } from './01-terrain'

// Grid objects representing skeleton drops.
function skeletonProjectileObject(row, col, rgb) {
  return {
    row,
    col,
    rgb,
    type: 'item',
    item: 'projectile',
    techLevel: 1,
    flavorText: "You pick up the skeleton's skull to use as a weapon. It lets out a disturbing ear piercing shriek as you throw it.",
    crossable: true,
  }
}

function skeletonMeleeObject(row, col, rgb) {
  return {
    row,
    col,
    rgb,
    type: 'item',
    item: 'melee',
    techLevel: 1,
    flavorText: 'A broken bone, splintered at one end. It will do as a melee weapon. Your fingers feel numb holding it.',
    crossable: true,
  }
}

function skeletonArmorObject(row, col, rgb) {
  return {
    row,
    col,
    rgb,
    type: 'item',
    item: 'armor',
    techLevel: 1,
    flavorText: "The skeleton's ribcage serves as improvised armor. Your heart sometimes skips a beat while wearing it, and you're never sure if the next one will come.",
    crossable: true,
  }
}

// Grid objects representing crabman drops.
function crabmanProjectileObject(row, col, rgb) {
  return {
    row,
    col,
    rgb,
    type: 'item',
    item: 'projectile',
    techLevel: 2,
    flavorText: 'A foul-smelling crabman egg. When these burst, everyone in the vicinity is compelled to retch their last three meals. A good throwing weapon.',
    crossable: true,
  }
}

function crabmanMeleeObject(row, col, rgb) {
  return {
    row,
    col,
    rgb,
    type: 'item',
    item: 'melee',
    techLevel: 2,
    flavorText: 'A crabman claw serves as a decent club-glove-thing after some scraping of internals.',
    crossable: true,
  }
}

function crabmanArmorObject(row, col, rgb) {
  return {
    row,
    col,
    rgb,
    type: 'item',
    item: 'armor',
    techLevel: 2,
    flavorText: 'After long hours spent scraping organic matter from its interior, a crabmen shell will make do as armor. You will never smell the same, however.',
    crossable: true,
  }
}

// Grid objects representing pirate drops.
function pirateProjectileObject(row, col, rgb) {
  return {
    row,
    col,
    rgb,
    type: 'item',
    item: 'projectile',
    techLevel: 3,
    flavorText: 'This flintlock pistol is worn by use but well mantained. Its barrel lists too many notches to count at a glance.',
    crossable: true,
  }
}

function pirateMeleeObject(row, col, rgb) {
  return {
    row,
    col,
    rgb,
    type: 'item',
    item: 'melee',
    techLevel: 3,
    flavorText: 'A boarding sabre, sharp and glistening. The leather handle smells like old sweat and blood.',
    crossable: true,
  }
}

function pirateArmorObject(row, col, rgb) {
  return {
    row,
    col,
    rgb,
    type: 'item',
    item: 'armor',
    techLevel: 3,
    flavorText: 'A dented cuirass. Rust slowly eats away at it, but it serves still.',
    crossable: true,
  }
}

// Grid object representing rum.
function rumObject(row, col, rgb) {
  return {
    row,
    col,
    rgb,
    type: 'item',
    item: 'rum',
    techLevel: 99,
    flavorText: 'A well preserved bottle of rum. A reminder that good things still exist, somewhere far away from this cursed place.',
    crossable: true,
  }
}

// Graphics for default items.
export const DefaultProjectile = ({rgb}) => {

  const itemRGB = 'rgb(200, 130, 70)'

  return (
    <div title={'Some rocks'} style={{width: 30, height: 30, backgroundColor: rgb}}>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '100%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '100%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '40%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '40%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>        
        <div style={{width: '40%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '40%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>       
        <div style={{width: '100%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '30%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '30%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>       
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '30%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '30%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>        
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '30%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '50%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>       
        <div style={{width: '100%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '100%', height: '100%'}}></div>
      </div>
    </div>
  )
}

export const DefaultMelee = ({rgb}) => {

  const itemRGB = 'rgb(200, 130, 70)'

  return (
    <div title={'A stick'} style={{width: 30, height: 30, backgroundColor: rgb}}>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '30%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '40%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '40%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '50%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '40%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '50%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>        
        <div style={{width: '40%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '50%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>        
        <div style={{width: '40%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '40%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '40%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>       
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '50%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>       
        <div style={{width: '30%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '50%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '40%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '50%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '40%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '50%', height: '100%'}}></div>
      </div>
    </div>
  )
}

export const DefaultArmor = ({rgb}) => {

  const itemRGB = 'rgb(200, 130, 70)'

  return (
    <div title={'Rags'} style={{width: 30, height: 30, backgroundColor: rgb}}>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '30%', height: '100%'}}></div>
        <div style={{width: '40%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '30%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '30%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '40%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>        
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '40%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>       
        <div style={{width: '30%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '30%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '30%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '30%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>        
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '80%', height: '100%', backgroundColor: itemRGB}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>       
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '30%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '50%', height: '100%', backgroundColor: itemRGB}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>        
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '30%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '50%', height: '100%', backgroundColor: itemRGB}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>       
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '30%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '50%', height: '100%', backgroundColor: itemRGB}}></div>
      </div>
    </div>
  )
}

// Graphics for skeleton items.
export const SkeletonProjectile = ({rgb}) => {

  const itemRGB = 'white'

  return (
    <div title={'Screaming skull'} style={{width: 30, height: 30, backgroundColor: rgb}}>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '30%', height: '100%'}}></div>
        <div style={{width: '50%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '70%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>        
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>       
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '60%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '30%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '30%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>        
        <div style={{width: '30%', height: '100%'}}></div>
        <div style={{width: '40%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '30%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>        
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '80%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>       
        <div style={{width: '40%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>       
        <div style={{width: '100%', height: '100%'}}></div>
      </div>
    </div>
  )
}

export const SkeletonMelee = ({rgb}) => {

  const itemRGB = 'white'

  return (
    <div title={'Sharpened bone'} style={{width: 30, height: 30, backgroundColor: rgb}}>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '50%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '30%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '50%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '30%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>        
        <div style={{width: '60%', height: '100%'}}></div>
        <div style={{width: '30%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>        
        <div style={{width: '50%', height: '100%'}}></div>
        <div style={{width: '40%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '40%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '40%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>        
        <div style={{width: '30%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '50%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>        
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '60%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>       
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '80%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>        
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '90%', height: '100%'}}></div>
      </div>
    </div>
  )
}

export const SkeletonArmor = ({rgb}) => {

  const itemRGB = 'white'

  return (
    <div title={'Ribcage'} style={{width: 30, height: 30, backgroundColor: rgb}}>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '100%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '30%', height: '100%'}}></div>
        <div style={{width: '40%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '30%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>        
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>        
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '60%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>        
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '60%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>        
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>        
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>      
        <div style={{width: '40%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '40%', height: '100%'}}></div>
      </div>
    </div>
  )
}

// Graphics for crabman items.
export const CrabmanProjectile = ({rgb}) => {

  const itemRGB = 'rgb(200, 15, 50)'

  return (
    <div title={'Smelly eggs'} style={{width: 30, height: 30, backgroundColor: rgb}}>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '100%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '60%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '50%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>        
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '40%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '50%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>        
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '60%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '60%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '50%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '50%', height: '100%'}}></div>
        <div style={{width: '40%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>       
        <div style={{width: '60%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '100%', height: '100%'}}></div>
      </div>
    </div>
  )
}

export const CrabmanMelee = ({rgb}) => {

  const itemRGB = 'rgb(200, 15, 50)'

  return (
    <div title={'Crab claw'} style={{width: 30, height: 30, backgroundColor: rgb}}>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '30%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '50%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '50%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '40%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '40%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '40%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '40%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '30%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '30%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '30%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '50%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '30%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '50%', height: '100%'}}></div>
        <div style={{width: '30%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '60%', height: '100%'}}></div>
        <div style={{width: '30%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '70%', height: '100%'}}></div>
        <div style={{width: '30%', height: '100%', backgroundColor: itemRGB}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '80%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
    </div>
  )
}

export const CrabmanArmor = ({rgb}) => {

  const itemRGB = 'rgb(200, 15, 50)'

  return (
    <div title={'Hollow shell'} style={{width: 30, height: 30, backgroundColor: rgb}}>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '60%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '40%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '60%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '40%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>  
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '30%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '30%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '30%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '30%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '40%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
    </div>
  )
}

// Graphics for pirate items.
export const PirateProjectile = ({rgb}) => {

  const itemRGB = 'rgb(86, 15, 50)'

  return (
    <div title={'Flintlock pistol'} style={{width: 30, height: 30, backgroundColor: rgb}}>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '70%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '60%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '30%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '50%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '40%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '40%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '50%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '30%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '60%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '50%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '60%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '70%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '70%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
      </div>
    </div>
  )
}

export const PirateMelee = ({rgb}) => {

  const itemRGB = 'rgb(86, 15, 50)'

  return (
    <div title={'Boarding sabre'} style={{width: 30, height: 30, backgroundColor: rgb}}>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '80%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '70%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '60%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '50%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '30%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '40%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '40%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '30%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '50%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '60%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '60%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '60%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '70%', height: '100%'}}></div>
      </div>
    </div>
  )
}

export const PirateArmor = ({rgb}) => {

  const itemRGB = 'rgb(86, 15, 50)'

  return (
    <div title={'Cuirass'} style={{width: 30, height: 30, backgroundColor: rgb}}>

      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '30%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '30%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '30%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '40%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '40%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '40%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '40%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '10%', height: '100%'}}></div>
        <div style={{width: '30%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '60%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '30%', height: '100%'}}></div>
        <div style={{width: '40%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '30%', height: '100%'}}></div>
      </div>
    </div>
  )
}

// Graphics for health potion.
export const RumBottle = ({rgb}) => {

  const itemRGB = 'lime'

  return (
    <div title={'Rum'} style={{width: 30, height: 30, backgroundColor: rgb}}>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '40%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '40%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '40%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '40%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '40%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '40%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '30%', height: '100%'}}></div>
        <div style={{width: '40%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '30%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '20%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '40%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '60%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '60%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '40%', height: '100%'}}></div>
        <div style={{width: '10%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
      </div>
      <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '20%', height: '100%'}}></div>
        <div style={{width: '60%', height: '100%', backgroundColor: itemRGB}}></div>
        <div style={{width: '20%', height: '100%'}}></div>
      </div>
    </div>
  )
}

// Keeps track of which weapons and armor have already dropped, to avoid duplicates.
let hasSkeletonProjectileDropped = false
let hasSkeletonMeleeDropped = false
let hasSkeletonArmorDropped = false

let hasCrabmanProjectileDropped = false
let hasCrabmanMeleeDropped = false
let hasCrabmanArmorDropped = false

let hasPirateProjectileDropped = false
let hasPirateMeleeDropped = false
let hasPirateArmorDropped = false

// Figures out which item should drop depending on enemy and what the player already holds.
export function itemDrop (row, col, rgb, enemy, projectileTechLvl, meleeTechLvl, armorTechLvl) {

  if (enemy === 'skeleton') {
    if (projectileTechLvl === 0 && hasSkeletonProjectileDropped === false && Math.random() < itemDropChance) {
      hasSkeletonProjectileDropped = true
      return skeletonProjectileObject(row, col, rgb)
    } else if (meleeTechLvl === 0 && hasSkeletonMeleeDropped === false && Math.random() < itemDropChance) {
      hasSkeletonMeleeDropped = true
      return skeletonMeleeObject(row, col, rgb)
    } else if (armorTechLvl === 0 && hasSkeletonArmorDropped === false && Math.random() < itemDropChance) {
      hasSkeletonArmorDropped = true
      return skeletonArmorObject(row, col, rgb)
    } else if (Math.random() < rumDropChance) {
      return rumObject(row, col, rgb)
    } else {
      return terrainObject(row, col, rgb)
    }
  }
  if (enemy === 'crabman') {
    if (projectileTechLvl <= 1 && hasCrabmanProjectileDropped === false && Math.random() < itemDropChance) {
      hasCrabmanProjectileDropped = true
      return crabmanProjectileObject(row, col, rgb)
    } else if (meleeTechLvl <= 1 && hasCrabmanMeleeDropped === false && Math.random() < itemDropChance) {
      hasCrabmanMeleeDropped = true
      return crabmanMeleeObject(row, col, rgb)
    } else if (armorTechLvl <= 1 && hasCrabmanArmorDropped === false && Math.random() < itemDropChance) {
      hasCrabmanArmorDropped = true
      return crabmanArmorObject(row, col, rgb)
    } else if (Math.random() < rumDropChance) {
      return rumObject(row, col, rgb)
    } else {
      return terrainObject(row, col, rgb)
    }
  }
  if (enemy === 'pirate') {
    if (projectileTechLvl <= 2 && hasPirateProjectileDropped === false && Math.random() < itemDropChance) {
      hasPirateProjectileDropped = true
      return pirateProjectileObject(row, col, rgb)
    } else if (meleeTechLvl <= 2 && hasPirateMeleeDropped === false && Math.random() < itemDropChance) {
      hasPirateArmorDropped = true
      return pirateMeleeObject(row, col, rgb)
    } else if (armorTechLvl <= 2 && hasPirateArmorDropped === false && Math.random() < itemDropChance) {
      hasPirateArmorDropped = true
      return pirateArmorObject(row, col, rgb)
    } else if (Math.random() < rumDropChance) {
      return rumObject(row, col, rgb)
    } else {
      return terrainObject(row, col, rgb)
    }
  }
}

// Retuns a different graphical component based on the item requested.
export const Item = ({rgb, techLevel, item}) => {
  // If the item is skeleton level.
  if (techLevel === 1) {
    if (item === 'projectile') {
      return (
        <SkeletonProjectile rgb={rgb} />
      )
    } else if (item === 'melee') {
      return (
        <SkeletonMelee rgb={rgb} />
      )
    } else if (item === 'armor') {
      return (
        <SkeletonArmor rgb={rgb} />
      )
    } 
  // If the item is crabman level.
  } else if (techLevel === 2) {
    if (item === 'projectile') {
      return (
        <CrabmanProjectile rgb={rgb} />
      )
    } else if (item === 'melee') {
      return (
        <CrabmanMelee rgb={rgb} />
      )
    } else if (item === 'armor') {
      return (
        <CrabmanArmor rgb={rgb} />
      )
    } 
  // If the item is pirate level.
  } else if (techLevel === 3) {
    if (item === 'projectile') {
      return (
        <PirateProjectile rgb={rgb} />
      )
    } else if (item === 'melee') {
      return (
        <PirateMelee rgb={rgb} />
      )
    } else if (item === 'armor') {
      return (
        <PirateArmor rgb={rgb} />
      )
    } 
  } else {
    // Otherwise returns a rum bottle.
    return (
      <RumBottle rgb={rgb} />
    )
  }
}