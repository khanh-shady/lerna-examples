import React from 'react';
import './index.scss';

const Button = ({ message = 'Hello world' }) => (
   <button className="btn">{message + ' something else nothing'}</button>
);

export default Button;
