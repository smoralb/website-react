import React from 'react'
import './sectionFooter.css'

const SectionFooter = () => (
  <footer className='footer'>
    <div className='social-container'>
      <a href='https://medium.com/@smoralber' target='_blank'>
        <img className='social-media' src='images/medium-logo.svg' />
      </a>
      <a
        href='https://www.linkedin.com/in/sergiomoralbermudez/'
        target='_blank'
      >
        <img className='social-media' src='images/linkedin-logo.svg' />
      </a>
      <a href='https://github.com/smoralb' target='_blank'>
        <img className='social-media' src='images/github-logo.svg' />
      </a>
    </div>
    <p className='footer-text'>Made with ❤️ from Madrid, Spain.</p>
  </footer>
)

export default SectionFooter
