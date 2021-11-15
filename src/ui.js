// UI component.
export const UI = ({playerHP, playerMaxHP, playerDamage, playerArmor, flavorText, projectileUI, meleeUI, armorUI, flavorUI, infoMessage}) => {
  return (
    <div id={'ui'}>
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