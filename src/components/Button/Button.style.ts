import styled from 'styled-components';
import {IButtonElement} from './Button.i';

export const ButtonElement = styled.button<IButtonElement>`
	font-size: 1.8rem;
	padding: 10px 15px;
	margin: 5px;
	border-radius: 3px;
	border: 2px solid ${(props) => props.variant === 'primary' ? props.theme.blue[700] : props.theme.black[600]};
	background: ${(props) => props.variant === 'primary' ? props.theme.blue[600] : props.theme.black[500]};
	color: ${(props) => props.theme.black[100]};
	cursor: pointer;
	transition: background 0.25s;

	&:hover {
		background: ${(props) => props.variant === 'primary' ? props.theme.blue[700] : props.theme.black[600]};
	}
`;
