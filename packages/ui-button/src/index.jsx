import React from 'react';
import './index.scss';

const Button = ({ message = 'Hello world' }) => (
   <button className="btn">{message + ' ajsdjasd'}</button>
);

export default Button;
