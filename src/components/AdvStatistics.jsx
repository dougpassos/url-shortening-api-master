import './AdvStatistics.css'
import AdvStaticsCard from './AdvStaticsCard'
import iconRecognition from '../assets/icon-brand-recognition.svg'
import iconDetailedRecords from '../assets/icon-detailed-records.svg'
import iconFullyCustomizable from '../assets/icon-fully-customizable.svg'


function AdvStatistics() {
  const card = [
    {
    titleCard: "Brand Recognition",
    textCard: `Lorem ipsum dolor sit amet consectetur 
    adipisicing elit. Quia, vitae. 
    Soluta culpa voluptatibus voluptas 
    doloremque possimus.`,
    imgIcoCard: iconRecognition
  },
  {
    titleCard: "Detailed Records",
    textCard: `Lorem ipsum dolor sit amet consectetur 
    adipisicing elit. Quia, vitae. 
    Soluta culpa voluptatibus voluptas 
    doloremque possimus.`,
    imgIcoCard: iconDetailedRecords
  },
  {
    titleCard: "Fully Customizable",
    textCard: `Lorem ipsum dolor sit amet consectetur 
    adipisicing elit. Quia, vitae. 
    Soluta culpa voluptatibus voluptas 
    doloremque possimus.`,
    imgIcoCard: iconFullyCustomizable
  }]

  return (
    <section className='adv-statistics'>
      <div className='adv-stat-title'>
        <h2>Advanced Statistics</h2>
        <p>Track how your links are performing across
          the web with our advanced dashboard.
        </p>
      </div>
      <div className='adv-stat-cards'>
        <AdvStaticsCard data={card[0]}></AdvStaticsCard>   
        <AdvStaticsCard data={card[1]}></AdvStaticsCard>
        <AdvStaticsCard data={card[2]}></AdvStaticsCard>         
      </div>
    </section>
  )
}

export default AdvStatistics
