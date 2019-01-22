import React from 'react';
import { Composition, Only } from 'atomic-layout';
import { Text, Image, Button, Card } from './index';

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
const Hackathon = ({ name, url, startDate, endDate, location, isHighSchool, imageUrl }) => (
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
            <Button wide>Register</Button>
          </Actions>
        </>
      )}
    </Composition>
  </Card>
)

export default Hackathon;