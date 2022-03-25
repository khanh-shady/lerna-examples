import React from 'react';
import './index.scss';

const H1 = ({ message = 'Hello world' }) => (
   <h1 className="h1">{message}</h1>
);

export default H1;
