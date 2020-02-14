import React from 'react';
import { Box, Heading, Paragraph } from 'grommet';

import Avatar from './Avatar';

const Intro = () => (
  <Box
    direction='row'
    flex
    overflow={{ horizontal: 'hidden' }}
    pad={{ horizontal: 'medium', vertical: 'large' }}
  >
    <Box flex align='center' justify='center'>
      <Avatar size="small"/>
      <Heading level='1'>Csaba Palfi</Heading>
      <Paragraph margin={{ horizontal: 'medium', vertical: 'small' }} textAlign="center">
        I help build great technology teams <br />and create engaging web and mobile experiences.
      </Paragraph>
    </Box>
  </Box>
);

export default Intro;