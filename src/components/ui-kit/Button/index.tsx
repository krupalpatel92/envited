import React, { FunctionComponent } from 'react';
import { IButtonProps } from './types';
import styles from './Button.module.scss';
const Button: FunctionComponent<IButtonProps> = ({ label, onClick }) => (
	<button className={styles.button} onClick={onClick}>
		{label}
	</button>
);
export default Button;
