import React from 'react'
import './sectionItem.css'

const SectionItem = props => (
  <div className='section-container'>
    <div className='section-info'>
      <p className='item-title'>{props.item.title}</p>
      <p className='item-subtitle'>{props.item.college}</p>
      <p className='item-subtitle'>{props.item.date}</p>
    </div>
    <div className='section-description'>
      <p>{props.item.description}</p>
    </div>
  </div>
)

export default SectionItem
