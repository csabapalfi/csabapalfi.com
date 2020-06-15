import React from 'react';
import { Box, Heading, Paragraph } from 'grommet';

import { Avatar } from '@palfi-ltd/ui-components';

const Intro = () => (
  <Box
    direction='row'
    flex
    overflow={{ horizontal: 'hidden' }}
    pad={{ horizontal: 'medium', vertical: 'large' }}
  >
    <Box flex align='center' justify='center'>
      <Avatar size="small"/>
      <Heading level='1'>{'Csaba Palfi'}</Heading>
      <Paragraph margin={{ horizontal: 'medium', vertical: 'small' }} textAlign="center">
        {'I build technology teams, platforms and customer experiences.'}
      </Paragraph>
    </Box>
  </Box>
);

export default Intro;