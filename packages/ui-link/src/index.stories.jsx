import React from 'react';
import Link from './index.jsx';
import { withKnobs, text } from '@storybook/addon-knobs';

export default { title: 'Link component', decorators: [ withKnobs ] };

export const link = () => {
  const message = text('Text', 'Click here now!');

  return <Link message={message} href="https://medium.com"></Link>;
};
