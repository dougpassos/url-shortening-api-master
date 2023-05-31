import './AdvStaticsCard.css'

function AdvStaticsCard(props) {
  
  const dataCard = props.data;
  

  return (
    <div className="adv-card">
      <div className='adv-card-itens'>
        <div className='adv-card-itens-ico'>
          <img src={dataCard.imgIcoCard} alt="ico" />
        </div>
        <span>{dataCard.titleCard}</span>
        <p>{dataCard.textCard}</p>
      </div>
    </div>
  )
  
}

export default AdvStaticsCard