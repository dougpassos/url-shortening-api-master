import './AreaMoreThan.css'
import workingImage from '../assets/illustration-working.svg'
import ButtonGetStarted from './ButtonGetStarted'

function AreaMoreThan() {
  return (
    <section className='more-than'>
      <img src={workingImage} alt="" />
      <div>
        <h1>More than just shorter links</h1>
        <p>Build your brands recognition and 
          get detailed insights on how your links are performing
        </p>
        <ButtonGetStarted></ButtonGetStarted>
      </div>
    </section>
  )  
}

export default AreaMoreThan;
