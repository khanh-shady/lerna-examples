import React from 'react';
import './index.scss';

const Link = ({ message = 'Hello world', href="/" }) => (
   <a className="link" href={href} target="_blank">{message}</a>
);

export default Link;
