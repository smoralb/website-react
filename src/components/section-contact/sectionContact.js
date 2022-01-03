import react from 'react'
import './sectionContact.css'

const SectionContact = props => (
  <div className='contact-me-container'>
    <img id='portrait-img' src='images/portrait-mobile.jpeg' />
    <h1 id='contact-title'>{props.title}</h1>
  </div>
)

export default SectionContact
