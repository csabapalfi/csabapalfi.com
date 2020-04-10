import React from 'react';
import { Helmet } from 'react-helmet';
import { Heading, Anchor, Paragraph } from 'grommet';
import PageContainer from '../components/PageContainer';

const NotFound = () => (
  <>
    <Helmet>
      <title>404 Page not found - Csaba Palfi</title>
    </Helmet>
    <PageContainer>
        <Heading level='1'>{'404 Page not found'}</Heading>
        <Paragraph margin={{ horizontal: 'medium', vertical: 'small' }} textAlign="center">
          <Anchor href="/">{'Back to csabapalfi.com'}</Anchor>
        </Paragraph>
    </PageContainer>
  </>
);

export default NotFound;