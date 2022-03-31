import React from 'react';
import './index.scss';
import * as styles from './index.scss';

const Button = ({ message = 'Hello world' }) => (
   <button className={styles.btn}>{message + ' something else nothing else 3'}</button>
);

export default Button;
