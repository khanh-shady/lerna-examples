import React from 'react';
import H1 from './index.jsx';
import { withKnobs, text } from '@storybook/addon-knobs';

export default { title: 'H1 component', decorators: [ withKnobs ] };

export const h1 = () => {
  const message = text('Text', 'Click here now!');

  return <H1 message={message}></H1>;
};
