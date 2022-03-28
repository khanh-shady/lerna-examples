import React from 'react';
import './index.scss';

const Link = ({ message = 'Hello world', href="/" }) => (
   <a className="link" href={href} target="_blank">{message + "1"}</a>
);

export default Link;
