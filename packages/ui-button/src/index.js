import React from 'react';
import './index.scss';

const Button = ({ message = 'Hello world' }) => (
   <button className="btn">{message + 'AAA'}</button>
);

export default Button;
