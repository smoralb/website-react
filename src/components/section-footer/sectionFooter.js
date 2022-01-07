import React from 'react'
import './sectionFooter.css'

const SectionFooter = () => (
  <footer className='footer'>
    <div className='social-container'>
      <a href='https://medium.com/@smoralber'>
        <img className='social-media' src='images/medium-logo.svg' />
      </a>
      <a href='https://www.linkedin.com/in/sergiomoralbermudez/'>
        <img className='social-media' src='images/linkedin-logo.svg' />
      </a>
      <a href='https://github.com/smoralb'>
        <img className='social-media' src='images/github-logo.svg' />
      </a>
    </div>
    <p className='footer-text'>Made with ❤️ from Madrid, Spain.</p>
  </footer>
)

export default SectionFooter
