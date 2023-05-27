import './HeaderApp.css'
import imgLogo from '../../public/logo.svg'

function HeaderApp () {
  return (
    <>
      <nav>
        <img src={imgLogo} alt="logo" />
        <div className='menu'>
          <ul>
            <li><a href="#">Feature</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Resources</a></li>
          </ul>
          <div className='bt-login'>
            <button>Login</button>
            <button>Sign Up</button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default HeaderApp
