import React from 'react';
import './sectionHeader.css'

const SectionHeader = (props) =>
<div className="section-header">
    <h1 className="section-title">{props.title}</h1>
</div>

export default SectionHeader;