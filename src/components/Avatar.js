import React from "react";
import { Box, Image } from "grommet";

import csaba192 from '../images/csaba192.jpg'
import csaba384 from '../images/csaba384.jpg'

const Avatar = ({size}) => (
  <Box
    flex={false}
    height={size}
    width={size}
    round="full"
    overflow="hidden"
  >
    <Image 
      srcSet={`${csaba192} 1x, ${csaba384} 2x`}
      src={csaba192}
      alt="Csaba Palfi"
    />
  </Box>
);

export default Avatar;