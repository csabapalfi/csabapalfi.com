import React from 'react';
import { Anchor, Box } from 'grommet';
import { Medium, Github, Twitter, Linkedin } from 'grommet-icons';

const Social = () => (
  <Box
    direction='row'
    align='center'
    justify='between'
    pad={{ horizontal: 'medium', vertical: 'large' }}
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