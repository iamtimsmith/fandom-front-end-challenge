import {ButtonHTMLAttributes} from 'react';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary';
	children?: string | JSX.Element | JSX.Element[];
}

export interface IButtonElement {
	variant: 'primary' | 'secondary';
}
