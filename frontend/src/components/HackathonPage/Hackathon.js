import React from 'react';
import { Composition } from 'atomic-layout';
import { Text, Image, Button, Card } from './index';
import { connect } from 'react-redux';
import { appendHackathon } from '../../store'

const templateMobile = `
thumbnail
heading
actions
`;

const templateTablet = `
thumbnail heading
thumbnail actions
`;

// Renders Hackathon presentational component with passed hackathon properties
const Hackathon = ({ name, url, startDate, endDate, location, isHighSchool, imageUrl, hackathons, handleHackathon, username}) => (
  <Card>
    <Composition
      template={templateMobile}
      templateMd={templateTablet}
      templateLg={templateMobile}
      templateColsMdOnly="minmax(100px, 1fr) 1fr"
      padding={15}
      gutter={15}
      gutterLg={25}
    >
      {({ Thumbnail, Heading, Actions }) => (
        <>
          <Thumbnail>
            <a href={ url }>
              <Image src={ imageUrl } alt={ name } />
            </a>
          </Thumbnail>

          <Heading>
            <a href={ url }>
              <h3>{ name }</h3>
            </a>
            <Text small muted>
              {location}
              <br></br>
              Starts on: { startDate }
              <br></br>
              Ends on: { endDate }
            </Text>
          </Heading>

          <Actions flex align="flex-end">
            {/*<Only from="md" marginRight={10}>
              <Button.Map />
      </Only>*/}
            { hackathons ? (
              hackathons.filter(m => m.trim().toLowerCase().includes(name.trim().toLowerCase())).length > 0 ? (
              <Button disabled="true" wide>Already Registered</Button>
            ) : (
              <Button onClick={e => handleHackathon(username, name)} wide>Register</Button>
            )) : (
              <div></div>
            )}
          </Actions>
        </>
      )}
    </Composition>
  </Card>
)

const mapState = state => {
  console.log(state.user.data.hackathons)
  return {
    hackathons: state.user.data.hackathons,
    username: state.user.data.username
  }
}

const mapDispatch = dispatch => {
  return {
    handleHackathon(username, name) {
      dispatch(appendHackathon(username, name))
    // dispatch(addHackathon(["asdf"]))
    }
  }
}

export default connect(mapState,mapDispatch)(Hackathon);