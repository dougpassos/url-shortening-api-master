import './FooterApp.css'
import imgLogo from '../assets/logo.svg'
import icoFacebook from '../assets/icon-facebook.svg'
import icoTwitter from '../assets/icon-twitter.svg'
import icoPinterest from '../assets/icon-pinterest.svg'
import icoinstagram from '../assets/icon-instagram.svg'

function FooterApp() {

  return (
    <>
      <footer>
        <img src={imgLogo} alt="logo" />
        <div className='footer-links footer-features'>
          <a href="#">Link Shortening</a>
          <a href="#">Branded Links</a>
          <a href="#">Analytics</a>        
        </div>
        <div className='footer-links footer-resources'>
          <a href="#">Blog</a>
          <a href="#">Developers</a>
          <a href="#">Support</a>
        </div>
        <div className='footer-links footer-company'>
          <a href="#">About</a>
          <a href="#">Our Team</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>
        </div>
        <div className='footer-social'>
          <img src={icoFacebook} alt="facebook" />
          <img src={icoTwitter} alt="twitter" />
          <img src={icoPinterest} alt="Pin" />
          <img src={icoinstagram} alt="Instagran" />
        </div>
      </footer>    
    </>
  )  
}

export default FooterApp
