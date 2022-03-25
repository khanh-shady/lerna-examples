import React from 'react';
import './index.scss';

const Button = ({ message = 'Hello world' }) => (
   <button className="btn">{message}</button>
);

export default Button;
