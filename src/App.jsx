import './App.css'
import HeaderApp from './components/HeaderApp'
import AreaGetStarted from './components/AreaGetStarted'
import AreaMoreThan from './components/AreaMoreThan'
import FormShortenUrl from './components/FormShortenUrl'
import AdvStatistics from './components/AdvStatistics'
import FooterApp from './components/FooterApp'

function App() {
  

  return (
    <>
     <HeaderApp></HeaderApp>
     <AreaMoreThan></AreaMoreThan>
     <FormShortenUrl></FormShortenUrl>
     <AdvStatistics></AdvStatistics>     
     <AreaGetStarted></AreaGetStarted>     
     <FooterApp></FooterApp>
    </>
  )
}

export default App
