import React from 'react';
import { SlugInput } from 'sanity';
import { Container, Text } from '@sanity/ui';

export const CustomSlugInput = ({ basePath = '', ...props }) => {
  const getBasePath = () => {
    if (basePath) return `${basePath}/`;
    return '';
  };

  return (
    <Container>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Text size={1} style={{ marginRight: '0.5em', color: '#6e7683' }}>
          www.your-website.com/{getBasePath()}
        </Text>
        <div style={{ flex: 1 }}>
          <SlugInput {...props} />
        </div>
      </div>
    </Container>
  );
};

// USE
// {
//   name: 'slug',
//   type: 'slug',
//   description: 'Is a part of the URL that serves as an unique identifier of the page.',
//   options: { source: 'title', slugify },
//   validation: slugValidation,
//   components: {
//     input: (props) => CustomSlugInput({ ...props, basePath: 'work-overview' }),
//   },
// },
