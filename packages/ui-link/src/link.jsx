import React from 'react';
import * as styles from './link.scss';

const Link = ({ message = 'Hello world', href="/" }) => (
   <a className={styles.btn} href={href} target="_blank">{message + "1"}</a>
);

export default Link;
