import './Footer.css'
import { FaGithub } from 'react-icons/fa'

function Footer() {
  return (
    <footer className='footer-container'>
      <div className='github-link'>
        <FaGithub />
        <a href="https://github.com/errabun">Eric Rabun</a>
      </div>
      <div className='github-link'>
        <FaGithub />
        <a href="https://github.com/Ryan-D-Miller">Ryan Miller</a>
      </div>
      <div className='github-link'>
        <FaGithub />
        <a href="https://github.com/daomeow">Melanie Daoheuang</a>
      </div>
    </footer>
  )
}

export default Footer
