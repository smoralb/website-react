import React from 'react'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import Typography from '@mui/material/Typography'

export default function SectionExperience (props) {
  return (
    <Timeline position={props.position}>
      <TimelineItem>
      <TimelineSeparator>
          <TimelineDot/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant='h6' component='span'>
            {props.item.role}
          </Typography>
          <Typography>{props.item.company}</Typography>
          <Typography>{props.item.date}</Typography>
          <Typography>{props.item.description}</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}
