import React from 'react';
import * as styles from './h1.scss';

const H1 = ({ message = 'Hello world' }) => (
   <h1 className={styles.btn}>{message + "2"}</h1>
);

export default H1;
