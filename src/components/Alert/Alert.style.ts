import styled from 'styled-components';
import {IAlertContainer} from './Alert.i';

export const AlertContainer = styled.aside<IAlertContainer>`
	border: 1px solid ${(props) => props.type === `success` ? `green` : `red`};
	color: white;
	padding: 10px;
	margin: 10px 0 0;
`;
