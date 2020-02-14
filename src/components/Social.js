import React from 'react';
import { Anchor, Box } from 'grommet';
import { Medium, Github, Twitter, Linkedin } from 'grommet-icons';

const Social = () => (
  <Box
    tag='footer'
    direction='row'
    align='center'
    justify='between'
    background='light'
    pad={{ horizontal: 'medium', vertical: 'small' }}
    style={{ zIndex: '1' }}
    margin="auto"
  >
    {
      [
        ['https://twitter.com/csabapalfi', Twitter],
        ['https://github.com/csabapalfi', Github],
        ['https://medium.com/@csabapalfi', Medium],
        ['https://www.linkedin.com/in/csabapalfi/', Linkedin],
      ].map(([href, Icon]) => {
        const icon = <Icon color="dark-2" size="large" />;
        return <Anchor key={href} href={href} icon={icon} />
      })
    }
  </Box>
);

export default Social;