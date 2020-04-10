import React from 'react';
import { Box } from 'grommet';

const PageContainer = ({children}) => (
  <Box
    direction='row'
    flex
    overflow={{ horizontal: 'hidden' }}
    pad={{ horizontal: 'medium', vertical: 'large' }}
  >
    <Box flex align='center' justify='center'>
      {children}
    </Box>
  </Box>
);

export default PageContainer;