import React from 'react';
import * as styles from './button.scss';

const Button = ({ message = 'Hello world' }) => (
   // <button className="btn">{message + ' something else nothing else 3'}</button>
   <button className={styles.btn}>{message + ' something else nothing else 3'}</button>
);

export default Button;
