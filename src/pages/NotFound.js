import React from 'react';
import { Heading, Anchor, Paragraph } from 'grommet';
import PageContainer from '../components/PageContainer';

const NotFound = () => (
  <PageContainer>
      <Heading level='1'>{'Oops, page not found'}</Heading>
      <Paragraph margin={{ horizontal: 'medium', vertical: 'small' }} textAlign="center">
        <Anchor href="/">{'Back to home'}</Anchor>
      </Paragraph>

  </PageContainer>
);

export default NotFound;