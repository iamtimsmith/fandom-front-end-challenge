import styled from 'styled-components';
import sprite from 'assets/talent-icons-sprite.png';
import {ITalentButton} from './Talent.i';

export const TalentButton = styled.button<ITalentButton>`
	flex: 0 0 55px;
	position: relative;
	height: 55px;
	width: 5px;
	background: ${(props) => props.active ? 
		`linear-gradient(to bottom, ${props.theme.blue[300]} 50%, ${props.theme.blue[700]} 50%, ${props.theme.blue[300]})` :
		`linear-gradient(to bottom, ${props.theme.black[500]} 50%, ${props.theme.black[700]} 50%, ${props.theme.black[500]})`};
	border: none;
	cursor: pointer;
	box-shadow: ${(props) => props.active ?
		`0 0 5px rgba(255,255,255,0.8)` : ``};
	z-index: 2;

	&:after {
		content: '';
		display: block;
		position: absolute;
		top: 3px;
		bottom: 3px;
		left: 3px;
		right: 3px;
		background: ${(props) => props.theme.black[700]};
		background-image: url(${sprite});
		background-repeat: no-repeat;
		background-position: ${(props) => props.active ? `${props.pos}px 0` : `${props.pos}px -50px`};
	}
`;
