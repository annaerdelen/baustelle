import React from 'react';
import { SlugInput } from 'sanity';
import { Container, Text } from '@sanity/ui';

export const CustomSlugInput = (props, ref) => {
  return (
    <Container>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Text size={1} style={{ marginRight: '0.5em', color: '#6e7683' }}>
          www.your-website.com/
        </Text>
        <div style={{ flex: 1 }}>
          <SlugInput {...props} ref={ref} />
        </div>
      </div>
    </Container>
  );
};
