import React from 'react';
import {ButtonElement} from './Button.style';
import {IButtonProps} from './Button.i';

const Button = ({variant='primary', children, ...props}: IButtonProps) => {
	return (
		<ButtonElement variant={variant} {...props}>{children}</ButtonElement>
	);
}

export default Button;
