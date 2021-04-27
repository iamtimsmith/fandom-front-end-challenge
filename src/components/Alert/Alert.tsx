import React from 'react';
import {AlertContainer} from './Alert.style';
import {IAlertProps} from './Alert.i';

const Alert = ({type, children}: IAlertProps) => {
	return (
		<AlertContainer type={type}>
			{children}
		</AlertContainer>
	);
}

export default Alert;
