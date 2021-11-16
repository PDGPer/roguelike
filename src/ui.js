import { Skeleton, Crabman } from './grid/05-enemies'

// UI component.
export const UI = ({playerHP, playerMaxHP, playerDamage, playerArmor, flavorText, projectileUI, meleeUI, armorUI, flavorUI, infoMessage}) => {
  return (
    <div id='ui'>
      <p>HP: <span className='statsLettering'>{playerHP}</span> of <span className='statsLettering'>{playerMaxHP}</span></p>
      <p>DMG: <span className='statsLettering'>{playerDamage}</span></p>
      <p>Armor: <span className='statsLettering'>{playerArmor}</span></p>
      <p>Inventory:<span className='statsLettering'></span></p>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        {projectileUI}
        {meleeUI}
        {armorUI}
      </div>
      <br></br>
      <hr className='hr'></hr>
      <p>{flavorText}</p>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        {flavorUI}
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        {infoMessage}
      </div>
      <hr className='hr'></hr>
    </div>
  )
}

export const GameOver = ({display}) => {
  return (
    <div style={{display: display}}>
      <div id='game-over'>
        <div style={{display: 'flex', justifyContent: 'center', marginTop: 4}}>
          <p>You're crab food, sailor!</p>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Skeleton backgroundColor={'rgba(0, 0, 0, 0)'} />
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <a href='.'>
            <button className='button'>No! I'll have my vengeance yet.</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export const GameWon = ({display}) => {
  return (
    <div style={{display: display}}>
      <div id='game-won'>
        <div style={{display: 'flex', justifyContent: 'center', marginTop: 4}}>
          <p>Your vengeance is accomplished!</p>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Crabman backgroundColor={'rgba(0, 0, 0, 0)'} />
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <a href='.'>
            <button className='button-won'>Time for another adventure.</button>
          </a>
        </div>
      </div>
    </div>
  )
}