import React from "react";
import './sectionItem.css'

const SectionItem = (props) => 
<div className="section-container">
    <div className="section-info">
        <p className="item-title">{props.title}</p>
        <p className="item-college">{props.college}</p>
        <p className="item-date">{props.date}</p>
    </div>
    <div className="section-description">
        <p>{props.description}</p>
    </div>
</div>

export default SectionItem;