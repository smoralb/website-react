import React from 'react'
import './sectionFooter.css'

const SectionFooter = () => (
  <footer className='footer'>
    <div className='social-container'>
      <a href='https://twitter.com/smoralber' target='_blank'>
        <img className='social-media' src='images/twitter-icon-white.jpg' />
      </a>
      <a
        href='https://www.linkedin.com/in/sergiomoralbermudez/'
        target='_blank'
      >
        <img className='social-media' src='images/linkedin-white-icon.jpg' />
      </a>
      <a href='https://github.com/smoralb' target='_blank'>
        <img className='social-media' src='images/github-white-icon.jpg' />
      </a>
    </div>
    <p className='footer-text'>Made with ❤️ from Madrid, Spain.</p>
  </footer>
)

export default SectionFooter
