import React from 'react';
import { styled } from '@compiled/css-in-js';

export default {
  title: 'media queries',
};

const ResponsiveStyledObjectLiteral = styled.div({
  color: 'blue',
  fontSize: 50,
  '@media screen and (min-width: 800px)': {
    color: 'red',
    fontSize: 30,
  },
});

const ResponsiveStyledTemplateLiteral = styled.div`
  color: blue;
  font-size: 50px;

  @media screen and (min-width: 800px) {
    color: red;
    font-size: 30px;
  }
`;

export const objectLiteral = () => (
  <ResponsiveStyledObjectLiteral>hello world</ResponsiveStyledObjectLiteral>
);

export const templateLiteral = () => (
  <ResponsiveStyledTemplateLiteral>hello world</ResponsiveStyledTemplateLiteral>
);
