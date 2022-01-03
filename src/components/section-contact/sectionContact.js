import react from 'react'
import './sectionContact.css'

const SectionContact = props => (
  <div class='container'>
    <div class='image'>
      <img className='image' src={props.image} />
    </div>
    <div class='title'>
      <h1 className='title'>{props.title}</h1>
    </div>
    <div class='location'>
      <h1 className='location'>{props.location}</h1>
    </div>
    <div class='mail'>
      <h1 className='mail'>{props.mail}</h1>
    </div>
    <div class='phone'>
      <h1 className='phone'>{props.phone}</h1>
    </div>
  </div>
)

export default SectionContact
