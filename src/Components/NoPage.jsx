
import React from 'react';
import { Box, Heading, useBreakpointValue } from "@chakra-ui/react";
import PageContainer from './PageContainer';

function NoPage() {
  const headingSize = useBreakpointValue({ base: '2xl', md: '4xl' });
  const headingPadding = useBreakpointValue({ base: 4, md: 8 });

  return (
    <PageContainer>
      <Box textAlign="center" py={headingPadding} bg="brand.highlight_light">
        <Heading id='hero-title' size={headingSize} color="brand.primary" fontFamily="heading">
          Wrong way... 404
        </Heading>
      </Box>
    </PageContainer>
  );
}

export default NoPage;
