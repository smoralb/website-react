import react from 'react'
import './sectionContact.css'

const SectionContact = props => (
  <div className='container'>
    <div className='image'>
      <img className='image' src={props.image} />
    </div>
    <div className='title'>
      <h1 className='title'>{props.title}</h1>
    </div>
    <div className='location'>
      <h1 className='location'>{props.location}</h1>
    </div>
    <div className='mail'>
      <h1 className='mail'>{props.mail}</h1>
    </div>
    <div className='phone'>
      <h1 className='phone'>{props.phone}</h1>
    </div>
  </div>
)

export default SectionContact
