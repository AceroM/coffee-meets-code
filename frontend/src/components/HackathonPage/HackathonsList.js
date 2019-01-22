import React from 'react'
import { Composition } from 'atomic-layout'
import Hackathon from './Hackathon'

const HackathonsList = ({ data }) => (
  <Composition
    templateCols="repeat(auto-fit, 250px)"
    templateColsMd="repeat(2, 1fr)"
    templateColsLg="repeat(auto-fit, minmax(250px, 1fr))"
    justifyContent="center"
    gutter={16}
    gutterLg={16}
  >
    {data.map(hackathon => (
      <Hackathon key={hackathon.id} {...hackathon} />
    ))}
  </Composition>
)

export default HackathonsList;