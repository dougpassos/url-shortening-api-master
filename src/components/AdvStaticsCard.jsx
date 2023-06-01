/* eslint-disable react/prop-types */
import './AdvStaticsCard.css'

function AdvStaticsCard(props) { 
  

  return (
    <div className="adv-card">
      <div className='adv-card-itens'>
        <div className='adv-card-itens-ico'>
          <img src={props.data.imgIcoCard} alt="ico" />
        </div>
        <span>{props.data.titleCard}</span>
        <p>{props.data.textCard}</p>
      </div>
    </div>
  )
  
}

export default AdvStaticsCard