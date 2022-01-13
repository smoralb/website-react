import React from 'react'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import Typography from '@mui/material/Typography'
import './sectionExperience.css'

export default function SectionExperience (props) {
  return (
    <Timeline position={props.position}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant='outlined' color='info' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant='h6'>{props.item.role}</Typography>
          <Typography>{props.item.company}</Typography>
          <Typography variant='h7'>{props.item.date}</Typography>
          <Typography className='description'>
            {props.item.description}
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}
