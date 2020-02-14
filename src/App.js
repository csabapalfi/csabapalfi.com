import React from 'react';
import { Box, Grommet } from 'grommet';

import theme from './theme';
import Intro from './components/Intro';
import Social from './components/Social';

const App = () => (
  <Grommet theme={theme}>
    <Box>
      <Intro />
      <Social />
    </Box>
  </Grommet>
);

export default App;